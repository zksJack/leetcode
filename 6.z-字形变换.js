/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let length = s.length;
  if (numRows == 1) return s;
  let rows = [];
  for (let i = 0; i < Math.min(numRows, length); i++) {
    rows.push([]); // 新建一行
  }
  let curRow = 0; //行标识
  let goingDown = false; // 向上或者向下标识；
  for (let c of s) {
    rows[curRow]?.push(c);
    if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.flat(Infinity).join('');
};
// @lc code=end
console.log(convert('PA',1));