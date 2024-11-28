 
// Masalani izohi
//TASK-C 

//Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
//MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

//masalani yechimi:
//1-yechim

const moment = require("moment");

class Shop {
    // Konstruktor (mahsulotlarning boshlang‘ich qiymatlari o‘rnatiladi)
    constructor(lagmon, non, cola) {
        this.lagmon = lagmon; // Lag‘mon miqdori
        this.non = non; // Non miqdori
        this.cola = cola; // Cola miqdori
    }

  
    hozirgiVaqt() {
        return moment().format("HH:mm"); // Vaqtni 24 soatlik formatda qaytaradi
    }

    // Ombordagi mavjud mahsulotlarni ko‘rsatish
    qoldiq() {
        const vaqt = this.hozirgiVaqt();
        console.log(
            `Hozir ${vaqt}da omborda: ${this.non}ta non, ${this.lagmon}ta lag‘mon va ${this.cola}ta cola mavjud.`
        );
    }

    // Mahsulot sotish
    sotish(mahsulot, miqdor) {
        if (!this[mahsulot]) {
            console.log(`Mahsulot "${mahsulot}" mavjud emas.`);
            return;
        }

        if (this[mahsulot] < miqdor) {
            console.log(
                `Uzr, omborda ${miqdor}ta ${mahsulot} yetarli emas. Faqat ${this[mahsulot]}ta mavjud.`
            );
        } else {
            this[mahsulot] -= miqdor; 
            console.log(
                `Hozir ${this.hozirgiVaqt()}da ${miqdor}ta ${mahsulot} sotildi.`
            );
        }
    }

    // Omborga mahsulot qabul qilish
    qabul(mahsulot, miqdor) {
        if (!this[mahsulot]) {
            console.log(`Mahsulot "${mahsulot}" mavjud emas.`);
            return;
        }

        this[mahsulot] += miqdor; 
        console.log(
            `Hozir ${this.hozirgiVaqt()}da ${miqdor}ta ${mahsulot} qabul qilindi.`
        );
    }
}


const shop = new Shop(4, 5, 2);

shop.qoldiq(); 
shop.sotish("non", 3); 
shop.qabul("cola", 4); 
shop.qoldiq(); 





// Masalani izohi
// A-TASK: 

/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi 
letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi 
kerak boladi.

MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:
Qilgan Yechimingiz…*/

//1-yechim

// function countLetter(e, enginner) {
//    let Ncount = 0
//     for (let i = 0; i < enginner.length; i++) {
//         if (enginner.charAt(i) === e ) {
//             Ncount ++;
//         }
//     }
//     return Ncount;
// }

// const countedLetter = countLetter("e", "engineer");
// console.log(countedLetter)

// 2-yechim

// function countLetter(e, enginner) {
// const list = enginner.split("");
// const count = list.reduce((acc,char,) => {
//       if (char === e ) {
//         return acc + 1;
//       }
//       return acc;
// },0);

// return count;
// }

// const countedLetter = countLetter("e", "enginneer");
// console.log(countedLetter)



/*           //=====================CALLBACK FUNCTION =====================
const list = [
 "Focus on learning, curiosity, failure, and building good habits.", //Ages 0-20
 "Learn from mistakes, work hard, build a network, and think long-term.", //Ages 20-30
"Build a strong team, persist through challenges, and develop leadership skills.", // //Ages 30-40
 "Mentor others, take calculated risks, and balance personal and professional life.", //Ages 40-50
 "Reflect on achievements, give back to society, and continue learning.", //Ages 50-60
"Enjoy life, focus on health, and share your wisdom with the next generation." //Ages 60+
];



function maslahatBering(a,callback) {
    if (typeof a !== 'number') callback("insert a number",null); //agar kiritilgan a argumentni taypi number bolmasa error throw qilsin
    else if (a <=20 ) callback(null,list[0]);
    else if (a > 20 && a <= 30) callback(null,list[1]);
    else if (a > 30 && a <= 40) callback(null,list[1]);
    else if (a > 40 && a <= 50) callback(null,list[1]);
    else if (a > 50 && a <= 60) callback(null,list[1]);
    else {
        callback(null,list[5]);

    }
}

maslahatBering(10,(err,data) => { 
    if(err) console.log("Error",err);
    else {
        console.log('javob',data);
    };
});

*/

/*           //===================== EVENT LOOP HODISASI =====================
const list = [
    "Focus on learning, curiosity, failure, and building good habits.", //Ages 0-20
    "Learn from mistakes, work hard, build a network, and think long-term.", //Ages 20-30
   "Build a strong team, persist through challenges, and develop leadership skills.", // //Ages 30-40
    "Mentor others, take calculated risks, and balance personal and professional life.", //Ages 40-50
    "Reflect on achievements, give back to society, and continue learning.", //Ages 50-60
   "Enjoy life, focus on health, and share your wisdom with the next generation." //Ages 60+
   ];
   
   
   
   function maslahatBering(a,callback) {
       if (typeof a !== 'number') callback("insert a number",null); //agar kiritilgan a argumentni taypi number bolmasa error throw qilsin
       else if (a <=20 ) callback(null,list[0]);
       else if (a > 20 && a <= 30) callback(null,list[1]);
       else if (a > 30 && a <= 40) callback(null,list[1]);
       else if (a > 40 && a <= 50) callback(null,list[1]);
       else if (a > 50 && a <= 60) callback(null,list[1]);
       else {
           setTimeout(function() { 
            callback(null,list[5]); 

           },5000)
   
       }
   }
   console.log('passed here 1')
   maslahatBering(70,(err,data) => { 
       if(err) console.log("Error",err);
       else {
           console.log('javob',data);
       };
   });
   console.log('passed here 2');


console.log("train Area ishga tushdi !");
*/


            //===================== ASYNCHRONOUS FUNCTION=========================
const list = [
    "Focus on learning, curiosity, failure, and building good habits.", //Ages 0-20
    "Learn from mistakes, work hard, build a network, and think long-term.", //Ages 20-30
   "Build a strong team, persist through challenges, and develop leadership skills.", // //Ages 30-40
    "Mentor others, take calculated risks, and balance personal and professional life.", //Ages 40-50
    "Reflect on achievements, give back to society, and continue learning.", //Ages 50-60
   "Enjoy life, focus on health, and share your wisdom with the next generation." //Ages 60+
   ];                    
            //===================== DEFINITION QISMIDA ASYNCH ISHLATDIK==============
// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error ("insert a number"); //agar kiritilgan a argumentni taypi number bolmasa error throw qilsin
//     else if (a <=20 ) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//     //     return new Promise((resolve, reject) => {
//     //         setTimeout(() => { 
//     //             resolve(list[5]);  // Resolves the promise with the value from list[5] after 5 seconds
//     //         }, 5000);
//     //     });
//     // }
//         return new Promise((resolve, reject) => {
//             setInterval(() => {  //resolve = return 
//                 resolve(list[5]);  // Resolves the promise with the value from list[5] after 5 seconds
//             }, 1000);
//         });
//     }
// }




//                             ============Then vs Catch Method =================
//CALL VIA THEN CATCH 
// let o;

// console.log('passed here 0') // birinchi bu ishladi
// maslahatBering(5)    // uchinchi bu ishladi. chunki nodejs synchronous functionlarni vazifalari tugatidiki asynchronous funtionga o'tadi
//   .then(function(data) {
//     console.log("Javob:", data); // Callback function yozyapmiz qachonki successfull bolsa malumotni bersin 
//   })
//   .catch(function(err) {
//     console.log("Error:", err); // Callback function yozyapmiz qachonki reject qilinsa errorni bersin
//   });
// console.log('passed here 2'); // ikkinchi bu ishladi


                                    //  ============Async vs await Method =================

// async function run () {
//     let javob = await maslahatBering(25);
//     console.log('Javob:', javob);
//     javob = await maslahatBering(35);
//     console.log('Javob:', javob);
//     javob = await maslahatBering(45);
//     console.log('Javob:', javob);
// }


// run ()


             //==========================qayta qayta chaqirishi event loop bilan ================= 

// function maslahatBering(a,callback) {
//     if (typeof a !== 'number') callback("insert a number",null); //agar kiritilgan a argumentni taypi number bolmasa error throw qilsin
//     else if (a <=20 ) callback(null,list[0]);
//     else if (a > 20 && a <= 30) callback(null,list[1]);
//     else if (a > 30 && a <= 40) callback(null,list[1]);
//     else if (a > 40 && a <= 50) callback(null,list[1]);
//     else if (a > 50 && a <= 60) callback(null,list[1]);
//     else {
       
//         setInterval(function()  {  //resolve = return 
//             callback(list[5]);  // Resolves the promise with the value from list[5] after 5 seconds
//          }, 1000);
                   
    

//     }
// }

// console.log('passed here 1')
//    maslahatBering(70,(err,data) => { 
//        if(err) console.log("Error",err);
//        else {
//            console.log('javob',data);
//        };
//    });
//    console.log('passed here 2');

// function qoldiqliBolish(a,b, callback) {
//     if (b === 0) {
//         callback("Mahrajga nol bolmaydi", null);


//     }else {
//         const c = a % b;
//         callback(null, c);
//     }
// }

// qoldiqliBolish(10,3 ,function(err,data) {
//     if (err) console.log("Error",err);
//     else {
//         console.log('Javob:', data);
//     }
// })

/* biz cloud databaselardan foydalanyapmiz yani man
 ozimni mashinamda mongoDB ni ishlatmayapman balkim
  mongoDb atlasda ishlatyapman chunki keyinchalik 
  loyihamni qayerda run qilishimdan qatiy nazar u 
  ishlaydi agar local mashinada ustanovka qilsam boshqa
   joylarda ishlata olmayman kampiturdan tashqari shuning 
   uchun mongoDb atlasni tanlab oldim*/








// Masalani izohi
//  B-TASK:  

/* Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

masalani yechimi:
Qilgan Yechimingiz…*/

//1-yechim
// function countDigits(str) {
//     return String(str) //stringga otkazib olamiz
//     .split('') // stringni array qilamiz alohida alohdida reduce ishlatgani
//     .reduce((count, char) => { // reduceni ishlatamiz sanash uchun
//         if (char >= '0' && char <= '9') { // sonmi yoqmi tekshiropmiz
//             count++; // agar son bolsa increment qilsin
//         }
//         return count; // qiymatni return qilamiz
//     }, 0); // boshlangich qiymatni 0 qilamiz
// }

// console.log(countDigits("ad2a54y79wet0sfgb9")); 



 