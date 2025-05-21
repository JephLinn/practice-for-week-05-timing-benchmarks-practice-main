const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let arr = [];
  
    for (let i = increment; i <= 10 * increment; i += increment) {
     start = Date.now()
    arr.push(addNums(i));
    end = Date.now()
    console.log(`${end - start}`)
    }
  
    return arr;

}


function addManyNums10Timing(increment) {
  let arr = [];

  for (let i = increment; i <= 10 * increment; i += increment){
    start = Date.now()
    arr.push(addManyNums(i));
    end = Date.now()
    console.log(`${end - start}`)
  }

  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);