"use strict"

window.onload = () => {





    let todoDropdown = document.querySelector("#todoId")
    todoDropdown.addEventListener("click", getUserData)

}


async function getUserData() {
    let userInput = document.querySelector("#todoIdInput")
    let results = document.querySelector("#results")
    console.log(userInput.value)

    let newString = ("https://jsonplaceholder.typicode.com/todos/").concat(userInput.value)
    console.log(newString)

    try {
        let reponse = await fetch(newString);
        if (!reponse.ok) {
            throw new Error("gosh darnit");
        }
        let data = await reponse.json();
        console.log(data)
        
        results.innerHTML = JSON.stringify(data)

        

    } catch (error) {
        console.log(error);
    }
}

