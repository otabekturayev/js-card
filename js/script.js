let cardNumber = "8600123456789101"
console.log(cardNumber.slice(0, 4) + " ******** " + cardNumber.slice(12, 16))

function checkCardNumber(card){
    if(card == cardNumber){
        console.log("It is right")
    }else{
        console.log("It is wrong. Try again")
    }
}

function checkCardtypeof(card){
    if(card.slice(0, 4) == "8600"){
        console.log("This is UzCard")
    }else if(card.slice(0, 4) == "9860"){
        console.log("This is Humo")
    }
}
checkCardtypeof("9860123456789101")
checkCardNumber("8600123456789101")