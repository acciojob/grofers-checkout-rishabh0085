const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Step 1: Select all elements with class "price" and extract their values
    const prices = document.querySelectorAll('.price');
    
    let totalPrice = 0;
    
    // Step 2: Iterate over prices, extract values, and sum them up
    prices.forEach(priceElement => {
        const price = parseInt(priceElement.textContent); // Convert price to integer
        totalPrice += price;
    });
    
    // Step 3: Create a new row for displaying the total price
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1); // Insert new row at the end of the table
    
    // Step 4: Update the new row with the total price
    const cell = newRow.insertCell(0);
    cell.colSpan = 2; // Span across both columns
    cell.textContent = "Total Price: Rs " + totalPrice; // Display total price
};

getSumBtn.addEventListener("click", getSum);
