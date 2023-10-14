// Get today's date
const today = new Date();

// Add 42 days to today's date
today.setDate(today.getDate() + 42);

// Format the date as "DD/MM/YYYY"
const day = today.getDate();
const month = today.getMonth() + 1; // Months are zero-based
const year = today.getFullYear();

// Display the current date and expiration date on the webpage
document.getElementById("currentDate").textContent = formatDate(new Date());
document.getElementById("expirationDate").textContent = formatDate(today);

// Function to format a date as "DD/MM/YYYY"
function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
