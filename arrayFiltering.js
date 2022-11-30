
const myArr = [{"name": "Bike" , "price":100}, {"name":"TV", "price":200}, {"name": "Album", price:10},
{"name": "Book", "price":5}, {"name": "Phone", "price":500}, {"name":"Computer", "price":1000}];


//sorting from the cheapest

myArr.sort((a, b) => {
    return a.price - b.price;
});

//displaying in console

myArr.forEach((e) => {
    console.log(`${e.name} ${e.price}`);
});

//filtering the cheapest

let cheapOne = myArr.filter(e=> e.price === Math.min(...myArr.map(f=>f.price) ) );
console.log(cheapOne);

// filtering the expensive one

var maxValue = Math.max.apply(null,
    myArr.map(function(o) { return o.price; }));
 
  console.log(maxValue);

  console.log(`${e.name} ${e.price}`);

//calculating the full price 
//lets first create array of prices 

var prices = [];
for(let i=0; i<myArr.length; i++){
    prices.push(myArr[i].price);
}

var sum = prices.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum);

//removing products that are under 10 dollar

var underTen = [];
for(let i=0; i<= 10; i++){
    underTen.push(prices[i]);
}

var sumUnderTen = underTen.reduce(function(a, b) {
    return a +b;
}, 0);

var fullPrice = prices.reduce(function(a, b){
    return a + b;
},0);

console.log(fullPrice - sumUnderTen);

  