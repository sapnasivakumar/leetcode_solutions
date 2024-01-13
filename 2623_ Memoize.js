https://leetcode.com/problems/memoize/solutions/4491667/2623-memoize/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memo = {};
    return function(...args) {
        const argString = JSON.stringify();
        if(argString in memo){
            return memo[argString];
        } else {
            let temp = fn(...args);
            memo[argString] = temp;
            return temp;
        }

    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */