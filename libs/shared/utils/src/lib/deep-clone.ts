export function deepClone<T extends object | null | undefined>(obj: T): T {
    return obj ? JSON.parse(JSON.stringify(obj)) : null;
}
