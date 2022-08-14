export const optionalArrayOf = (array: Array<unknown> | undefined, type:string):boolean => {
    if(array) {
        if(array instanceof Array) {
            if(!array.every((value:unknown) => typeof value === type)) {
                return false;
            }
        }
    }
    return true;
}