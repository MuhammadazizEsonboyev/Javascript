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


// =================== true false ==============

// let  defaultColor = 'qora';
// let userColor = undefined;
// let currentColor = userColor || defaultColor;
// console.log(currentColor);
//==============================
// let person = {
//     name : 'Aziz',
//     age : 12,
//     job: "muhandis"
// }
// console.log(person.job || 'ishsiz');
//===============================
// let x = (2 + 3) * 4;
// console.log(x);


//===================== masala==================
// let color1 = 'oq';
// let color2 = 'qora';
// let colorTemp = color1;
// color1 = color2;
// color2 = colorTemp;

// console.log(color1);
// console.log(color2);

//=================== If else ========================
// let hour;


// if(hour >= 6 && hour < 12){
//     console.log('Xayrli tong');
// }
// else if(hour >= 12 && hour < 18){
//     console.log('Xayrli kun');
// }
// else{
//     console.log('Xayrli kech');
// }

//=================== Switch case =====================
// let word = 'pensil';
// let book = 'book';

// if (word == 'pensil') {
//     console.log('qalam');
// }
// else if (book == 'book') {
//     console.log('kitob');
// }
// else {
//     console.log('Nomalim soz');
// }


// switch (word) {
//     case 'pensil':
//         console.log('qalam');
//         break;
//     case 'book':
//         console.log('kitob');
//         break;
//     default:
//         console.log('Nomalim so`z');
//         break;
// }
//===================== For while ============ 
// for (let i = 1; i < 10; i++) {
//     if (i % 2 == 1) {
//         console.log('toq son', i);
//     }
// }

//================== While ======================


// let i = 0;

// while (i < 10) { 
//     if (i % 2 == 1) {
//         console.log('toq son', i);
//         i++
//     }
// }


// let i = 0;

// do {
//     if (i % 2 == 1) {
//         console.log('toq son', i);
//         i++
//     }
// }
// while(i < 10);

//========================= For in va for of===============

// const person = {
//     name : 'Person',
//     age: 32
// }

// for(let key in person){
//     console.log(key, person[key]);
// }

    // const colors = ['oq', 'qora', 'qizil', 'red'];
    // for(let index in colors){
    //     console.log(index, colors[index]);
    // }

    // for(let color of colors){
    //     console.log(color);
    // }
//================================== Amaliy mashgulot==============
// let number = getmax(3 , 3);
// console.log(number);


// function getmax(a , b){
//     if(a > b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// let number =  isLand(2, 30);
// console.log(number);


// function isLand (width, height) {
// if(width > height){
//     return  true;
// }
// else{
//     return  false;
// }

// }

// ==============  FizzBizz ===========


