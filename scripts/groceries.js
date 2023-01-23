	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
				{
					name: "Brocoli (1.00lb)",
					vegetarian: true,
					glutenFree: true,
					organic: false,
					price: 1.99
				},
				{
					name: "Bread (0.50lb)",
					vegetarian: true,
					glutenFree: false,
					organic: false,
					price: 2.35
				},
				{
					name: "Salmon Filet (1.00lb)",
					vegetarian: false,
					glutenFree: true,
					organic: true,
					price: 10.13
				},
				{
					name: "NY Strip Steak (1.00lb)",
					vegetarian: false,
					glutenFree: true,
					organic: true,
					price: 22.30
				},
				{
					name: "Chicken Breast (1.00lb)",
					vegetarian: false,
					glutenFree: true,
					organic: true,
					price: 16.73
				},
				{
					name: "Artichokes (0.75lb)",
					vegetarian: true,
					glutenFree: true,
					organic: true,
					price: 4.23
				},
				{
					name: "Chocolate Cake (2.36lb)",
					vegetarian: true,
					glutenFree: false,
					organic: false,
					price: 32.43
				},
				{
					name: "Turkey Breast (1.00lb)",
					vegetarian: false,
					glutenFree: true,
					organic: false,
					price: 14.73
				},
				{
					name: "Rigatoni (1.13lb)",
					vegetarian: true,
					glutenFree: false,
					organic: false,
					price: 4.23
				},
				{
					name: "Oreo Cookies (0.40lb)",
					vegetarian: true,
					glutenFree: false,
					organic: false,
					price: 6.67
				}
		];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
