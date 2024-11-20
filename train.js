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

console.log("train Area ishga tushdi !");