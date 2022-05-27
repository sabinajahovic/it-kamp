// const DATA1=[2,26,38,75,11,29]
// const DATA2=["a","b","c","d","e"]
// //1 DEO NAPRAVI POMOCNI NIZ DA SADRZO PVA DVA NIZA SPOJENA
// //2 DEO POMOCU TOG NIZA U NOVI NIZ IZVADITI SVE PARNE
// //3 DEO U TAJ NIZ UMETNUTI NA PRVA DVA MESTA 10 I 20
// // I VRATI PRVI POMOCNI I DRUGI 
// const spojeniNiz=DATA1.concat(DATA2);
// console.log(spojeniNiz);

// const parniNiz= spojeniNiz.find((el) => el % 2 ===0);
// console.log(parniNiz);


// parniNiz.unshift(10,20);
// console.log(parniNiz);
// //27 maj uradi opet


//FILTER METODA ISPISUJE SVE ELEMENTE ZA USLOV KOJI SMO POSTAVILI A FIND NE SAMO PRVI

// const words=["televizor","daljinski","telefon","voda","ranac","stolica"];
// const numbers=[2,4,5,6,7,3,9,10]

// const filteredArray= numbers.filter((el)=> el%2===0);
// console.log(filteredArray);





//MAP METODA  pravi novi niz od tog datog niza
// const numbers=[2,5,10,3,4,8];
// const  squareNumbers=numbers.map((el)=>el^2);
// console.log(squareNumbers);
// //vraca kvadrate

// const numbers=[100,25,9];
// const  squareNumbers=numbers.map((el,index,array)=> Math.sqrt(el)){
// // console.log(squareNumbers);
// console.log("PRVI ARG" ,el);
// console.log(DRUGI ARG" ,index);
// console.log("PRVI ARG" ,array);
// }
// //vraca koren


// const numbers=[2,5,3,1,10,8,7]
// const squareNumbers=numbers.map((el,index,array)=>{
//     if(index===0 || index === 3 || index ===5){
//         return el* el;
//     }
//     else{
//         return el;

//     }

// })

// console.log(squareNumbers);//vratilo niz ceo i kvadrira na o i 3 i 5 index kvadrira elemente




// ZADATAK PRETVORI PRVE GODINE IZ PSECIH
const DATA1=[1,3,4,2,7,6]

//el>2=el*7
// el>2 && el<8=(el*4)/2

const dogAgeToHuman=(ages)=>{
 const humanAge=ages.map((age=>{
if(age>2 && age<8){
return (age*4)/2);
}

 else if(age>2){
     return age*7; 
    }
    else{
        return age;
    }
});
 const lessThan10HumanAge=humanAge.filter((age)=>age<10);
 return [humanAge,lessThan10HumanAge];
};
 console.log(dogAgeToHuman(DATA1));







