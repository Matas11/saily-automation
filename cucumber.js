require('dotenv').config({ path: './config/parallel.env' });

const parallel = process.env.PARALLEL || 2;
const view = process.env.VIEW || 'desktop'; 
const tag = view === 'mobile' ? '@Mobile' : '@Desktop';

module.exports = {
  default: {
    require: [
      "features/common/step-definitions/**/*.ts",
      "./src/hooks/Before.ts",
      "./src/hooks/After.ts",
    ],
    requireModule: ["ts-node/register"],
    paths: [
      "tests/**/*.feature",
    ],
    tags: tag, 
    parallel: parseInt(parallel, 10),
    retry: 3,
    format: [
      "@cucumber/pretty-formatter",
      "json:reports/cucumber_report.json",
    ],
  },
};