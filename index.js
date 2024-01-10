// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "hagrid"

function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = "perhaps hagrid"
}

console.log(leastFavoriteCustomer);