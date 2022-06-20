// const students=[
//     {name:'Faris', grade: 8 , year: 2},
//     {name:'Isko', grade: 10 , year: 4},
//     {name:'Aldin', grade: 8 , year: 2},
//     {name:'Amina', grade: 9 , year: 4},
//     {name:'Sabina', grade: 9 , year: 3},
//     {name:'Denis', grade: 7, year: 4},
//     {name:'Senad', grade: 6 , year: 1},
    
// ]

// //filter bi radili vec od 8 koji imaju ocenu 
// function getAvgGrade(array){
// const nizOcena=array.map((el)=> el.grade)
// console.log(nizOcena)


// // return nizOcena
// const zbirOcena=nizOcena.reduce((prev,curr)=> prev +curr)

// console.log(zbirOcena)

// // return zbirOcena
// const prosek=zbirOcena/nizOcena.length
// console.log(prosek)
// // return prosek
// const zaokruzeno= +prosek.toFixed(2)
// console.log(zaokruzeno)
// return zaokruzeno
// }
// getAvgGrade(students);










//NASTAVLJAMO SA OBJEKTIMA CALL()- pozovemo objekat u funkciju(veza)
// const person={
//     name: "Jon Doe",
//     age: 22,


// };
// function sayHello(){
//     console.log('Hello  ${this.name}');
// }
// sayHello.call(person)
let hrana={
    food: "Pizza"
}
function favFood(text,rating){
    return     `${this.food} ${text} ${rating}` //DOLAR KORISTIMO $ da upotrebimo varijablu
}
console.log(favFood.call(hrana,"je ukusna",9))
console.log(favFood.apply(hrana,["nije ukusna",6])) //isto kao call ali u niz stavimo one koje menjamo


//BIND= vraca funkciju u kojoj menjamo this

const bindFunkc= favFood.bind(hrana);

console.log(bindFunkc("nije nesto",5))




// console.log(favFood.bind(hrana))
//ZADATAK NADJI NAJVECI BROJ IZ NIZA
const niz=[10,24,5,67,8,78,90]
console.log(Math.max(null,niz))