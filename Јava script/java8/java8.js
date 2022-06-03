//MAP-ARRAY METODA VRACA NIZ KAO I FILTER
// const DATA=[100,65,76,80,99,53,1,2]
// const returnEven=(numbers)=>{
// const evenNumber=numbers.filter((el)=>numbers%2===0)
// const lessThan50=evenNumber.filter((el)=>numbers<50);
// return lessThan50;
// };
// console.log(returnEven(DATA)); NECE 




//ZADATAK2 kvadrat svakog clan plus 10
// const DATA =[5,3,2,8,7,9]
// const returnPow=(numbers)=>{
// const pow= numbers.map((el)=> el*el+10);
// return pow;
// };

// console.log(returnPow(DATA))

//ZADATAK3 REDUCE FUNKCIJA IMA PREVOUSE(prethodnu sabira i treniutnu) I CURRENT

// FUMKCIJA KOJA SABIRA SVE ELEMENTE IZ NIZA (sabira prethodne i sledece clanove i trenutnu vr)
// const DATA=[100,200,250,400,520]

// const cartTotal= DATA.reduce((previousValue,currentValue)=>previousValue+currentValue)

// //{ console.log("PREV VREDNOST",previousValue)
// // console.log("CURR VREDNOST",currentValue)
// // return previousValue+currentValue;
// // }
// console.log(cartTotal);//nije htelo pojedinacne vr za prec i curr da vrati

//reduce  vrati neki broj ili rezultat za neki zadatak

// //ZADATAK4
// const DATA=[26,18,16,22,30,28]
// const sumAvgAvg=(ages)=>{
// const sum=ages.reduce((prevValue,currValue)=>prevValue+currValue);
// // return sum; mogli smo u prethodnom redu da pisemo umesto const return
// const average= sum/ ages.length;
// return +average.toFixed(2);
// //parseInt-ceo broj parseFloat za decimalni br ili +  string pretvara u br
// //toFixed(4) zaookruzuje brojeve na 4 decimale

// };
// console.log(sumAvgAvg(DATA))


//ZADATAK5 EVERY  VRATI TRU KAD SVI PRODJU USLOV A FALSE AKO SAMO JEDAN NIJE TACAN ODMA FALSE
// const niz=[3,5,6,7,8,9];
// console.log(niz.every(el=>el<10));
//some dal je bar  neko prosao uslov-isto vraca true ili false


//ZADATAK6 SOME

// const niz=[3,5,6,7,8,9];
// console.log(niz.some(el=>el<6));

//ZADATAK7 INCLUDES

// const niz=[1,2,3]
// console.log(niz.includes('cat'))//da li niz sadrzi 2 vratice true ili false

//ZADATAK JOIN UZIMA CLANOVE NIZA I SPAJA U STRING recenicu odvojenu zarezom,i birani kako ce da ih odvoji
 const element=['vatra','vazduh','voda']
 console.log(element.join(" "))