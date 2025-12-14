import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [{
  ignores: ["**/generated/*"],
}, ...nextCoreWebVitals, ...nextTypescript, ...compat.config({
  plugins: ["@typescript-eslint"],

  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["warn"],
    "@typescript-eslint/no-unused-expressions": ["warn"],
  }
})];

export default eslintConfig;
