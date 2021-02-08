// Submit Listener
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Adds function to delay the results for the spinner
  // Hide Results
  document.getElementById("results").style.display = "none";
  // Show results
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log("calculating...");

  // UI variables (Inputs) | Adding EL signifes that the item grabbed is an element
  const amountEL = document.getElementById("amount");
  const interestEL = document.getElementById("interest");
  const yearsEL = document.getElementById("years");

  // UI Variable (Results)
  const monthlyPaymentEL = document.getElementById("monthly-payment");
  const totalPaymentEL = document.getElementById("total-payment");
  const totalInteresEL = document.getElementById("total-interest");

  // Loan Calculations
  const principle = parseFloat(amountEL.value); // Turns amount value into a floating number
  const calculatedInterest = parseFloat(interestEL.value) / 100 / 12; // Provided calculated interest
  const calculatedPayments = parseFloat(yearsEL.value) * 12;

  // Compute Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1); //Monthly payment

  if (isFinite(monthly)) {
    monthlyPaymentEL.value = monthly.toFixed(2); // Updating the value of the monthly payment element to monthly with a fixed dec of 2
    totalPaymentEL.value = (monthly * calculatedPayments).toFixed(2);
    totalInteresEL.value = (monthly * calculatedPayments - principle).toFixed(2);

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide Spinner
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

// Error function
function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Hide Spinner
  document.getElementById("loading").style.display = "none";

  // create div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add alert class
  errorDiv.classList = "alert alert-danger";

  // Create Text node and append to div
  errorDiv.appendChild(document.createTextNode(error)); // "Error is what we inserted above"

  // Insert error above heading

  card.insertBefore(errorDiv, heading); // *New - Call it on a parent and pass what you want to insert, and that you want to insert it before.

  // Clear error after 3 seconds
  setTimeout(clearError, 3000); // sets a timeout. takes in a function and how long in ms
}

// Clear Error
function clearError() {
  document.querySelector(".alert").remove(); // Removes item with .alert class
}
