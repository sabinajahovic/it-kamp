//FUNKCIJA ,delovi koda koji mogu da se koriste uvek za jedan program
//DRY-DONT REOEAT YOURSELF znaci ne ponavljaj kodove
function saberi_tri_pet(){
    const zbir = 3+5;
    return zbir;
}
//2 navin pisanja funkcija
const zbir_tri_pet=saberi_tri_pet()
console.log(saberi_tri_pet());

//treci nacin
// const  saberi = function()
// {

// }
// const arroisjdaiwFunc = ()
// {}
function saberi(a,b){
return a + b;

}
function saberi(prviBroj,drugiBroj){
    return prviBroj+drugiBroj;

}
console.log(saberi(10,15));

//treci primer

function pozdrav(ime){
    alert("Pozdrav korisnice"+" "+ ime)
}
pozdrav("Sabina");


//primer za ince u cm
function inchToCm(inch){
    return inch * 2.54;

}
 inchToCm(10);


//primer za visinu
const visina=inchToCm(25);
console.log(visina);

//primer za ARROW,sve lokalno je unutar funkcije skoup,
// const inchToCm=(inch)=> inch* 2.54;


// console.log(inchToCm(10));

//za prethodno saberi vezano

// const saberi=(a,b)=>a+b;
// console.log(saberi(10,1));

//svako name koje bi van uveli to vazi samo za van a u funciji  vazi samo za funkciju
function nekaFuncija(){
    const name= "Jusuf";
    console.log(name)
}
nekaFuncija();


//ARGUMENTI: mogu da budu a ne moraju

function sabiraj(prvi,drugi,treci= false){
    return prvi+ drugi + treci;
    if(treci){
        return prvi + drugi + treci;

    }
    else{
        return prvi+ drugi;

    }
}
console.log(sabiraj(2,2,10))