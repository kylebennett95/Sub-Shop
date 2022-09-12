// main.js
import {getOrders, addNewOrder} from './orders.js'

document.getElementById("app").innerHTML = `
<h1>Kyle's Sub Shop</h1>
<div>
  <h3>Build your sub!!!</h3>
  <div class="subForm">
    <div class="bread">
      <p>Pick your bread</p>
      <label for="whiteBread">White</label>
      <input id="whiteBread" name="bread" type="radio" value="White" />
      <label for="wheatBread">Wheat</label>
      <input id="wheatBreadt" name="bread" type="radio" value="Wheat" />
      <label for="herbBread">Italian Herb & Cheese</label>
      <input id="herbBread" name="bread" type="radio" value="Italian Herb & Cheese" />
      </div>
      <div class="protein">
        <p>Pick your Protein (Select all that apply)</p>
        <ul>
        <li>
        <label for="turkey">Turkey</label>
        <input id="turkey" name="protein" type="radio" value="Turkey" />
        </li><li>
        <label for="ham">Ham</label>
        <input id="ham" name="protein" type="radio" value="Ham"/>
        </li><li>
        <label for="chicken">Chicken</label>
        <input id="chicken" name="protein" type="radio" value="Chicken" />
        </li>
        </ul>
    </div>
    <div class="toppingsClass">
    <p>Choose Your Toppings</p>
    <ul>
    <li>
    <label for="pickles">Pickles</label>
    <input id="pickles" name="subTopping" type="checkbox" value="Pickles" />
    </li><li>
    <label for="mayo">Mayonaise</label>
    <input id="mayo" name="subTopping" type="checkbox" value="Mayonaise"/>
    </li><li>
    <label for="Mustard">Mustard</label>
    <input id="Mustard" name="subTopping" type="checkbox" value="Mustard" />
    </li>
    </ul>
    </div>
    <div>
      <button id="submitOrder">Order Sandwich</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders()
  let html = '<ul>'
  for(const order of orders) {
    html += `<li>
      <p>Bread: ${order.bread}</p>
      <p>Protein: ${order.protein}</p>
      <p>Toppings: ${order.toppings.join(', ')}</p>
    </li>`
  }
  html += "</ul>"
  // Add logic here to put the orders on the DOM
  document.getElementById('orders').innerHTML = html
};

document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    console.log("submitting order")
    // Need logic to get all the values from the form, 
    const bread = document.querySelector("input[name=bread]:checked")?.value
    const protein = document.querySelector("input[name=protein]:checked")?.value

    const toppingsElements = document.querySelectorAll(
      "input[name=subTopping]:checked"
    );

    //the issue might be here, things are not being pushed into toppingsArray
    const toppingsArray = []
    toppingsElements.forEach((taco)=> {
      toppingsArray.push(taco.value)
    });
    console.log(toppingsArray)
    
    // format them into an object and 
    const newOrder = {
        bread: bread,
        protein: protein,
        toppings: toppingsArray
    }

    console.log(newOrder)

    //add that object to the `orders` array in `orders.js`
    addNewOrder(newOrder)

		
  }
});

document.addEventListener("stateChanged", event => {
  displayOrders()  
})

//This is called when the page is loaded only
displayOrders()