/** @type { import("prettier").Config } */
const config = {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: "consistent",
	jsxSingleQuote: false,
	trailingComma: "none",
	bracketSpacing: true,
	bracketSameLine: true,
	jsxBracketSameLine: true,
	arrowParens: "always",
	rangeStart: 0,
	rangeEnd: Infinity,
	requirePragma: false,
	insertPragma: false,
	proseWrap: "preserve",
	htmlWhitespaceSensitivity: "css",
	vueIndentScriptAndStyle: false,
	endOfLine: "crlf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: true
};

export default config;
