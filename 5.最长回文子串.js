/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //判断一个字符串是否是回文
    function isPalindrome(str){
        const length = str.length;
        if(length<2) return true;
        const halfLen = Math.floor(length/2);
        const arr = str.slice('');
        for(let i = 0 ;i<halfLen;i++){
            if(arr[i] !== arr[length-1-i]){
                return false
            }
        } 
        return true;
    }


    let len = s.length;
    if(len<2) return s;
    let maxPalindrome = '';
    let centerT = '';
    for(let i = 0; i<len; i++){
        for(let j = i+1; j<len+1 ;j++){
           let x = s.substring(i,j)
           isPalindrome(x)?centerT = x:'';
           maxPalindrome.length < centerT.length?maxPalindrome = centerT:"";
        }
    }
    return maxPalindrome
};
// @lc code=end

