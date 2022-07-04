//jsonplaceholder ukucas tu je onaj link za frtch
//2 array map filter reduce sa func
//3 promise - sa fetch
//4 dodatni poeni


// //
// const BASE_URL="https://jsonplaceholder.typicode.com";
// // const getUsers=async()=>{

// //     const response=await fetch(`${BASE_URL}/users`);//uvek koristimo async await
// //     const posts=await response.json()
// //     // console.log(posts)
// // return posts.map((el)=>{
// //     return{ ime: "Faris",id: el.id} //vratili smo sve umesto ime faris
// // })
// // }
// // getUsers().then((res)=>console.log(res))
// const getUsers= async()=>{
//    const response=await fetch(`${BASE_URL}/users`)
//     // .than((response)=>response.json())
//     // .than((res)=>console.log(res))
// const users=await response.json();
// return users
// } 
// const myUsers=getUsers().then((users)=>
// { 
//     const newUsers=users.map((el)=>{
//     return{
//         name: el.name,
//         username:el.username,
//         phone:el.phone,
//     }
// });
// return newUsers;

// });

// console.log(myUsers.then(res => console.log(res)))
// //ternatni operatori i spred operatori














//OBJEKTI
// const students=[
//     {ime: 'FARIS',prezime:'Jahovic', ocena: 5 },
//     {ime: 'Esma',prezime:'Smajovic', ocena: 7 },
//     {ime: 'Alma',prezime:'Gusinac', ocena: 8 },
//     {ime: 'Emir',prezime:'Jahovic', ocena: 9 },
//     {ime: 'Maja',prezime:'Drekovic', ocena: 6 },
//     {ime: 'FARIS',prezime:'Jahovic', ocena: 10 },
// ]
// function srednjaVrednost(array){
//     const nizOcena=array.map((el)=>el.ocena)
//     const suma=nizOcena.reduce((prev,curr)=>prev+ curr)
//     const srednjaOcena=suma/nizOcena.length
//     return +srednjaOcena.toFixed(1)

//     // return suma
//     // return nizOcena
// }
// console.log(srednjaVrednost(students))


//CALL-apply FUNKCIJA POZIVA OBJEKAT U FUNKCIJU 
// const osoba={
//     ime: 'Sabina',
//     prezime: 'Jahovic',
//     godine: 25
// };
// function reciSelam(){
//     console.log(` Selam alejkum ${this.prezime} ${this.ime}`)
// }
// reciSelam.call(osoba)

// let hrana={
//     food:'pizza'
// }
// function omiljenaHrana(text,rating){
//     return` ${this.food} ${text} ${rating}`
// }
// console.log(omiljenaHrana.call(hrana,"je ukusna",10))
// console.log(omiljenaHrana.apply(hrana,["nije ukusna",7]))


// KAKO VRATITI SAMO KLUC ILI VR OD OBJEKTA
// const osoba={
//     ime:'Sabina',
//     prezime: 'Jahovic',
//     god: 35,
//     adresa: 'Novi Pazar'
// }
// console.log(Object.keys(osoba))
// console.log(Object.entries(osoba)) //pise sve u niz a vraca i kljuc i vr
// console.log(Object.values(osoba))

//SPRED OPERATORI (za umetanje jednog niza u neki drugi)
//  const niz1=['faris','haris','elma','selma']
//  const niz2=[1,1,1,2,3,4,5,6,7,8,9]
//  const niz3=[...niz1,'SABINA',...new Set(niz2)]
//  console.log(niz3)


//Kako da u nizu objekata promenimo kljuceve preko MAP
// const filmovi=[
//     {ime:'film1',ocena:'10',budzet: '230M'},
//     {ime:'film2',ocena:'9',budzet: '360M'},
//     {ime:'film3',ocena:'8',budzet: '630M'},
//     {ime:'film4',ocena:'6',budzet: '730M'},
//     {ime:'film6',ocena:'8',budzet: '930M'},

// ]

// const noviFilmovi=filmovi.map((el)=>{
//     return{
//         naslov: el.ime,
//         budzet: el.budzet

//     }
// })
// console.log(noviFilmovi)

// const movies=[
//     {name:"movie 1",rating: 8,budget: "230M"},
//     {name:"movie 2",rating: 5,budget: "130M"},
//     {name:"movie 3",rating: 9,budget: "430M"},
//     {name:"movie 4",rating: 4,budget: "530M"},
//     {name:"movie 5",rating: 9.5,budget: "270M"},
// ]
// const newMovieArray=movies.map((movie)=>{
//     return{
//         title: movie.title,
//         budget: movie.budget
//     }
// })
// console.log(newMovieArray)

//ASYNC 
//KO JE SVE BIO U TERETANU
//  const clanoviTeretane=()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then((res) => console.log(res.map((el)=>el.id)))
//  }
//  clanoviTeretane()



//async await
// const BASE_URL="https://jsonplaceholder.typicode.com"
// const vratiKorisnike=async()=>{
//     const response=await fetch(`${BASE_URL}/users`)
//     const post=await response.json()
//   console.log(post)
//   return post.map((el)=> {
//     return{
//         ime: "faris",id:el.id
//     }
//   })

// }
// vratiKorisnike().then((res=>console.log(res)))




// const BASE_URL="https://jsonplaceholder.typicode.com";

// const getUsers= async()=>{
//    const response=await fetch(`${BASE_URL}/users`)
 
// const users=await response.json();
// return users
// } 
// const myUsers=getUsers().then((users)=>
// { 
//     const newUsers=users.map((el)=>{
//     return{
//         name: el.name,
//         username:el.username,
//         phone:el.phone,
//     }
// });
// return newUsers;


// });

// console.log(myUsers.then(res => console.log(res)))













// const niz=["audi","bmw","volvo"]
// console.log(niz)
// niz.push("mercedes") //dodaje na poslednje mesto

// niz.unshift("bugati")//dodaje na prvo mesto
// niz.pop()//brise poslednji clan
// niz.shift()//brise prvi clan
// console.log(niz)

//ZADATAK
// const niz=["audi","bmw","volvo"]
// const niz1=[1,2,3,5,57,8,9,0]
// const spojeniNiz=niz.concat(niz1)
// console.log(spojeniNiz)


//Zadataka
// const niz=[1,2,34,5,6,56,68,89,66,9,78,98,9]

// const niz2=niz.filter((el)=>el>18)
// const niz3=niz.filter((el)=>el%2==0)
// console.log(niz3)
// console.log(niz2)


//ZADATAK
// const miles = [15,20,1,60,45,120]
// const prviZadatak=(array)=>{
// const km=array.map((el)=>el*1.60)
// const suma=km.reduce((prev,cur)=>prev+cur)
// return +suma.toFixed(1)
// // return km
// }

// console.log(prviZadatak(miles))


//Zadayak
// const niz=[1,2,3,45,7,8,9,6,7,86,56,4,5,34,33]

// const prviZadatak=(array)=>{
//     const parni=array.filter((el)=>el%2===0)
//     // return parni
//     const kvadratParnih=parni.map((el)=>el*el)
//     // return kvadratParnih
//    const suma=kvadratParnih.reduce((prev,curr)=>prev+curr)
//    return suma
// }
// console.log(prviZadatak(niz))

//ZADATAK
// const students=[
//         {name:'Faris', grade: 8 , year: 2},
//         {name:'Isko', grade: 10 , year: 4},
//         {name:'Aldin', grade: 8 , year: 2},
//         {name:'Amina', grade: 9 , year: 4},
//         {name:'Sabina', grade: 9 , year: 3},
//         {name:'Denis', grade: 7, year: 4},
//         {name:'Senad', grade: 6 , year: 1},
// ]
// function ZADATAK(array){
//     return array.find((el)=>el.name==='Sabina')
// }     
// console.log(ZADATAK(students))
//Zadatak






const podaci = async() => {
    const fetchovanje = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonovanje = await fetchovanje.json();
    return jsonovanje;    
}




//  const BASE_URL="https://jsonplaceholder.typicode.com"
// const zadatak=async()=>{
//     const response= await fetch(`${BASE_URL}/users`)
//     const users=await response.json()
//     console.log(users)
//     return users


// }
// const zadatakDva=zadatak().then((users)=>{
//     const noviUseri=users.map((el)=>{
//         return {
//             name:el.name,
//             username:el.username,
//             phone:el.phone
//         }
//     })
//     console.log(noviUseri)
//     return noviUseri
// })
// console.log(zadatakDva.then(res=>console.log(res)))
