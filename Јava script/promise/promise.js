myPromise = new Promise((resolve, reject) => {
    const person = {
        firstName:"Sabina",
        lastName:"Jahovic",
        age:25,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    if(person.age >= 26 && person.age <= 30) {
        resolve(person.fullName());
    } else {
        reject(person.fullName());
    }
});

myPromise
    .then((arg) => {
        console.log(`Osoba ${arg} ispunjava uslov `);
    })
    .catch((arg) => {
        console.log(`Osoba ${arg} ispunjava uslov`);
    })

    console.log("Prva poruka");
    setTimeout(()=> 
    console.log("Druga poruka"),3000);
    setTimeout(()=> 
    console.log("Treca poruka"),2000);
    setTimeout(()=> 
    console.log("Catrvta poruka"),1000);

    let probniPromise= new Promise((resolve,reject)=>{
    let podaci={
        ime: "Sabina",
        prezime: "Jahovic",
        
    }
    })