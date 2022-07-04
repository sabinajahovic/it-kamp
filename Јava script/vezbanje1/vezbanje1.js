

//ZADATAK1
// const ime='Max';
// const godine=30;
// const meseci= 12* godine;
// const nesto=prompt("unesi svoje ime");
// const godin=prompt("unesi svoje godine");
// alert("Ziveo si "+ 12*godine + "meseci");

//ZADATAK2
// const age=prompt("Unesi svoje godine");
// if(age === 18){
//     console.log("Ti si punoletan")
// }else if(age > 18){
//     console.log("Ti si odrastao")
// }else if(age < 18){
//     console.log("Ti si tinejdzer")
// }


//ZADATAK3

// let suma=0;
// for(let i=0; i<=15;i++){
    
//     if(i% 2 !==0)  {
//         suma=suma + i
//     }
// }
// console.log(suma);


//ZADATAK4
// let suma=0;
// for(let i=0;i<= 20;i++){
// if(i%2 ===0){
//     suma+=i;
//     console.log('Brojac',i)
//     console.log('Suma',suma)
// }
// }

//ZADATAK5
//  const rec="Sta ste radili danas";
//  let counter=0;
//  for(let i=0;i<rec.length;i++){
//      if(rec[i]==="r" || rec[i]==="a"){
//          counter++;
//      }

//  }
// console.log(counter)

//ZADATAK6 velika slova na pocetku reci
// const string='ovo je string';
// let newString=" ";
// string[0]=string[0].toUpperCase();
// for(let i=0;i<string.length;i++){
//     const element=string[i];
//     if(i===0)
//     {
//         newString+=element.toUpperCase();

//     }
//     else if(string [i-1]===" "){
//            newString+=element.toUpperCase();
// }
// else{newString+=element;
//      }
//     }
//     console.log(newString);

//ZADATAK7 VEZBE 7

//ARRAY METODA
// const cars=["BMW","MB","AUDI"]
// cars.push("mercedes"); //dodaje na zadnje mesto
// cars.unshift("passat")//dodaje na prvo mesto
// cars.reverse(cars)//okrene niz
// cars.shift(cars)//brise 1 clan
// cars.pop(cars)//brise poslednji clan
// console.log(cars);



//ZADATAK 8
//NAPISI FUNKCIJU KOJA IZ NIZA VRACA BR VEC ILI JEDNAKO OD 18
//  const niz=[12,24,56,78,98,38,6,9]
//  function punoletni(ages){
//      let niz1=[ ];
//      for(let i of ages){
//          if(i>=18){
//         niz1.push(i);

//      }
    
//  }
//  return niz1;
// }
// console.log(punoletni(niz)); 


//sa github-a
// const godine = [12, 76, 26, 6, 23, 21, 29, 16];

// function dajMiPunoletne(ages) {
//     let punoletni = [];
//     for (let i of ages) {
//         if (i >= 18) {
//             punoletni.push(i);
//         }
//     }
//     return punoletni;
// }

// console.log(dajMiPunoletne(godine));

// const niz1=[1,68,9,9,0,54,6,8,80,]
// const niz2=["audi","mercedes","smart","volvo"]
// let niz3=[];
// niz3=niz1.concat(niz2)
// console.log(niz3)

//ZADATAK 9
// //1 DEO NAPRAVI POMOCNI NIZ DA SADRZO PVA DVA NIZA SPOJENA
// //2 DEO POMOCU TOG NIZA U NOVI NIZ IZVADITI SVE PARNE
// //3 DEO U TAJ NIZ UMETNUTI NA PRVA DVA MESTA 10 I 20
// // I VRATI PRVI POMOCNI I DRUGI 
//  const DATA1=[2,26,38,75,11,29]
//  const DATA2=["a","b","c","d","e"]
 
//   const spojeniNiz=DATA1.concat(DATA2);
//  console.log(spojeniNiz);


// const parniNiz=spojeniNiz.filter((el)=> el%2===0);
// console.log(parniNiz)

// parniNiz.unshift(10,20)
// console.log(parniNiz);

//ZADATAK 10 MAP

//MAP METODA  pravi novi niz od tog datog niza

//vraca kvadrate brojeva
// const numbers=[2,5,10,3,4,8];
// const kvadratBroja=numbers.map((el)=>el*el)
// console.log(kvadratBroja);

//ZADATAK 11
//vraca koren brojeva
// const numbers=[4,25,100,121]
// const korenBroja=numbers.map((el)=> Math.sqrt(el))
// console.log(korenBroja)

//ZADATAK 12
// const numbers=[2,5,3,1,10,8,7]
// const kvadratBroja=numbers.map((el,index,array)=>{
// if(index===0 || index===3 || index===5){
//     return el*el;

// }
// else {
//     return el;

// }

// });

// console.log(kvadratBroja)  



//ZADATAK2 kvadrat svakog clan plus 10
//  const DATA =[5,3,2,8,7,9]
//  const Niz=DATA.map((el)=> el*el +10);
//  console.log(Niz)


// FUMKCIJA KOJA SABIRA SVE ELEMENTE IZ NIZA (sabira prethodne i sledece clanove i trenutnu vr)
// const DATA=[100,200,250,400,520] NECEEEEE!!!!!!
//  const Niz=DATA.reduce((previousValue,currentValue)=> previousValue+currentValue ){
//      return  previousValue + currentValue;

//  };
// console.log(Niz);



//ZADATAK OD DATOG NIZA MILJE PRETVORI U KILOMETRE A ZATIM SABERI CLANOVE TOGA NIZA POMOCU REDUCE

// const miles = [15,20,1,60,45,120]
// const prviZadatak=(array)=>{

//     const milesToKilometers=array.map((el)=>el*1.60)
//     // return milesToKilometers;
//     const totalDistanceInKilometers=milesToKilometers.reduce((prev,cur)=>prev+cur);
//     return totalDistanceInKilometers

// }
// console.log(prviZadatak(miles))



//ZADATAK OD DATOG NIZA IZABERI PARNE PA TE PARNE KVADRIRAJ I SUMU OD TIH NA KRAJU
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const drugiZadatak=(array)=>{
//     const parni=array.filter((el)=> el%2===0)
//     // return parni;
//     const kvadratParnih=parni.map((el)=>el*el)
//     // return kvadratParnih;
//     const suma=kvadratParnih.reduce((prev,cur)=>prev+cur)
//     return suma;
// }
// console.log(drugiZadatak(numbers))




//ZADATAK  DA DATE RECI NAPISE VELIKIM SLOVIMA

// let strings = ["avengers", "captain america", "ironman", "black panther"];
// const treciZadatak=(array)=>{
//     const newString=array.map((el)=> el.toUpperCase())
//     return newString
// }
// console.log(treciZadatak(strings))


//ZADATAK OD DATOG NIZA UZMI SVE NEPARNE I SABERI IH U SUMU
// const niz=[1,2,3,4,5,6,7,8,9]
// const zadatak=(array)=>{
//     const neparni=array.filter((el)=> el%2 !==0)
//     // return neparni;
//     const suma=neparni.reduce((prev,cur)=>prev +cur)
//   return suma;
// }
// console.log(zadatak(niz))

//ZADATAK2 kvadrat svakog clan plus 10
//  const DATA =[5,3,2,8,7,9]
//  const zadatak=(array)=>{
//      const funkcija=array.map((el)=> el*el +10)
//      return funkcija
//  }
//  console.log(zadatak(DATA)

// ZADATAK DVA NIZA SASTAVI  NEKA NADJE BROJEVE DELJIVE SA 2 I IH PRETVORI U INCE,zaokruzi na 2,I SABERE IH SVE U SUMU

// const niz1=[1,2,3,4,5]
// const niz2=[6,7,8,9,10]
// const zadatak=(array)=>{
//  const spojeniNiz=niz1.concat(niz2)
// //  return spojeniNiz
// const deljivi=spojeniNiz.filter((el)=>el%2===0)
// // return deljivi
// const inchi=deljivi.map((el)=> el *2.6)
// // return inchi
// const fix=inchi.filter((el)=> el.toFixed(2))
// // return fix
// const suma=fix.reduce((prev,cur)=>prev+cur)
// return suma
// }
// console.log(zadatak(niz1,niz2))



// //OD DATOG NIZA IZVOJITI PARNE PA KVADRIRATI PA SUMA
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const prviZadatak=(array)=>{
// const parni=array.filter((el)=> el%2===0)
// // return parni;
// const kvadratParnih=parni.map((el)=> el*el)
// // return kvadratParnih
// const suma=kvadratParnih.reduce((prev,curr)=> prev+curr)
// return suma
// }

// console.log(prviZadatak(numbers));




//ZADATAK  DA DATE RECI NAPISE VELIKIM SLOVIMA

//  let strings = ["avengers", "captain america", "ironman", "black panther"];

// const treciZadatak=(array)=>{
//     const newString=array.map((el)=> el.toUppercase())
//     return newString


// }

// console.log(treciZadatak(strings))


//  let strings = ["avengers", "captain america", "ironman", "black panther"];
//  const treciZadatak=(array)=>{
//         const newString=array.map((el) => el.toUpperCase())
//      return newString
//  }
// console.log(treciZadatak(strings))


//ZADATAK IMOMO NIZ GODINA NACI SREDNJU VREDNOST

// const niz=[ 1,2,3,4,5,6,7]
// const srednjaVrednost=(array)=>{
//  const zbir=array.reduce((prev,curr)=>prev +curr)
// //  return zbir
// srednja=zbir/array.length
// return srednja

// }
// console.log(srednjaVrednost(niz))




//ZADATAK EVERY====vraca true ili false
  

//  const niz=[3,5,6,7,8,9];
//  const zadatak=(array)=>{
//      const svaki=array.every((el)=>el<10)
//      return svaki
//  }
//  console.log(zadatak(niz));

//Zadatak da vrati kvadrate ako je index 3 5 7 
// const numbers=[2,5,3,1,10,8,7]
//  const zadatak=(array)=>{
// const kvadrat=array.map(el,index,array){
//     if (index ===0 || index===3)
// }

//  }

