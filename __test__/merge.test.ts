import {merge} from '../src/merge';

const collection_1 : number[] = [1, 4, 7, 10];
const collection_2 : number[] = [3, 6, 9 ,12];
const collection_3 : number[] = [11, 8, 5, 2];

test('test merge funcion(min to max)', () =>{
    expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
})