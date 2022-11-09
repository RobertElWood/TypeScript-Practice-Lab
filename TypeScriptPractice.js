var kilimanjaro = { name: "Kilimanjaro", height: 19341 };
var everest = { name: "Everest", height: 29029 };
var denali = { name: "Denali", height: 20310 };
var mountains = [kilimanjaro, everest, denali];
function findNameOfTallestMountain(mountains) {
    var tallestName = "";
    var tallestNum = 0;
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestNum === true) {
            tallestNum = mountains[i].height;
            tallestName = mountains[i].name;
        }
    }
    return tallestName;
}
var a = findNameOfTallestMountain(mountains);
console.log("Tallest mountain is: ".concat(a));
var coffee = { name: "Regular Coffee", price: 1.75 };
var ic = { name: "Iced Coffee", price: 3.00 };
var cort = { name: "Cortado", price: 3.00 };
var latte = { name: "Latte", price: 3.75 };
var cm = { name: "Caramel Macchiato", price: 4.25 };
var mocha = { name: "Mocha", price: 3.75 };
var cb = { name: "Cold Brew", price: 3.75 };
var products = [coffee, ic, cort, latte, cm, mocha, cb];
function calcAverageProductPrice(products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return (sum / products.length);
}
var b = calcAverageProductPrice(products);
console.log("Average of all prices is: ".concat(b));
var item1 = { product: coffee, quantity: 5 };
var item2 = { product: ic, quantity: 1 };
var item3 = { product: cort, quantity: 7 };
var item4 = { product: latte, quantity: 4 };
var item5 = { product: cm, quantity: 11 };
var item6 = { product: mocha, quantity: 4 };
var item7 = { product: cb, quantity: 6 };
var inventoryList = [item1, item2, item3, item4, item5, item6, item7];
function calcInventoryValue(inventoryList) {
    var sum = 0;
    for (var i = 0; i < inventoryList.length; i++) {
        var sumItems = (inventoryList[i].product.price * inventoryList[i].quantity);
        sum += sumItems;
    }
    return sum;
}
var c = calcInventoryValue(inventoryList);
console.log("Total value of the entire inventory is: ".concat(c));
