//! Aritmatik Operatorler

let a= 10
let b= "2"

console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b);

console.log(a%b);

console.log(a**b);

//öncelik sıralaması -işlem önceliği
//üs, parantez içi, çarpma/bölme, çıkartma/toplama

//dakika olarak verilen asagıdakı deger kac saat kac dakikaya denk gelmektedır

let sure=377
let saat= Math.floor(sure/60)

console.log(saat);
let dakika=sure%60
console.log(dakika);

console.log(`${saat}:${dakika}`);

//increment decrement

let x =10

// x ++ önce yazdır sonra azalt 
// ++ x önce arttır sonra yazdır
console.log("increment");
console.log(++x);
console.log(decrement);
// x-- önce yazdır sonra azalt
// --x önce azalt sonra yazdır 
console.log(x--);

console.clear();

//assigment operators

let t =7;
let z =6;

console.log(t);

t=z
console.log(t);

t= t+z
console.log(t);

// t= t+z
// t= t-z

t+=z
console.log(t);

t-=z
console.log(t);

console.log(t);
t*=3 // t = t*z

console.log(t);
t/=2
console.log(t);

t%=4
console.log(t);
t++
t**=6
console.log(t);

//karsılastırma operatorlerı bize boolean bir deger döndurur

let c =2
let d ="2"
console.log(typeof c);
console.log(typeof d);
console.log(c==d); //true
console.log(c===d); //false


console.log(c-d);

console.log(c !=d); //false sonucu vererek eşittir demiş oluyor 

//eşit degildir =>false yani eşittir sonucunu veriyor. ikisi deger olarak esıt oldugu ıcın esit degıldır kontrolunde (false) yani eşittir olarak veriyor.


/*------------------------------------*/

console.log(5>4);
console.log(5<4);
console.log(7>=17);

/*------------------------------------------*/
//logigal operators

console.clear();
// AND operatoru "VE"

//mukemmelliyetcidir her sey true olmalı bir tane false gordugu anda orada ıslem bıtıyor

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


console.log(true && true && true && true && false);

console.log("elma" && "armut" && "muz" && "çilek");

let f = "elma" && "armut" && "muz" && undefined && "cilek"
console.log(typeof f);

//OR OPERATORU "VEYA"

//hersey false olsa bıle bır tane true deger varsa true dondurmeye yeter
//hersey false ıse son false degerını bıze dondurur

console.log(false || false || 1 || false || false );
console.log(false || "" || 0 || "test" || false);


























