

// const rec="Sta ste radili danas";
// let counter=0;

// for (let i = 0; i < rec.length; i++) {
//     if(rec[i]===" "|| rec[i]=="a"){
//         counter++;
    
//     }
    
// }
// console.log(counter);



//ovo je funkcija koja naglasava razmaka
// const string='ovo je string';
// let newString=" "
// // string[0]=string[0].toUpperCase();
// for(let i=0;i< string.length;i++){
//     const element=string[i];
//     if(i===0){

//         newString+=element.toUpperCase();

//     }
//     else if (string [i-1]===" "){
//         newString+=element.toUpperCase();
//     }
//     else{newString+=element;
//     }
// }
// console.log(newString);



//ovo je funkcija koja pise poslednja slova veliko

// const string='ovo je string';
// let newString=" "
// // string[0]=string[0].toUpperCase();
// for(let i=0;i< string.length;i++){
//     const element=string[i];
//     if(i===string.length-1){

//         newString+=element.toUpperCase();

//     }
//     else if (string [i+1]===" "){
//         newString+=element.toUpperCase();
//     }
//     else{newString+=element;
//     }
// }
// console.log(newString);





//funkcija koja brise razmake
// const string='ovo je string';
// let newString=" "
// / string[0]=string[0].toUpperCase();
//  for(let i=0;i< string.length;i++){
//     const element=string[i];
//      if(i===0){

//          newString+=element.toUpperCase();

//      }
//      else if (string [i-1]===" "){
//       newString+=element.toUpperCase();     }
//   else{newString+=element;
//      }
//  }

 //OPERATORI
//  const isSunny = true;
// //  if(isSunny===true){console.log("Ponesi naocare")
// // }
// // else{
// //     console.log("Nemoj da nosis naocare")
// // }
// //Moze se zapisati i kao const(isSunny)----- isto je sa  const isSunny = true; za negativno pisemo samo uzvicnik ispred


// //TERNARNI OPERATOR VISE USLOVA JEDAN ELSE

// isSunny? console.log("Danas je suncano"): console.log("Nije suncano")

const netacnaVrednost = 0n;
if(netacnaVrednost){console.log("Tacna vrednost ili truty")
}
else{
    console.log("Netacna vrednost")
}
//'"" ,0, 0n,falsy ostalo tacno
//boolean("isko") vratice true ili false
//mdn truty i razlika sa boolean 