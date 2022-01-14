const array1 = [
  {
    name: 'Vagish',
    company: 'Auto',
  },
  {
    name: 'Nikhil',
    company: 'Progress',
  },
  {
    name: 'Harsh',
    company: 'SVB',
  },
];

const array2 = [
  {
    name: 'Harsh',
    age: 31,
  },
  {
    name: 'Vagish',
    age: 33,
  },
  {
    name: 'Nikhil',
    age: 27,
  },
];

const empMap = new Map();

for (let i = 0; i < array1.length; i++) {
  empMap.set(array1[i].name, array1[i]);
}
for (let i = 0; i < array2.length; i++) {
  const arryIndex = empMap.get(array2[i].name);
  const finalIndex = { ...arryIndex, ...array2[i] };
  empMap.set(array2[i].name, finalIndex);
}
console.log(empMap);
var d;
