"use strict"

window.onload = () => {




    // when clicked generates the data 
    let todoDropdown = document.querySelector("#todoId")
    todoDropdown.addEventListener("click", getUserData)

}

// gets us sthe data for when we click the button 
async function getUserData() {
    let userInput = document.querySelector("#todoIdInput")
    let results = document.querySelector("#results")
    console.log(userInput.value)
    //  takes the api and adds a user input number to give out a new userId info 
    let newString = ("https://jsonplaceholder.typicode.com/todos/").concat(userInput.value)
    console.log(newString)
    // fetches the new string and tries to see if its valid in not spits out and "error"
    try {
        let reponse = await fetch(newString);
        if (!reponse.ok) {
            throw new Error("gosh darnit");
        }
        // turns the api data from a string into useable javascript data 
        let data = await reponse.json();
        console.log(data)
        // displays the the data in the results div 
        results.innerHTML = JSON.stringify(data)


        // have a catch error if input is not a valid response
    } catch (error) {
        console.log(error);
    }
}

