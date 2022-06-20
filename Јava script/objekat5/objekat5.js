// const person={
//               name: 'jon Doe',
//            age: 48,
//            job: 'Employed',
//           adress:'USA',
//               kids: 4,
//          }
         
         
//          const names=["faris",'aldin','senad','dzenan','sabina']
//          const numbers=[1,2,3,1,5,2,7,10]
//          const spojeni=[...names, ...numbers]
//          //console.log(spojeni)

//          const movies=[
//             {name:"movie 1",rating: 8,budget: "230M"},
//             {name:"movie 2",rating: 5,budget: "130M"},
//             {name:"movie 3",rating: 9,budget: "430M"},
//             {name:"movie 4",rating: 4,budget: "530M"},
//             {name:"movie 5",rating: 9.5,budget: "270M"},
//         ]
//         const newMovie=movies.map((movie=>{
//             return{
//                 title:movie.name,
//                 rating: movie.rating,
//             }
//         }))
//         console.log(newMovie)


//ZADATAK 
//stack cuvamo tu neke vr i radimo sa njima
// function drugiPosao(){
//     console.log("Drugi posao")
// }
//  function nekiPosao(arg1){
//      setTimeout(()=>{


//         console.log("Pocetak posla")
//         arg1()
//      },1000
//      )


// // console.log("kraj posla")

//  }
//  nekiPosao(drugiPosao
    
//     )
//  console.log("komanda")
//  console.log("komanda")
//   console.log("komanda")
 //sajt jsv9000.app












 ///novi cas
 //asinhrone: call strak- zadnji koji udje prvi izlazi
 //queue(kju) 
 // call back-asinhrono-jedan od mehanizama asinhronog java skripta,salje su WPI pa posle u u Qeueu
 //funkcija jeedan tip referentnog podatka,a mi hocemo da posaljemo funkciju kao argumrnt
//call stack
//promise --udjio u restoran i porucimo i broj smo 24 i pokazemo na salteru broj 26
// i oni nam donesu hranu,dobicemo odg ili dobijemo hranu ili da iz nekog razloga se nije ispunila radnja
//obecanje da cemo dobti od ili false ili sucsesful //nesto ce biti imamo odg jer kod call back-a nema

//  nekiPosao(function(){
//     console.log("Druga funkcija")}
//  ) DRUGI NACIN PISANJA FUNKCIJA
//zadatak1
// function arrayMap(arr,clback){
//    res=[];
//    for (i=0;i<arr.length;i++){
//       newEl=clback(arr[i])
//       res.push(newEl)
//    }
//    return res;
// }
// myFunc=function(arg1){
//    return arg1*2;
// };
// niz=arrayMap([1,2,3,4,5],myFunc)
// console.log(niz)
//zadatak2
// res=[1,2,3,4,5].map((el)=> {
//    return el*2})
//    console.log(res)
//zadatak3
//  res=[1,2,3,4,5,6,7].map((el)=>{
//     return el> 3;
//  })
// console.log(res)
// res1=[1,2,3,4,5,6,7].filter((el)=>{
//    return el> 3;
// })
// console.log(res1) //map vraca istu dizinu niza

//ZDATAK4 call back
// console.log(1)
// console.log(2)

// func=()=>{
//    console.log(3)
// }
// setTimeout(func,1000)
// console.log(4) //poenta call backa jer ceka 1000ms da se izvrsi
///na call back-u

//Zadatak promise
posao = new Promise((resolve,reject)=>{
   response=400;
   for(let i=0; i<90000000; i++){}
 if(response===200){
    resolve();
 }
else{
   reject()
}
//tri funkcije zavisne od promisa finaly than i catch
//finally se uvek izvrsi sta god bude moram disati



});
posao
.then(()=>{
   console.log("Uspesno")
})
.catch((err)=>{
   console.log("Neuspesno")
})
.finally(()=>{
   console.log ("disati")
})