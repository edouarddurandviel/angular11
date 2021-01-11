// clean final result from fibonacci
// redundant computations
export const fibonacci = (n, memo) => {

memo = memo || {};

if ( memo[0] ){
        return memo[0];
    }

if ( n <= 1 ){
        return 1;
    }

return memo[0] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

};
