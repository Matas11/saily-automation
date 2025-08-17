const fs = require("fs");
const path = require("path");
const reporter = require("multiple-cucumber-html-reporter");

// Path to the single JSON file
const reportFile = "./reports/cucumber_report.json";

// Delay function for waiting a bit before generating the report
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Check if the JSON report file exists
if (!fs.existsSync(reportFile)) {
  console.error("Cucumber JSON report file not found. Ensure tests generate the JSON report.");
  process.exit(1); // Exit with failure status
}

// Read and parse the JSON file
let reportData;
try {
  reportData = JSON.parse(fs.readFileSync(reportFile, "utf-8"));
} catch (error) {
  console.error("Error reading or parsing the JSON file:", error.message);
  process.exit(1); // Exit with failure status
}

// Ensure that there is data to deduplicate
if (!reportData || reportData.length === 0) {
  console.error("No test results found in the JSON report.");
  process.exit(1); // Exit with failure status
}

// Deduplicate scenarios to avoid duplicates in the report
const deduplicatedData = reportData.map((feature) => {
  const uniqueScenarios = [];
  const seenScenarioNames = new Set();

  feature.elements.forEach((scenario) => {
    if (!seenScenarioNames.has(scenario.name)) {
      uniqueScenarios.push(scenario);
      seenScenarioNames.add(scenario.name);
    }
  });

  return {
    ...feature,
    elements: uniqueScenarios, // Replace with deduplicated scenarios
  };
});

// Write the deduplicated JSON back to the file
try {
  fs.writeFileSync(reportFile, JSON.stringify(deduplicatedData, null, 2));
} catch (error) {
  console.error("Error writing the deduplicated JSON file:", error.message);
  process.exit(1); // Exit with failure status
}

// Function to generate the report after a short delay to ensure the file is written
const generateReport = async () => {
  await delay(2000); // Wait for 2 seconds to ensure the JSON file is written

  try {
    reporter.generate({
      jsonDir: path.dirname(reportFile), // Directory containing the JSON file
      reportPath: path.join(path.dirname(reportFile), "html"),
      metadata: {
        browser: {
          name: "chrome",
          version: "114",
        },
        device: "Local Machine",
        platform: {
          name: process.platform,
          version: process.version,
        },
      },
      // Force the report to be generated even if all tests fail
      displayFailed: true, // Ensure failed tests are displayed in the report
      displayDuration: true,
      displayRich: true, // Display detailed information in the report
    });

    console.log(`HTML report generated at ${path.join(path.dirname(reportFile), "html/index.html")}`);
  } catch (error) {
    console.error("Error generating the HTML report:", error.message);
    process.exit(1); // Exit with failure status
  }
};

// Wait until the retries are completed
const waitForRetries = async () => {
  // Retry logic condition: Add logic here to wait for retries to finish
  let retriesComplete = false;

  // This could be implemented as checking for a "retries complete" flag, or a certain condition
  while (!retriesComplete) {
    // Add your condition to check for retries completion (could be based on log output or test status)
    // For now, we just wait for a fixed time
    await delay(2000); // Check every 5 seconds
    retriesComplete = true; // Set this flag when retries are done
  }

  generateReport(); // Generate report after retries are done
};

// Call function to wait for retries to finish
waitForRetries();