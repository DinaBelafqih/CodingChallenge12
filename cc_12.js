//Task 1 - Created Revenue Metric Card

//Ensuring the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    //Selecting the dashboard container using both getElementById and querySelector
    const dashBoardDiv = document.getElementById("dashboard"); 
    const dashBoardDivAlt = document.querySelector("#dashboard"); 

    //Appending Revenue card first to prove both selections point to the same element
    dashBoardDiv.appendChild(createMetricCard("revenueCard", "Revenue", 120)); 

    //Function to create a metric card dynamically
    function createMetricCard(id, title, amount) {
        //Creating a div element for the metric card
        const metricDiv = document.createElement("div"); 

        //Setting an ID for the div
        metricDiv.setAttribute("id", id); 

        //Assigning the class "metric-card"
        metricDiv.setAttribute("class", "metric-card"); 

        //Creating an h3 element for the title
        const heading = document.createElement("h3"); 

        //Setting the text content for the title
        heading.textContent = title; 

        //Creating a paragraph element for the amount
        const paragraph = document.createElement("p"); 

        //Setting the text content with the dollar amount
        paragraph.textContent = `$${amount}`; 

        //Appending the heading and paragraph to the metric card
        metricDiv.appendChild(heading); 
        metricDiv.appendChild(paragraph); 

        //Returning the created metric card
        return metricDiv; 
    }

    //Task 2 - Updated Metric Cards via Array Conversion

    //Creating and appending more metric cards - using both dashBoardDiv and dashBoardDivAlt to prove they are the same
    dashBoardDivAlt.appendChild(createMetricCard("profitCard", "Profit", 80)); 
    dashBoardDiv.appendChild(createMetricCard("expensesCard", "Expenses", 50)); 

    //Selecting all metric cards
    const metricCards = document.querySelectorAll(".metric-card"); 

    //Converting the NodeList to an array
    const metricCardsArray = Array.from(metricCards); 

    //Looping through each metric card to update its content and style
    metricCardsArray.forEach((card) => {
        //Selecting the <h3> inside the card
        const myHeading = card.querySelector("h3"); 

        //Appending " - Updated" to the title
        myHeading.textContent += " - Updated"; 

        //Changing the background color to orange
        card.style.backgroundColor = "orange"; 
    });

    //Task 3 - Implemented Dynamic Inventory List

//Function to add an inventory item dynamically
function addInventoryItem(itemName) {
    //Selecting the inventory list
    const inventoryList = document.getElementById("inventoryList"); 

    //Creating a new list item for the new inventory item
    const newItem = document.createElement("li"); 

    //Assigning the class "product-item"
    newItem.setAttribute("class", "product-item"); 

    //Settting a custom data attribute with the product name
    newItem.setAttribute("data-product", itemName); 

    //Setting the text content to the item name
    newItem.textContent = itemName; 

    //Adding the event listener to remove the item when clicked
    newItem.addEventListener("click", function () {
        //Removing the clicked item from the list
        inventoryList.removeChild(newItem); 

        //Logging the removed item
        console.log(`Removed item: ${itemName}`); 
    });

    //Appending the new item to the inventory list
    inventoryList.appendChild(newItem); 
}

//Task 4 - Demonstrated Event Bubbling in Customer Section

    //Selecting the customer section container
    const customerSectionDiv = document.getElementById("customerSection"); 

    //Function to add a customer card dynamically
    function addCustomerCard(name) {
        //Creating a new div element for the customer card
        const customerDiv = document.createElement("div"); 

        //Assigning the class "customer-card"
        customerDiv.setAttribute("class", "customer-card"); 

        //Setting the text content to the customer's name
        customerDiv.textContent = name; 

        //Event listener for the individual customer card
        customerDiv.addEventListener("click", (event) => {
            //Logging when a customer card is clicked
            console.log("Customer Card Clicked"); 

            //Stopping the event from bubbling to the parent container
            event.stopPropagation(); 
        });

        //Appending the new customer card to the customer section
        customerSectionDiv.appendChild(customerDiv); 
    }

    //Event listener for the customer section to demonstrate event bubbling
    customerSectionDiv.addEventListener("click", () => {
        //Logging when the customer section is clicked
        console.log("Customer Section Clicked"); 
    });

    //Adding two customer cards dynamically
    addCustomerCard("First Customer"); 
    addCustomerCard("Second Customer"); 
});