console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    
         return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text"> ${item.reja}</span>
                    <div>
                        <button data-id="${item._id}"  class="edit-me btn btn-secondary btn-sm mr-1">
                            Edit <i class="fa-solid fa-pen-to-square fa-beat-fade"></i>
                        </button>
                        
                        <button data-id="${item._id}"  class="delete-me btn btn-danger btn-sm">
                            Delete <i class="fa-solid fa-delete-left fa-beat"></i>
                        </button>
                    </div>
                </li>`;
}

let createField = document.getElementById("create-field");

document
    .getElementById("create-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        axios.post("/create-item", { reja: createField.value })
            .then((response) => {
                document
                    .getElementById("item-list")
                    .insertAdjacentHTML("beforeend", itemTemplate(response.data))
                createField.value = "";
                createField.focus();
            })
            .catch((err) => {
                console.log("Please try again!");
            });
    });

document.addEventListener("click", function(e) {
    //Delete Operation
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Are you sure you want to delete ?")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute('data-id') })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.log("Please try again!");
                });
        }
    }

    //EDIT Operation
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "Edit it here !", 
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if (userInput) {
            axios
                .post("/edit-item", { 
                    id: e.target.getAttribute("data-id"), 
                    new_input: userInput,
                }).then(response => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text"
                    ).innerHTML = userInput;
                }).catch(err => {
                    console.log("Please try again!");                    
                })
        }
    }
});

document.getElementById("clean-all").addEventListener("click", function() {
    axios
        .post("/delete-all", { delete_all: true }).then(response => {
            alert(response.data.state);
            document.location.reload();
        })
});