let set = new Set();
set.add(1);
set.add(1);
console.log(set)

set.add(2);
set.delete(1);
console.log(set);

set.add(3).add(4).delete(5);
console.log(set);

set.clear()
console.log(set)

//init with array
set = new Set([1,2,3])
console.log(set)

console.log(set === new Set(set))

console.log('set to array')
let array = [...set];
console.log(array);

console.log('union')
console.log(new Set([...[1,2,3], ...[2,3,4]]))
