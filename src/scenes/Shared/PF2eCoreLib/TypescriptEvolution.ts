//https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript
export function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
