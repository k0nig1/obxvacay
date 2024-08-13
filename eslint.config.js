import typescriptEslintParser from "@typescript-eslint/parser";
import eslint from "@eslint/js";
import globals from "globals";
import angular from "angular-eslint";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "**/.angular/*",
            "**/.vscode/*",
            "**/node_modules/*",
            "**/dist/*",
        ],
    },
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            parser: typescriptEslintParser,
            parserOptions: {
                project: ["./tsconfig.json"],
                createDefaultProgram: true,
            },
            globals: {
                ...globals.browser,
                ...globals.jasmine,
                Stripe: true,
                cy: true,
                Cypress: true,
            },
        },
        rules: {
            ...
            "@angular-eslint/component-selector": [
                "error",
                {
                    prefix: "app",
                    style: "kebab-case",
                    type: "element",
                },
      ],
            ...
    },
    },
);
