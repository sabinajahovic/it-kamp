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
// const nizOcena=array.filter((el)=> el.name==='Sabina')
// console.log(nizOcena)


// // // return nizOcena
// // const zbirOcena=nizOcena.reduce((prev,curr)=> prev +curr)

// // console.log(zbirOcena)

// // // return zbirOcena
// // const prosek=zbirOcena/nizOcena.length
// // console.log(prosek)
// // // return prosek
// // const zaokruzeno= +prosek.toFixed(2)
// // console.log(zaokruzeno)
// // return zaokruzeno
// }
// getAvgGrade(students);

// let hrana={
//     food: "Pizza"

// }
// function favFood(text,rating){
//     return `${this.food} ${text}  ${rating}`
// }
// console.log(favFood.call(hrana ,"je ukusna",9))
// console.log (favFood.apply(hrana,["nije ukusna",6]))

// const bindFunkc=favFood.bind(hrana)
// console.log(bindFunkc("nije nesto,7"))


// const niz=[12,34,55,77,88,99]
// console.log(Math.max.apply(null,niz))


// const person={
//     name: 'jon Doe',
//     age: 48,
//     job: 'Employed',
//     adress:'USA',
//     kids: 4,
// }
// // Object.freeze(person)//ovo znaci zaledi kod i ovo sto smo dodali ispod broj tel nece se  videti
// console.log (Object.keys(person))//vraca sve  kljuceve iz objekta  u nizu
// console.log(Object.values(person))//vraca vrednosti za kljuceve takodje u nizu,znaci da imaju index

// person.phone='532784682370'

// console.log(Array.isArray([2,4,5,6,7]))
// console.log(person)

// // Object.freeze(person)

// Object.seal(person)//znaci zapecati podatke alo mozes da menjas postojece a ne ozes nove da dodajes
// person.name="Drugi neko"

// Object.entries(person) //i kljuc i vrednost i sve pise u nizove
// console.log(person)


//ZADATAK
// const person={
//          name: 'jon Doe',
//          age: 48,
//         job: 'Employed',
//          adress:'USA',
//          kids: 4,
//      }
// const person2=person;
// person2.name='No name'
// console.log(person)
// console.log(Object.is(person,person2)) //nisu na istoj lokaciji i zato je false

//ZADATAK
// const names=["faris",'aldin','senad','dzenan','sabina']
 //spred operator dodajemo clanove pre i posle i da spajamo nizove
// const newNames=['isko',...names,'hamza'];
// console.log(names)
// console.log(newNames);
//ZADATAK
//set sam po sebi ne prima duplikate,ne vazi kao za nizove
// const numbers=[1,2,3,1,5,2,7,10]
// const names=["jonh",'cena','sabina']
//  const nemaDuplih=[...new Set(numbers)];
//  const spojeni=[...numbers,...names]
//  console.log(spojeni)
//  //... znaci pretvori u niz 
//  console.log(nemaDuplih)

//ZADATAK
const person={
    name: "jonh",
    state: "USA"

}
const extendedPerson={
    ...person,phone: '5326438483',
    adresss: 'NY'
}
console.log(person)
console.log(extendedPerson)

//ZADATAK
const movies=[
    {name:"movie 1",rating: 8,budget: "230M"},
    {name:"movie 2",rating: 5,budget: "130M"},
    {name:"movie 3",rating: 9,budget: "430M"},
    {name:"movie 4",rating: 4,budget: "530M"},
    {name:"movie 5",rating: 9.5,budget: "270M"},
]
const newMovieArray=movies.map((movie)=>{
    return{
        title: movie.title,
        budget: movie.budget
    }
})
console.log(newMovieArray)