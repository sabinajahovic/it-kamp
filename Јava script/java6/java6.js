// const godine = [12,76,26,6,23,21,29,16]
// const druge_godine = [12,76,26,6,23,21,29,45,6,8,9,16]
// //napisi funkciju koja da prima arg niz godina,da prodje kroz niz i izvadi sve punoletne u novi niz
// function returnNonAdullts(ages){
//     const nonAdullts=[];
//     for(let age of ages){
//         if(age<18)
//         {
//            nonAdullts.push(age)

//         }
//     }
// return nonAdullts;


// }

// console.log(returnNonAdullts(druge_godine)); //sad smo uklonili sve maloletne/punoletne















//pop uklanja sa kraja
//push dodaje clanove niza na kraj
//DODAVANJE NA POCETAK NIZA unshift

const cars=["BMW","MB","AUDI"]
cars.unshift("Ford");
cars.unshift("Kadilak");
cars.unshift("Smart");
//Brisanje prvog clana je sa shift

cars.shift();//uklonio Smart
cars.reverse();//okrenulo niz 

console.log(cars);//DODALI SMO FORD

//reverse-OKRECE GA,NAOPAKO
//SPAJANJE DVA NIZA -concat(niz); spoji
const imena =["Faris","Isko","Aldin"]
const age=[20,100,50,150,75,57];


const spojeniNiz=imena.concat(age);
console.log(spojeniNiz);


//TRAZENJE CLANA NIZA find
const trazenaVrednost= age.find((el) => el >50 && el<100) //vratila samo prvu vrednost koja se poklopila sa uslovom
console.log(trazenaVrednost);


//TRAZENJE INDEXA -find.index
const trazeniIndex= age.findIndex((el)=> el >= 100);
console.log(trazeniIndex);



