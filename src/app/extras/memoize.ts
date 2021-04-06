import { shareReplay } from 'rxjs/operators';

export const memoize = (fn: any) => {
    let cache = {};
    let cacheCreationDate = new Date().getTime();

    const memoizedFunction = (...args) => {

        const endCacheDate: any = new Date();
        // age of chache in milliseconds
        const ageOfCache = endCacheDate - cacheCreationDate;

        if (ageOfCache > 1000 * 60 * 60) {
            cache = {};
            cacheCreationDate = new Date().getTime();
        }
        const cacheKey = JSON.stringify(args);

        if (typeof cache[cacheKey] === 'undefined') {
            const result = fn(...args).pipe(
                // give access to the last
                // emitted value on subscription
                // ensures any subsequent subscribers will not trigger another HTTP request
                shareReplay()
                );
            cache[cacheKey] = result;
            return result;
        }
        else {
            return cache[cacheKey];
        }
    };
    return memoizedFunction;
};