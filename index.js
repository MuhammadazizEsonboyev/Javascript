// let name = "aziz";
// console.log(name);


// let pi = 3.14;
// console.log(pi);
// pi = 4;



//1. Kalit so'z bolishi mumkin emas
// if , else , let ,const, for

//2.O'zgaruvchi nomi raqam bilan yozilishi mumkin emas
// 1name 2name 

//3.Probel qoyish mumkin emas

//4.Case-sensitive     Name  name ikkixil o'zgaruvchi hisoblanadi

//5.o'zgaruvchilarga nom berish qoidalariga roiya qilish kk

//6.Camel Case usuli Paskal case usuli (firstName) (FirstName) 

/* ------------------------------------------- */

// let name = 'Muhammadaziz';//Sring turdagi o'zgaruvchi
// let age = 12; //Number o'zgaruvchi
// let isMarried = false; //Boolean
// let FirsName = undefined; //undfined
// let SelectorColor = null //null turi

// console.log(name);


/* ------------------------------------------- */
//Reference turlar
//Array
// Object
// function


//-------------- Object---------------
// let person = {
//     name : 'Azizbek',
//     age : 12,
// }

// person.name = 'azz';
// person['age']  = 15;


// console.log(person['age']);
// console.log(person.age);

//-------------- Array ---------------
// let selectorColor = ['oq', 'yashil'];
// selectorColor[2] = "Moviy";//dinamik bo'ganligi uchun qo'shildi
// selectorColor[2] = 6;//xohlagan turda ishlatishimiz mumkin
//massivning turi Object

// console.log(selectorColor[1]);
// console.log(selectorColor);
// console.log(selectorColor[2]);

//-------------- Function ---------------

// function greet(Firstname , lastName) {//parametr
//     console.log("Assalomu aleykum " + Firstname + ' ' + lastName);
// }

// function square(number){
//     return number * number;
// }

// greet('Ahmad' , 'Abdullayev');//qiymati argument
// // greet('Hamid');//qiymati argument

//  console.log(square(2));


//-------------- Operatorlar ---------------//
//Arifmetik
//Tayinlov
//Solishtiruv
//Mantiqiy
//Bitwise


// let x = 7;
// let y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// console.log(++x);//ikriment operatori x = x + 1;
// console.log(x++);//Dikriment operatori 1 = x + 1;
// x += 3;// x = x + 3;

// console.log(x);


// -------------- tenglik operatorlari/////////


// let x = 1;
// // console.log(x = 1);
// // console.log(x > 1);
// // console.log(x < 1);
// console.log(x !== 1);//emas
// console.log('1' === 1);
// console.log('1' == 1);

//Uyga vazifa 
// 1 - savol ushbu vazifada consolega true sozini chiqarish yolini aqtaring;

// x = 10;
// y = 5;
// console.log(x _ 5);

//2 - savol 
// Agarda x = 5 bolsa;
// x !== 5 ning natijasi qanday bo'ladi?

//3 - savol
// "2" == "12" solishtiruvining natijasi qanday bo'ladi va nma uchun?


// ----------------------Ternay operatori-------------//
// let points = 70;
// let result = points > 60 ? " O`tdi" : 'O`tmadi';
// console.log("Imtixon natijasi:", result);


//Ternary operatoridan foidalanib mijozni do'konga a'zo ekanligini tekshiring agar azo bo'lsa 20% chegirma qiling azo bo'lmagan bo'lsa 5% chegirma qiling

// let mijoz = true;
// let magazin = mijoz == true ? "Azosiz va 20% chegirma" : "Azo emasiz va 5% chegirma";
// console.log("Siz bizning magazinga: ", magazin);


//--------------------- Mantiqiy operatorlar --------------//
// && va
// || yoki
// ! emas

//-------------- && --------------
// let hour = 9;
// let min =  21;

// let data = new Date()
// let hour = data.getHours();
// let min =  data.getMinutes();
// console.log("Soat:",hour, "Minut:", min);
// let isOficeOpen = (hour >= 9  && min >= 0);
// console.log(isOficeOpen);
//------------------- || ---------------//

// let data = new Date()
// let hour = data.getHours();
// let min =  data.getMinutes();
// console.log("Soat:",hour, "Minut:", min);
// console.log(true || false);

// let isOficeOpen = (hour >= 9  || min >= 0);
// console.log(isOficeOpen);