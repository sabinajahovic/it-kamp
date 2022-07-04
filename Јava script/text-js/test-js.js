//1 napisi program koji unisi broj i da funkcija vrati kvadrat
//2 korpa artikala objekata svalki ima id cena i kolicina da prodjemo niz i da napravimo novi niz sa name i cena ukupna cena puta broj amount*price da saberemo sve sume + 320
//i koliko imaclanova
//ZADATAK1
const prviZadatak=function(){
    const broj = prompt("Unesite broj:")
if(broj!== " "){
    return console.log(broj*broj)
}else{
    return console.log("greska")
}
}
prviZadatak()


//ZADATAK2
const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];
   


function zadatakDrugi(array){
    const len=array.length
    const postarina=360
    const cena=array.map((el)=>{
        return{
            name: el.name,
            ukupnaCena: el.price *el.amount
        }
    })
    const sum=cena.map((el)=> el.ukupnaCena).reduce((prev,cur)=>prev+cur,360)
     
    return `Dobili ste ${len},postarina kosta ${postarina},ukupna suma je ${sum}`
    }


console.log(zadatakDrugi(CART_DATA))


//ZADATAK3
//3. Fetch data with async javascript(fetch or async/await) from this API
//https://reqres.in/api/users, where you need to add QUERY param called page and its value should be 2
//After you successfully fetch data, map that array into array with only data of users


const zadatakTreci= async() => {
    const fetchovanje= await fetch("https://reqres.in/api/users");
    const users= await fetchovanje.json();
    console.log(users)
    
    return users;    
}
zadatakTreci().then((res)=> console.log(res.data))




