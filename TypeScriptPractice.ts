
//1)TALLEST MOUNTAIN
interface Mountain
{
    name : string;
    height : number;
}

let kilimanjaro : Mountain = {name: "Kilimanjaro", height: 19341};
let everest : Mountain = {name: "Everest", height: 29029};
let denali : Mountain = {name: "Denali", height: 20310};

let mountains : Mountain[] = [kilimanjaro, everest, denali];

function findNameOfTallestMountain(mountains : Mountain[]) : string
{
    let tallestName : string = "";
    let tallestNum :  number = 0;

    for (let i : number = 0; i < mountains.length; i++) 
    {   
        if (mountains[i].height > tallestNum === true) 
        {
                tallestNum = mountains[i].height;
                tallestName = mountains[i].name;
        }
    }    

    return tallestName;
}

let a : string = findNameOfTallestMountain(mountains);

console.log(`Tallest mountain is: ${a}`);


//2) PRODUCTS
interface Product 
{
    name : string;

    price : number;
}

let coffee : Product = {name: "Regular Coffee", price: 1.75};
let ic : Product = {name: "Iced Coffee", price: 3.00};
let cort : Product = {name: "Cortado", price: 3.00};
let latte : Product = {name: "Latte", price: 3.75};
let cm : Product = {name: "Caramel Macchiato", price: 4.25};
let mocha : Product = {name: "Mocha", price: 3.75};
let cb : Product = {name: "Cold Brew", price: 3.75};

let products : Product[] = [coffee, ic, cort, latte, cm, mocha, cb];

function calcAverageProductPrice(products : Product[]) : number
{
    let sum : number = 0;

    for(let i : number = 0; i < products.length; i++) 
    {
        sum += products[i].price;
    }

    return (sum/products.length);
}

let b : number = calcAverageProductPrice(products);

console.log(`Average of all prices is: ${b}`);

//3) INVENTORY
interface InventoryItem 
{
    product : Product;
    quantity : number;
}

let item1 : InventoryItem = {product: coffee, quantity: 5};
let item2 : InventoryItem = {product: ic, quantity: 1};
let item3 : InventoryItem = {product: cort, quantity: 7};
let item4 : InventoryItem = {product: latte, quantity: 4};
let item5 : InventoryItem = {product: cm, quantity: 11};
let item6 : InventoryItem = {product: mocha, quantity: 4};
let item7 : InventoryItem = {product: cb, quantity: 6};

let inventoryList : InventoryItem[] = [item1, item2, item3, item4, item5, item6, item7];

function calcInventoryValue(inventoryList : InventoryItem[]) : number 
{
    let sum : number = 0;

    for(let i : number = 0; i < inventoryList.length; i++)
    {
        let sumItems : number = (inventoryList[i].product.price * inventoryList[i].quantity);
        sum += sumItems;
    }

    return sum;
}

let c : number = calcInventoryValue(inventoryList);

console.log(`Total value of the entire inventory is: ${c}`);