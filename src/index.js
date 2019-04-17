
import * as tri from './triple';

console.log('Hello World');

let triple = tri.make(3, 5, 'I am element from triple');
console.log(tri.get3(triple)); // 3
// get2(triple); // 5
// get3(triple); // I am element from triple
