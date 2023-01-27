let cardNumber = "8600123456789101"
console.log(cardNumber.slice(0, 4) + " **** **** " + cardNumber.slice(12, 16))

function checkCardNumber(card){
    if(card.length == 16 && !Number.isNaN(+card)){
        if(+card == +cardNumber){
            console.log("It is right")
        }else{
            console.log("It is wrong. Try again")
        }
    }else{
        console.log("Error")
    }
}
checkCardNumber(cardNumber)

function checkCardtypeof(card){
    if(card.length == 16 && !Number.isNaN(+card)){
        if(card.slice(0, 4) == "8600"){
            console.log("This is UzCard")
        }else if(card.slice(0, 4) == "9860"){
            console.log("This is Humo")
        }
    }else{
        console.log("Error")
    }   
}
checkCardtypeof(cardNumber)
