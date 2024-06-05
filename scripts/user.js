"use strict"

// Function to fetch user data 
async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();

        // Get the table body element
        let tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

        // create a table row for all the users 
        users.forEach(user => {
            let row = document.createElement('tr');

            // Create and append table cells 
            let idCell = document.createElement('td');
            idCell.textContent = user.id;
            row.appendChild(idCell);

            let nameCell = document.createElement('td');
            nameCell.textContent = user.name;
            row.appendChild(nameCell);

            let usernameCell = document.createElement('td');
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);

            let emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            let addressCell = document.createElement('td');
            addressCell.textContent = `${user.address.street}, ${user.address.city}`;
            row.appendChild(addressCell);

            let companyCell = document.createElement('td');
            companyCell.textContent = user.company.name;
            row.appendChild(companyCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Call the function to fetch and display users
fetchUsers();