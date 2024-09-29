// Hey team, here’s your assignment for the weekend Enjoy😀

// 1. Create a JavaScript function that takes an array of numbers as input and returns a new array with all elements doubled. Explain how the map() method is used to achieve this.
// 2. ⁠Write a JavaScript function that stores a user's name in localStorage, retrieves it, and displays it in the console. How does the Web Storage API handle storing and retrieving data?
// 3. ⁠Create a Car class in JavaScript with properties for maker, model, color and year. Implement a method that returns a string describing the car. Create 4 new cars from the Car class.
// 4. Write a JavaScript function using the map method to create a new array of five objects, where each employee's salary is increased by 10%. The new array should retain the original employee names and update their salary.
// 5. ⁠2. Write a JavaScript function using the forEach method to print each customer's name followed by the list of items they ordered in the following format
// Customer: John
// Items: Laptop, Mouse, Keyboard

// Customer: Sarah
// Items: Monitor, Headphones

// Customer: Michael
// Items: Phone, Charger, Case

// Customer: Anna
// Items: Tablet.

// 6.Dynamic Content Generation
// Create an HTML page with a form and a div container. Write JavaScript code to
// (a) Add new input fields dynamically based on user selection.
//  ( b)Create a table row with data from form inputs when a button is clicked 
// (c) Generate a random quote and display it in a div when a button is clicked.

//Number 1
function newArray(numbers) {
    return numbers.map(function(num) {
        return num * 2;
    });
}
const secnodArray = [1, 2, 3, 4];
const finalArray = newArray(secnodArray);
console.log(finalArray);

// Number 2
function retrievedName(userName) {
    localStorage.setItem('userName', userName);
    
    const retrieveName = localStorage.getItem('userName');
    
    console.log(`Users Name: ${retrieveName}`);
}
retrievedName('Fajman'); 

// Number 3
class Car {
    constructor(maker, model, color, year) {
        this.maker = maker;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    cars() {
        return `This ${this.color} ${this.maker} ${this.model} ${this.year} is one of the best car ever`;
    }
}

const car1 = new Car('Honda', 'CR-V', 'White', 2023);
const car2 = new Car('Hyundai', 'Tucson', 'Green', 2024);
const car3 = new Car('Toyota', 'Camry', 'Gold', 2024);
const car4 = new Car('Ford', 'F-Series', 'Gray', 2023);

console.log(car1.cars());
console.log(car2.cars());
console.log(car3.cars());
console.log(car4.cars());


// Number 4
const employees = [
    { name: 'Alice', salary: 10000 },
    { name: 'Bob', salary: 20000 },
    { name: 'Charlie', salary: 30000 },
    { name: 'David', salary: 40000 },
    { name: 'Eve', salary: 50000 }
];

function tenPercentSalary(employees) {
    return employees.map(employee => {
        return {
            name: employee.name,
            salary: employee.salary * 1.10 
        };
    });
}
const newSalary = tenPercentSalary(employees);
console.log(newSalary);


// Number 5
const customers = [
    { name: "John", items: ["Laptop", "Mouse", "Keyboard"] },
    { name: "Sarah", items: ["Monitor", "Headphones"] },
    { name: "Michael", items: ["Phone", "Charger", "Case"] },
    { name: "Anna", items: ["Tablet"] }
];

function getCustomerOrder(customers) {
    customers.forEach(customer => {
        console.log(`Customer: ${customer.name}`);
        console.log(`Items: ${customer.items.join(", ")}`);
        console.log();
    });
}
getCustomerOrder(customers);


// Number 6
function addNewInput() {
    const count = document.getElementById('fieldCount').value;
    const container = document.getElementById('inputContainer');
    container.innerHTML = ''; 

    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Input ${i + 1}`;
        input.required = true;
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
}

function addNewRow() {
    const container = document.getElementById('inputContainer');
    const inputs = container.getElementsByTagName('input');
    const tableBody = document.getElementById('dataTableBody');

    const row = tableBody.insertRow();
    for (let input of inputs) {
        const cell = row.insertCell();
        cell.textContent = input.value;
        input.value = '';
    }
}

function myQuote() {
    const quotes = [
        "All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness. ",
        "Just because something doesnt do what you planned it to do doesnt mean its useless.",
        " It has become appallingly obvious that our technology has exceeded our humanity.",
        "Technology is anything that wasnt around when you were born.",
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteContainer').textContent = quotes[randomIndex];
}
