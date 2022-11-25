const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

function getPrices(texBoolean){
    for(i=0; i < dishData.lenght; i ++){
        var finalPrice = ""
        var name = dishData.name
        var price = dishData.price

        if(i === true){
            finalPrice = price * tax
        }
        if else(i === false){
            finalPrice = price
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
        console.log(`Dish: ${name} Price: $${finalPrice}`)
    }

}

function getDiscount(taxBoolean, guests){
    getPrices(taxBoolean)
    try{
        if(guests === number && guests > 0 && guests < 30){
            var discount = 0
            if(guests < 5){
            discount = 5
            }
             if else(guests >= 5){
        discount = 10 
        }
        else{
            console.log('The second argument must be a number between 0 and 30')
        }
        }
        console.log('discount is: $' + discount);
        
       

    }
}