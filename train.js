// Masalani izohi
// A-TASK: 

/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi 
letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi 
kerak boladi.

MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:
Qilgan Yechimingiz…*/

//1-yechim

function countLetter(e, enginner) {
   let Ncount = 0
    for (let i = 0; i < enginner.length; i++) {
        if (enginner.charAt(i) === e ) {
            Ncount ++;
        }
    }
    return Ncount;
}

const countedLetter = countLetter("e", "engineer");
console.log(countedLetter)

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

// const countedLetter = countLetter("e", "engineer");
// console.log(countedLetter)



/*           //=====================CALLBACK FUNCTION ==============
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

/*                     //===================== EVENT LOOP HODISASI ==============
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