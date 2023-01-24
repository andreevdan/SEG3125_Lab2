var products = [
	{
		name: "Brocoli",
		vegetarian: true,
        organic: false,
        img: "images/broccoli.jpg",
		glutenFree: true,
		price: 1.99
	},
	{
		name: "Cucumber",
		vegetarian: true,
        img: "images/Cucumber.jpg",
		glutenFree: true,
        organic: false,
		price: 2.35
	},
	{
		name: "Gluten-free Bread",
		vegetarian: true,
        organic: true,
        img: "images/gluten-free-bread.png",
		glutenFree: true,
		price: 2.44
	},
	{
		name: "Organic Bananas",
		vegetarian: true,
		glutenFree: true,
        img: "images/organic-bananas.jpg",
        organic: true,
		price: 3.35
	},
	{
		name: "Bologna",
		vegetarian: false,
        organic: false,
        img: "images/bologna.jpg",
		glutenFree: false,
		price: 5.13
	},
	{
		name: "Organic Apples",
		vegetarian: true,
        organic: true,
        img: "images/organic-apple.jpg",
		glutenFree: true,
		price: 6.50
	},
    {
		name: "Bacon",
		vegetarian: false,
        organic: true,
        img: "images/bacon.png",
		glutenFree: true,
		price: 6.99
	},
	{
		name: "Organic Grapes",
		vegetarian: true,
		glutenFree: true,
        img: "images/organic-grapes.jpg",
        organic: true,
		price: 8.85
	},
	{
		name: "Gluten-free Brownies",
		vegetarian: true,
        img: "images/gluten-free-brownies.jpg",
		glutenFree: true,
        organic: false,
		price: 9.88
	},
    {
		name: "Hot Dogs",
		vegetarian: false,
        organic: false,
        img: "images/hotdogs.png",
		glutenFree: true,
		price: 10.00
	}
];


function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		var restrict = false;
		if ((restriction == "Vegetarian") 	&& (prods[i].vegetarian == false) 	&& restrict == false) restrict = true;
		if ((restriction == "GlutenFree") 	&& (prods[i].glutenFree == false) 	&& restrict == false) restrict = true;
		if ((restriction == "Organic") 		&& (prods[i].organic == false) 		&& restrict == false) restrict = true;
		if (restrict == false){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}


function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    var optionArray = restrictListProducts(products, s1.value);

    for (i = 0; i < optionArray.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = optionArray[i].name;
        s2.appendChild(checkbox);
        var label = document.createElement('label');
        var labelPrice = document.createElement('label')
        label.htmlFor = optionArray[i].name;
        label.htmlFor = optionArray[i].price;
		label.appendChild(document.createTextNode(optionArray[i].name));
        labelPrice.appendChild(document.createTextNode(optionArray[i].price));
        s2.appendChild(label);
        s2.appendChild(document.createElement("br"));
        s2.appendChild(labelPrice);
        s2.appendChild(document.createElement("br"));
        var image = document.createElement('img');
        image.src = optionArray[i].img;
		
        image.setAttribute('width', '100px');
        image.setAttribute('height', '100px');
        label.appendChild(image);
        label.classList.add("img-left");
    }

}


function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}