// const telefon={
//     id: 1,
//     marka: "iphone",

//     memorija: "128gb",
//     boja: "bela",
//     velicina:"12inch",
//     kamera:{
//         prednja: "120mp",
//         zadnja1: "200mp",
//  zadnja2: "240mp",
//  porudzbina:function(){

//     console.log(this)
//    }

//      }
    
//      }
 

//  console.log("moj telefon je:" , telefon.marka)

//   telefon.kamera.porudzbina()




//Zadatak objekat auto da ima marka model,maks bzina,trenutna brzina i 3 funkcije vozi(drive),koci(brake),
//vozi trenutnu btzinu  plus 20
//koci smanji brz za 10
// stop - brzina 0

//160 maks brzina i smanji brzinu do 120 i stop
 
const car={
    marka: "Audi",
    model: "A6",
    maxSpeed: 220,
    currentSpeed: 0,
    drive:function(value){
        //  this.currentSpeed + value;
         if(this.currentSpeed + value > this.maxSpeed){
             alert ("Vozite prebrzo")

         }else{
             this.currentSpeed +=value;
         }
    },
    brake:function(value){
 this.currentSpeed -= value;


    },

    stop:function(value){
        this.currentSpeed=0;
      
    }

}
car.drive(180)
car.drive(20)
// car.drive()
// car.drive()
// car.drive()
// car.drive()
// car.drive()
// car.drive()

// car.brake()
// car.brake()

// car.brake(30)
// car.brake()
console.log(car)





