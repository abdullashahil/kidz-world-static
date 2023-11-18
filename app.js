
const cartBtn = document.getElementById("cart");
const cartValue = document.getElementById("cart-value");
const addButtons = document.getElementsByClassName("button");
var cartItems = []
// itemCount.innerHTML = 0
var quantity=0





const items = [
  { name: "This was our pact", quantity: 0, dollars: 7, cents: 49 },
  { name: "The famous five", quantity: 0, dollars: 4, cents: 59 },
  { name: "Matilda", quantity: 0, dollars: 6, cents: 80 },
  { name: "Harry Potter",quantity: 0,dollars: 10,cents: 0,},
  { name: "For Young Readers",quantity: 0,dollars: 7,cents: 29,},
  {name: "Wimpy Kid - DIY",quantity: 0,dollars: 4,cents: 99,},
  {name: "Dart Board",quantity: 0, dollars: 17, cents: 49,},
  {name: "Connect Four", quantity: 0, dollars: 19,cents: 99,},
  { name: "Jenga", quantity: 0, dollars: 20,cents: 99,},
  { name: "Monopoly", quantity: 0,  dollars: 19, cents: 49,},
  { name: "Bookmarks", quantity: 0, dollars: 12, cents: 49, },
  { name: "Birthday Card",quantity: 0, dollars: 12,cents: 49, },
  { name: "Stuffed toys",quantity: 0, dollars: 15,  cents: 99, },
  { name: "Dream catcher drawing", quantity: 0,dollars: 18, cents: 49,},
];

// Update the cart display
function carting() {
  let cart = 0;
  for (const item of items) {
    cart += item.quantity;
  }
  cartValue.innerHTML = cart;
}

// event listener to all add btn
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    carting();
  };
}

// Calculate => total price
let Dollar = 0;
let Cent = 0;

function price() {
  let totalCents = 0;

  for (const item of items) {
    totalCents += item.quantity * (item.dollars * 100 + item.cents);
  }
  Dollar = Math.floor(totalCents / 100);
  finalCents = totalCents % 100;
}

// Display => items and total amount
cartBtn.onclick = () => {
  price();

  for (const item of items) {
    if (item.quantity !== 0) {
      console.log(`Item name: ${item.name} Quantity: ${item.quantity}`);
    }
  }
  console.log(`The total amount is ${Dollar}$ dollars and ${finalCents} cents`);
};



// addButton.forEach((button) => {
//     button.addEventListener('click', () => {
//         var itemName = button.parentElement.parentElement.querySelector('h3').innerHTML;
        
//         console.log('add')
//         quantity++
       
//         sessionStorage.setItem('itemName',itemName)
//         sessionStorage.setItem('quantity',quantity)
//         console.log(sessionStorage,"hello");
//         itemCount.innerHTML++;
//     });
// });













// addButton.forEach((button) => {
//     button.addEventListener('click', () => {
//         var itemName = button.parentElement.parentElement.querySelector('h3').innerHTML;
//         console.log('add');

//         // Check if the item is already in the cart
//         var existingItem = cartItems.find(item => item.name === itemName);

//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             // If the item is not in the cart, add it
//             cartItems.push({ name: itemName, quantity: 1 });
//         }

//         // Update the session storage with the cartItems array
//         sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

//         itemCount.innerHTML++;
//     });
// });






// cart.addEventListener('click', () => {
//     // Get the cart items from session storage and display them
//     var storedCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
//     if (storedCartItems) {
//         storedCartItems.forEach(item => {
//             console.log("Item name: " + item.name + " - Quantity: " + item.quantity);
//         });
//     }
// });
