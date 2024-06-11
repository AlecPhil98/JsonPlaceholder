"use strict"


window.onload = () => {

    const addTodoForm = document.querySelector("#addTodoForm");

    addTodoForm.addEventListener("submit", addTodo)
    

}
// Create todo 
const addTodo = async (event) => {
    // call preventDefault to keep the page from reloading the form and refreshing 
    event.preventDefault();
    console.log("alec")
    //generate new form data object
    let formData = new FormData(event.target);

    // generate  a javascript Objext from the form data object created above 
    let formDataASObject = Object.fromEntries(formData);

    try {
        // we make a fetch POST request to create a todo in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/todos",

            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                // take the data from the form and build the body of the request
                body: JSON.stringify(formDataASObject)
            }
        );
        // turn the response into somthing we can work with 
        let newToDo = await response.json();

        console.log(newToDo)
    }catch(error){

        console.log("HELP!!!!!!")


    }

}