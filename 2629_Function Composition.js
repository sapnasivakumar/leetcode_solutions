// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
//
//     The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
//
//     The function composition of an empty list of functions is the identity function f(x) = x.
//
//     You may assume each function in the array accepts one integer as input and returns one integer as output.
//
//
//
//     Example 1:
//
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
//     Evaluating from right to left ...
// Starting with x = 4.
//     2 * (4) = 8
//     (8) * (8) = 64
//     (64) + 1 = 65
// Example 2:
//
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
//     Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:
//
// Input: functions = [], x = 42
// Output: 42
// Explanation:
//     The composition of zero functions is the identity function

SOLUTION1 1 for loop:
var compose = function(functions) {
    const index = functions.length;
    let result;

    return function(x) {
        for (let i = index-1; i>=0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};
const fn = compose([x => x + 1, x => 2 * x])
fn(4)


SOLUTION 2 reduceRight javascriot function:
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

Reference notes for reduceRight:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#run_a_list_of_asynchronous_functions_with_callbacks_in_series_each_passing_their_results_to_the_next

    accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is the last element of the array.