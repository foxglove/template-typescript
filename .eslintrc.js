module.exports = {
  extends: ["plugin:@foxglove/base"],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@foxglove/typescript"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
};
