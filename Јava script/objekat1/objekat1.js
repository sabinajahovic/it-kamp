//skup stvari koji opisuje neku stvar
//osobine,funkcije atributi su objekti q v p kjuvelue pars
const myCar={
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "crvena",
    pogon: "prednji",
    km: 240000,
    servis:{
        datum:'04.maj',
        km: 233848,
        serviser:"Geko",

    },
    udaran: true,
    // udaren: true,
}
console.log("Moj auto je marke:", myCar);
console.log(myCar.servis.serviser)
console.log(myCar['servis']['serviser'])
//pozivamo neku vrednost iz objekta myCar.marka ili myCar["marka"]
//kljucevi su model,boja itd i mora jedna rec camelcase markaAuto  ili snakescase-marka_auta

const radnik={
    firstName: "Bob",
    lastName:"Euroblok",
//     age: 30,
//    adresa: 'Avnoja',
//    contact: '06424255279',
//    job:"programer",
//    city: "Novi Pazar",
//  radni_sati: 40,

// dnevnica: 20,


// fullName: function(){

//     return this.firstName + " " +this.lastName //referenca za objekat  gde ga upotrebljavamo 
// }

adresa:{
ulica: "avnoja",
broj: "bb",
grad: "Novi Pazar",
getAddress: function(){
    console.log(this)
}
}
}

radnik.adresa.getAddress() //vratice samo objekat adresa



// console.log(radnik.fullName()) 
//napravili smo funkciju koja pise ime i prezime
// console.log("Radnik: ", radnik.firstName,
//  radnik.lastName,
// "Radi kao:", radnik.job,"Zivi u", 
// radnik.city, "i ima ",
//  radnik.age ,"godina",

// )


