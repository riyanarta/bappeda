const totalBrg = document.getElementById("ctl00_BogeContent_modalPopup_C_RGridSPPB_ctl00");
const body = totalBrg.querySelector("tbody");
const rows = body.querySelectorAll("tr");

// Initialize an array to hold valid rows
let validRows = [];

// Iterate over all rows and check their classes
rows.forEach(row => {
  // Check if the row has either class rgRow or rgAltRow
  if (row.classList.contains("rgRow") || row.classList.contains("rgAltRow")) {
    // Add the row to validRows array if it contains the required classes
    validRows.push(row);
  } else {
    // Remove the row from the DOM if it doesn't have the required classes
    row.remove();
  }
});

// Log the results
console.log("Valid Rows: ", validRows);

// Access the cells (td) of each row in validRows
validRows.forEach(row => {
  const cells = row.querySelectorAll("td");  // OR use row.children for direct access
  const input = cells[9].querySelector("input[type='text']");  // Access input field in the 9th cell (index 8)
  
  // Check if there are at least 10 cells (index 8 is the 9th cell)
  if (cells.length > 8) {
    // Copy text content from the 6th cell (index 5) to the 9th cell (index 8)
    if (input) {
      input.value = cells[5].textContent;
      console.log(`Copied text from cell 6 to cell 9: ${input.value}`);
    } else {
      console.log("No input field found in the 9th cell.");
    }
  } else {
    console.log("Not enough cells in this row to perform the copy.");
  }
});
