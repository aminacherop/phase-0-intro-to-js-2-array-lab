// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  console.log(cats);
  
 function destructivelyAppendCat(name){
    cats.push("Ralph")
 }
 console.log(cats)

 function destructivelyPrependCat(name){
  cats.unshift("Bob")
 }
 console.log(cats)

 function destructivelyRemoveLastCat(name){
  cats.pop()
 }
 console.log(cats)

 function destructivelyRemoveFirstCat(name){
  cats.shift()
 }
 console.log(cats)
 
 function appendCat(name){
  return[...cats,name]
  }

  const newCats = appendCat("Broom")
 console.log(newCats);
 console.log(cats);



 
 function prependCat(name){
  return[name,...cats]
 }
 const anothercat = appendCat("Arnold")
 console.log(anothercat);
 console.log(cats);

 function removeLastCat(name){
  return cats.slice(0,-1);
 }
 console.log(cats);

 function removeFirstCat(name){
  return cats.slice(1);
 }
 console.log(cats);
