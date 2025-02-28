/* -------------------------------------------------------------------------- */
//!                    SHORT CIRCUIT                              */
/* -------------------------------------------------------------------------- */
// JavaScript'te || (veya) ve && (ve) operatörleri, ifadeleri değerlendirirken "kısa devre" yaparak çalışır. Bu, ifadelerin doğruluğunu ya da yanlışlığını kontrol ederek sonuca erken ulaşmalarını sağlar. Böylece, gerekli olmadıkça diğer ifadeleri incelemezler.

// Short-Circuit Operatörleri Nasıl Çalışır?

// OR (||) Operatörü: İlk doğru (truthy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade yanlış (falsy) ise, bir sonrakine geçer.

// AND (&&) Operatörü: İlk yanlış (falsy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade doğru (truthy) ise, bir sonrakine geçer.

//! AND Operatoru

let yas = 10
let kontrol = yas>18 && "Oy kullanabilir"
console.log(kontrol)

// kullanıcı giriş yaptıysa ve premium üyeliği varsa premium üyemiz hoş geldiniz yazsın

let isLoggedin = true;
let isPremium = true
let message = isLoggedin && isPremium && "premium üyemiz hoş geldiniz"
console.log(message)

//! OR Operatörü 

let sevilenRenk = "fuşya"
let varsayilanRenk = null
let color = sevilenRenk || varsayilanRenk || "renk tanımlı değil"
console.log(color)