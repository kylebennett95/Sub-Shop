// orders.js
const subOrders = [
    {
      id: 1,
      bread: "Garlic",
      protein: "ham",
      toppings: ["extra cheese"]
    },
    {
      id: 2,
      bread: "Herb",
      protein: "turkey",
      toppings: ["Mayo"]
    }
  ]
  
  const getNewOrderId = () => {
    let highestOrderId = subOrders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
  }
  
  export const getOrders = () => {
    // Add logic here to return a copy of your orders
    return subOrders.map(order => ({...order}))
  }
  
  export const addNewOrder = (order) => {
    console.log("new order", order)
    const newId = getNewOrderId()
    order.id = newId
    // need to add logic
    subOrders.push(order)
    console.log(subOrders)
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }