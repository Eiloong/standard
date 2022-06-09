// @see: https://www.prettier.cn

module.exports = {
  // 超过最大值换行
  printWidth: 80,
  // 缩进字节数
  tabWidth: 2,
  // 结尾不用分号(true有，false没有)
  semi: false,
  // 使用单引号(true单双引号，false双引号)
  singleQuote: true,
  // 在JSX中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
  quoteProps: 'as-needed',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 尾随逗号(es5|none|all)
  trailingComma: 'none',
  //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
  arrowParens: 'always'
}
