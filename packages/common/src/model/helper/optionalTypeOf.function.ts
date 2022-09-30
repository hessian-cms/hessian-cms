export const optionalTypeOf = (value:unknown, type:string): boolean => {
    if(value !== undefined) {
        if(typeof value !== type) {
            return false;
        }
    }
    return true;
}