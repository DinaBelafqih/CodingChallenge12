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