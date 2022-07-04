// myPromise=new Promise((resolve, reject) => {
//     person={
//         ime:" Sabina",
//         prezime: "Jahovic",
//         age: 40,
//         celoIme: function(){
//         return this.ime + " " + this.prezime;
//         }
//     }
//     if(person.age> 25 && person.age<34){
//         resolve(person.celoIme())
//     }
//     else{
//     reject(person.celoIme())
//     }
// });
// myPromise
// .then((arg)=>{
//     console.log(`Osoba ${arg} ispunjava uslove`)
// })
// .catch((arg)=>{
//     console.log(`Osoba ${arg} ne upunjava uslove`)
// })
//Zadtak2
// prom=new Promise((resolve, reject) => {
//     res();

// })
// prom.then(()=>{
//     prom.then(()=>{   
//          console.log("B")});

//     console.log("A");
// })
// prom.then(()=>{
//     console.log("C")
// })
//fetch-pokupi podatke sa nekog sajta

//aplikacija: frontend_ ono sto vidi korisnik,backend sve izracunavanja kodovi ,i baza podataka API(konobari) povezuje bekend i frontend
//Zadatak 
//podaci ko je sve bio u teretani
// const getUsers=()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/') //comments?postId=1'
//     //?ide samo za prvo pitanje pa posle ide sve & neki drugi komentar
//     //sve komentare smo skinuli //upitnik pa nesto znaci trazimo nesto odredjeno poseban koment
//     //fora je da sa skinute baze pokupimo odredjene podatke u nizy
//   .then((response) => response.json())
//   .then((res)=>console.log(res.map((el)=>el.id)))
// };
// getUsers()
///vracanje njiza sa jsonplaceholder 

//Zadatak UMESTO THEN KORISTIMO ASYNC
// const BASE_URL="https://jsonplaceholder.typicode.com";
// const getUsers=async()=>{

//     const response=await fetch(`${BASE_URL}/users`);
//     const posts=await response.json()
//     // console.log(posts)
// return posts.map((el)=>{
//     return{ ime: "Faris",id: el.id} //vratili smo sve umesto ime faris
// })
//}
//getUsers().then((res)=>console.log(res))


//ZADATAK NIZOVU
// const testArr = [1, 2, 3, 4, 5]
// function nextInLine

// (arr,item){
//     arr.push()

//     const removed=arr.unshift()
//     console.log(removed)
//     return removed
// }




// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr))

// //ZADATAK
// const DATA1=[2,26,38,75,11,29]
// const DATA2=["a","b","c","d","e"]
// // //1 DEO NAPRAVI POMOCNI NIZ DA SADRZO PVA DVA NIZA SPOJENA
// // //2 DEO POMOCU TOG NIZA U NOVI NIZ IZVADITI SVE PARNE
// // //3 DEO U TAJ NIZ UMETNUTI NA PRVA DVA MESTA 10 I 20
// // // I VRATI PRVI POMOCNI I DRUGI 


// const pomocniNiz=DATA1.concat(DATA2)
// console.log(pomocniNiz)
// const parniNiz=pomocniNiz.filter((el)=>el%2===0)
// console.log(parniNiz)
// parniNiz.unshift(10,20)
// console.log(parniNiz)

//ZADATAK
//MAP METODA  pravi novi niz od tog datog niza . MADJI KVADRATE 
// const numbers=[2,5,10,3,4,8];
// const squareNumbers=numbers.map((el)=>el*el)
// console.log(squareNumbers)

//ZADATAK DA VRATI KVADRATE AL GDE JE INDEX 0 3 5
// const numbers=[2,5,3,1,10,8,7]
//  const squareNumbers=numbers.map((el,index,array)=>{
//     if(index===0 || index===3 || index===5){
//         return el*el;
        
//     }
//     else{
//         return el
//     }
//  })
//  console.log(squareNumbers)



// //ZADATAK
//  const DATA=[100,65,76,80,99,53,1,2]
//  const manjiOd50=DATA.filter((el)=>el<50)
//  console.log(manjiOd50)
//  //MAP VRACA ISTU DUZINU NIZA


//ZADATAK2 kvadrat svakog clan plus 10
// const DATA =[5,3,2,8,7,9]
// const noviNiz=DATA.map((el)=>el*el+10)
// console.log(noviNiz)

 //ZADATAK4 treba da vraca zbir zatim srednju vrednist
//  const DATA=[26,18,16,22,30,28]
// const sum=DATA.reduce((prev,curr)=>prev+curr)
// console.log(sum)
// const srednjaVr=sum/DATA.length
// console.log(srednjaVr)
//  const fix=srednjaVr.toFixed(2)
//  console.log(+fix)

// 1. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.
// const miles = [15,20,1,60,45,120]
//  const zadatak=(array)=>{
//     const milesToKilometers=array.map((el)=>el*1.60)
//     const totalDistanceInKilometers=milesToKilometers.reduce((prev,curr)=>prev+curr)
//     return totalDistanceInKilometers
//  }
// console.log(zadatak(miles))



//ZADATAK2  UZMI SVE PARNE KVADRTIRAJ I SUMA KVADRATA ALI U FUNKCIJI


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const drugiZdatak=(array)=>{
// const parni=array.filter((el)=> el%2===0)

// const kvadrati=parni.map((el)=>el*el)
//  const sum= kvadrati.reduce((prev,curr)=>prev+ curr)
//  return sum
   
// }
// console.log(drugiZdatak(numbers))

//ZADATAK3
// 3.Create a new array whose elements is in uppercase of words present in the original array.
//mala slova da pretvori u velika
 
// let strings = ["avengers", "captain america", "ironman", "black panther"];
// const treciZdatak=(array)=>{
// const newStrings=array.map((el)=>el.toUpperCase())
// return newStrings
// }
// console.log(treciZdatak(strings))

//ZADATAK OBJEKTI
// 3.Create a new array whose elements is in uppercase of words present in the original array.
//mala slova da pretvori u velika
//  const myCar={
//    id: 1,
//    marka: "audi",
//    model: "a6",
//    servis:{
//       serviser: "ladjar",
//       datum: "12.05",
//       km: "2436"
//    },
//    udaran: true,
//    porudzbina:function(){
// console.log(this)


//    }
//  }
//  myCar.porudzbina()
//  console.log("Moj auto je marke:", myCar.marka)

//ZADTAK
//  const students=[
//    {name:'Faris', grade: 9,year: 2},
//    {name:'Elma', grade: 5,year: 2},
//    {name:'Selma', grade:6,year: 2},
//    {name:'Asim', grade: 8,year: 2},
//    {name:'Esma', grade: 9,year: 2},
//    {name:'Amina', grade: 10,year: 2},
//    {name:'Mehmed', grade: 9,year: 2},
//    {name:'Alija', grade: 9,year: 2}
  

//  ]
//  function getAvgGrade(array){
// const nizOcena=array.map((el)=>el.grade)
// console.log(nizOcena)
// const zbirOcena=nizOcena.reduce((prev,curr)=>prev +curr)
// console.log(zbirOcena)
//  const prosek=zbirOcena/nizOcena.length
// console.log(prosek)
// const zaokruzeno=prosek.toFixed(2)
// console.log(+zaokruzeno)
// return +zaokruzeno
//  }
//  console.log(getAvgGrade(students))

//ZADATAK

let hrana={
   food: 'pizza'
}
function favFood(text,rating){
   return `${this.food} ${text} ${rating}`
}
console.log(favFood.call(hrana,"je ukusna",9))