// 1. Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.
 //

//  const miles = [15,20,1,60,45,120]

// const prviZadatak=(array)=>{
//     const milesToKilometers=array.map((el)=>el*1.60);

//  const totalDistanceInKilometers=milesToKilometers.reduce((prev,curr)=>prev+ curr)
// return totalDistanceInKilometers;

// }
// console.log(prviZadatak(miles))




// 2.From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
//parne izdviji pa kvadrira pa sumu tih kvadrata
 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const drugiZadatak=(array)=>{
// const parniNiz=array.filter((el)=> el%2===0)
// // return parniNiz;
// const kvadratParnih=parniNiz.map((el)=>el*el)
// // return kvadratParnih
// const suma=kvadratParnih.reduce((prev,curr)=>prev+ curr)
// return suma;

// }
// console.log(drugiZadatak(numbers)) 




// 3.Create a new array whose elements is in uppercase of words present in the original array.
//mala slova da pretvori u velika
 
 let strings = ["avengers", "captain america", "ironman", "black panther"];
 const toUpperCase=(array)=>{
 const newString= array.map((el)=> el.toUpperCase())
return newString
}
console.log(toUpperCase(strings))