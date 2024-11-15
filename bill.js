const products = [{
    image: "big-mac.jpg",
    name : "Big Mac",
    price : 2, 
    },

    {
    image: "drone.jpg",
    name: "Drone",
    price: 500
    
},

{
    image: "monster-truck.jpg",
    name: "monster truck",
    price: 200000,

},

{
    image: "book.jpg",
    name: "Harry Potter Book",
    price: 15
},

{
    image:"lobster-dinner.jpg",
    name: "Lobster Dinner",
    price: 50
},

{
    image: "year-of-netflix.jpg",
    name: "Yearly Netflix",
    price: 100
},


{
    image: "smartphone.jpg",
    name: "I phone",
    price: 1200
},

{
    image:"rolex.jpg",
    name: "Rolex",
    price: 10000
},

{
    image: "diamond-ring.jpg",
    name: "Diamond ring",
    price: 15000
},

{
    image:"gold-bar.jpg",
    name:"Gold Bar",
    price: 7000
},

{
    image: "luxury-wine.jpg",
    name:"Luxury Wine",
    price: 5000
},

{
    image: "hot-tub.jpg",
    name: "Hot Tub",
    price: 6000
},

{
    image: "ferrari.jpg",
    name: "Ferrari",
    price: 12000000
},

{
    image:"mansion.jpg",
    name: "Mansion",
    price : 50000000
},

{
    image: "boeing-747.jpg",
    name: "Boeing 747",
    price: 700000000
},

{
    image: "m1-abrams.jpg",
    name:"Military Tank",
    price: 400000000
},

{
    image: "mona-lisa.jpg",
    name: "Mona Lisa",
    price : 800000000
},

{
    image:"apache-helicopter.jpg",
    name : "Helicopter",
    price : 31000000
},

{
    image: "skyscraper.jpg",
    name: "Skyscraper",
    price : 850000000
},

{
    image: "cruise-ship.jpg",
    name: "Cruise ship",
    price:  750000000
},

{
    image: "nba-team.jpg",
    name: "NBA Team",
    price: 2000000000
},

{
    image:"single-family-home.jpg",
    name:"House",
    price: 300000
},

{
    image:"tesla.jpg",
    name:"Tesla",
    price: 90000
},

{
    image: "yacht.jpg",
    name:"Yacht",
    price: 650000000
},
];


let productsHTML = '';
const balanceDisplay = document.querySelector('.money-display');
const maxBalance = 100000000000; // Maximum balance (initial balance)
let balance = maxBalance; // Current balance starts at the max

products.forEach((productItem) => {
    productsHTML +=  `
    <div class="sub-container">
        <div class="div-img">
            <img class="image" src=${productItem.image} alt="image">
        </div>
        <div class="div-text">
            <p class="name-text">${productItem.name}</p>
        </div>
        <div class="div-price">
            <p class="price-text">$${productItem.price.toLocaleString()}</p>
        </div>
        <div class="div-footer">
            <button class="sell-btn" data-price="${productItem.price}">Sell</button>
            <input class="quantity-input" type="number" value="" min="1" placeholder="Add Quantity">
            <button class="buy-btn" data-price="${productItem.price}">Buy</button>
        </div>
    </div>`;
});

document.querySelector('.Apex-container').innerHTML = productsHTML;

// Add event listener to the buy buttons
document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const price = parseFloat(event.target.getAttribute('data-price'));
        const quantityInput = event.target.previousElementSibling; // Quantity input field
        const quantity = parseInt(quantityInput.value);

        // Ensure a valid quantity is entered
        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const totalCost = price * quantity;

        // Check if the balance is sufficient
        if (balance >= totalCost) {
            balance -= totalCost; // Subtract the total cost from the balance
            balanceDisplay.innerHTML = `$${balance.toLocaleString()}`; // Update the balance display
           
        } 

       
        else {
            alert("Insufficient balance.");
        }
    });
});

// Add event listener to the sell buttons
document.querySelectorAll('.sell-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const price = parseFloat(event.target.getAttribute('data-price'));
        const quantityInput = event.target.nextElementSibling; // Quantity input field
        const quantity = parseInt(quantityInput.value);

        // Ensure a valid quantity is entered
        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const totalGain = price * quantity;

        // Ensure the balance doesn't exceed the maximum value
        if (balance + totalGain > maxBalance) {
            balance = maxBalance; // Set balance to max if it would exceed
        } else {
            balance += totalGain; // Add the price of the sold items to the balance
        }

        balanceDisplay.innerHTML = `$${balance.toLocaleString()}`; // Update the balance display
        
    });
});









