//if (şart) {
  //  şart durumu dogru ise bu blogu calistir
// }
// else {
 //   şart durumu dogru degılse bu blogu calıstır
// }

// kullanıcıdan alınan sayının tek mi cift mi olduguna karar veren kod blogu

let sayı = Number (prompt("bir sayi giriniz"))

let kalan = sayi%2

if (kalan === 0){
    console.log("sayı cifttir");
    
}else{
    console.log("sayi tekdir");
    
}

// kullanıcıdan alınan iki sayı ve bir operator bılgısıne gore ıslem yapan programı yazınız

let sayi1 = +prompt("birinci sayiyi giriniz") //10
let sayi2 = +prompt("ikinci sayiyi giriniz")  //2
let operator = prompt("+,-,*,/ işaretlerinden birini giriniz") // /


if(operator =="+") {
    sonuc= sayi1 + sayi2

}
else if(operator == "*"){
    sonuc = sayi1 * sayi2
}
else if(operator == "/"){
    sonuc = sayi1 / sayi2
}else{
    console.log("gecersiz operator girildi");
}
if(sonuc){
    console.log(sonuc);
}else{
    console.log("bir sonuc elde edemediniz");
}




