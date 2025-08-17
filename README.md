# 🚀 Saily QA Automation Framework

This is an end-to-end (E2E) automation framework built with **Playwright**, **Cucumber**, and **TypeScript** to test [saily.com](https://saily.com).

---

## 📦 Cloning the Repository

```bash
git clone https://github.com/Matas11/saily-automaton.git
cd saily-automaton
```

---

## 🧪 Running Tests

### 💻 Desktop View

**Headless mode:**
```bash
npx cross-env HEADLESS=true npm run test:saily:desktop
```

**Non-headless mode:**
```bash
npx cross-env HEADLESS=false npm run test:saily:desktop
```

---

### 📱 Mobile View

**Headless mode:**
```bash
npx cross-env HEADLESS=true npm run test:saily:mobile
```

**Non-headless mode:**
```bash
npx cross-env HEADLESS=false npm run test:saily:mobile
```

---

## 🖼️ Screenshots on Test Failure

If a test fails, a `screenshots/` folder will be created in the project root.  
Each failed step will have a `.png` screenshot for easier debugging.

---

## 📊 Test Reports

After all tests have finished:

- A `reports/` folder is created in the project root.
- If all tests pass, the report will confirm success.
- If any test fails, the report will show:
  - Which **Cucumber step** failed
  - The exact **error logs**

---

## 🥒 Cucumber Feature Files

Feature files:

- `tests/desktop/saily.feature`
- `tests/mobile/saily.feature`

To navigate to step definitions in your IDE:  
Hold `Cmd` (macOS) or `Ctrl` (Windows) and click on any step.

---

## ⚙️ cucumber.js Settings

- **Parallel Execution:**
  - Set to `2` (runs 3 browsers in parallel: N + 1)
  - You can change this in `cucumber.js`

- **Retry Mechanism:**
  - Set to retry failed tests up to `3` times
  - Only marked as failed if all retries fail

---

✅ **Ready to scale. Easy to maintain. Built for quality.**