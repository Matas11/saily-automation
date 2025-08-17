const { spawn } = require("child_process");
const fs = require("fs");

const runCommand = (command, args = []) =>
  new Promise((resolve) => {
    const process = spawn(command, args, { stdio: "inherit", shell: true });
    process.on("close", (code) => resolve(code === 0));
  });

(async () => {
  const view = process.env.VIEW || "desktop";
  const tags = view === "mobile" ? "@Mobile" : "@Desktop";

  console.log(`Running ${tags} tests...`);

  const testPassed = await runCommand("cucumber-js", [
    "--config", "cucumber.js",
    "--tags", tags,
  ]);

  if (!fs.existsSync("./reports/cucumber_report.json")) {
    console.error("JSON report file not generated. Skipping report generation.");
    process.exit(1);
  }

  console.log("Generating report...");

  const reportGenerated = await runCommand("npm", ["run", "generate-report"]);

  process.exit(reportGenerated && testPassed ? 0 : 1);
})();