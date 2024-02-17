export function merge(collection_1 : number[], collection_2 : number[], collection_3 : number[]) : number[]{
    let temp : number[] = [], merged : number[] = []
    let i : number = 0, j : number = 0
    while(i < collection_1.length && j < collection_2.length){
        if(collection_1[i] < collection_2[j])
            temp.push(collection_1[i++])
        else
            temp.push(collection_2[j++])
    }
    while(i < collection_1.length)
        temp.push(collection_1[i++])
    while(j < collection_2.length)
        temp.push(collection_2[j++])

    i = 0, j = collection_3.length - 1
    while(i < temp.length && j >= 0){
        if(temp[i] < collection_3[j])
            merged.push(temp[i++])
        else
            merged.push(collection_3[j--])
    }
    while(i < temp.length)
        merged.push(temp[i++])
    while(j >= 0)
        merged.push(collection_3[j--])

    return merged
}