console.log("Front-End  JS ishga tushdi");

function itemTemplate(item) {

  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
              <div>
             <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              O'zgartirish
             </button>
      
             <button data-id="${item._id}" id="delete-me" class="btn btn-danger btn-sm">
               O'chirish
             </button>
            </div>
          </li>`;
}


let createField = document.getElementById("create-field");
//Create Field deb biz mana shu pastdagi rejani qiymatini olyapmiz IDsi orqali
//Form Submit qilinga payti create-field IDli inputga kiritilgan valuesini rejaga tenglashtirib post qilyapmiz
document
  .getElementById("create-form")
  .addEventListener("submit", function(e) { // main pagedagi forma submit bo'lganda function ishga tushsin
    e.preventDefault(); //boshqa pagega by default otib ketmasligi uchun
    //traditional form ni requesti emas axious request 
    //axiousdan tashqari jqueryni requestini ishlatadigan bo'lsak unda jquery post ishlaydi
    //fetch degan package bor bu core module hisoblanadi nodejsga 
    axios.post("/create-item", { reja: createField.value }) 
    /* axious orqali biz /create-item url ga post qilyapmiz. 
    bu traditional request emas bu axious request hisoblanadi.
    ikkkinchi qismiga req.body qismidan yuborayotgan narsamizni pass qilishimiz kerak 
    reja: new_reja deb biz new_rejani qiymatini olishimiz kerak pass qilishimiz kerak 
    TEPADAGILAR MODERN REQUEST
    Anxious ni yaxshi tomoni json formatni qabul qilib auto tarzda objectga aylantirib beradi 
    Yuborayotgan payti ham auto tarzda object qoysangiz json qilib yuboradi 
    */ 
    .then((response) =>{
      document
         .getElementById("item-list")
         .insertAdjacentHTML("beforeend", itemTemplate(response.data));

      //item-listni qo'lga olyapmiz va inserajacent bilan yangi qo'shilgan rejani listni oziriga qo'shyapmiz
      //itemTemplate degan ozimiz tuzgan function orqali axious qaytarga response ichidan data oladi
      createField.value = "";
      createField.focus();

    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling !");
    });
  });

  document.addEventListener("click", function(e) { // ebu nima bosilsa shu bosilgan narsa target bo'ladi
    console.log(e)
//DELETE OPERATION 
    if (e.target.classList.contains("delete-me")) {
      // alert("Siz delete tugmasini bosdingiz")
      if(confirm("Are you sure you want to delete ?")){
        // alert("Yes deb javob berildi !");
       axios
           .post("/delete-item", { id: e.target.getAttribute('data-id') })
           .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove(); //bosgan narsamizni parent elementini ikki marta removw qilib front enddan rejani ochiramiz
            })         
        //nimani delete qilmoqchi bolsak osha rejaga tegishli bolgan rejani id sini beryapmiz
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling!");
      });
      }
    } 
    //bu orqali biz aynan shu e ni ichida classlistda 
    //delete me degan button mavjudmi shuni bilib olypamiz contains bilan
   if (e.target.classList.contains("edit-me")) {
      alert("Siz edit tugmasini bosdingiz")
    //bu orqali biz aynan shu e ni ichidan classlist orqali bor classlarni listini koryapmiz 
    //edit me degan class nomli button mavjudmi shuni bilib olypamiz contains bilan
   }
  })