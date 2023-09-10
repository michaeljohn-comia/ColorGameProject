var parent = document.querySelector(".parent");
var modal = document.querySelector(".modal");
var puhunan = document.querySelector("#puhunan");

var balanceContainer = document.querySelector(".wrapper-balance")
var betContainer = document.querySelector(".wrapper-bet")

var balanceElement = document.createElement("p")
balanceElement.classList.add("current-money")

var betElement = document.createElement("p")
betElement.classList.add("current-bet")

document.querySelector("#confirm-btn").addEventListener("click", function () {
    var money = puhunan.value;

    if (money <= 99) {
        alert("You need atleast 100 balance to play this Game");
    } else {
        parent.style.display = "flex";
        modal.style.display = "none";

        balanceContainer.appendChild(balanceElement);
        betContainer.appendChild(betElement);
        document.querySelector(".current-bet").innerHTML = "0";
        balanceElement.innerHTML = money.toString();

    }
})

var getResult = document.querySelector("#resultBtn");
var currentMoney = document.querySelector(".current-money");
var currentBet = document.querySelector(".current-bet");


// RANDOM COLOR GENERATOR
var result1 = document.querySelector("#dice1");
var result2 = document.querySelector("#dice2");


// BUTTONS NG BAWAT KULAY SA MODAL

// red modal
var red = document.querySelector("#red");
var redModal = document.querySelector(".modal-pusta-red");

// kinuha yung button
var btn5red = document.querySelector("#red-amount-5")
var btn25red = document.querySelector("#red-amount-25")
var btn50red = document.querySelector("#red-amount-50")
var btn75red = document.querySelector("#red-amount-75")
var btn100red = document.querySelector("#red-amount-100")
var customAmountRed = document.querySelector("#amount-custom-red")
var redConfirmBet = document.querySelector("#confirm-btn-red");

var betOnRed = document.querySelector(".betonred")

betOnRed.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");

    if (currentMoney.innerHTML <= 0) {
        !alert("Bankrupt!! Go deposit some credits again . . . . .");
        window.location.reload();
    } else {
        redModal.style.display = "flex";
    }

})
var redValue = document.querySelector(".redValue");

btn5red.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var redValue = document.querySelector(".redValue");

    if (5 > currentMoney.innerHTML) {
        redModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {

        var money = currentMoney.innerHTML - 5;
        currentMoney.innerHTML = money.toString();

        var redBet = Number(redValue.innerHTML) + 5;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 5;
        redValue.innerHTML = redBet.toString();
        redModal.style.display = "none";
    }
})
btn25red.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var redValue = document.querySelector(".redValue");

    if (25 > currentMoney.innerHTML) {
        redModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 25;
        currentMoney.innerHTML = money.toString();

        var redBet = Number(redValue.innerHTML) + 25;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 25;
        redValue.innerHTML = redBet.toString();
        redModal.style.display = "none";
    }
})
btn50red.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var redValue = document.querySelector(".redValue");

    if (50 > currentMoney.innerHTML) {
        redModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 50;
        currentMoney.innerHTML = money.toString();

        var redBet = Number(redValue.innerHTML) + 50;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 50;
        redValue.innerHTML = redBet.toString();
        redModal.style.display = "none";
    }
})
btn75red.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var redValue = document.querySelector(".redValue");

    if (75 > currentMoney.innerHTML) {
        redModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 75;
        currentMoney.innerHTML = money.toString();

        var redBet = Number(redValue.innerHTML) + 75;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 75;
        redValue.innerHTML = redBet.toString();
        redModal.style.display = "none";
    }
})
btn100red.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var redValue = document.querySelector(".redValue");

    if (100 > currentMoney.innerHTML) {
        redModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 100;
        currentMoney.innerHTML = money.toString();

        var redBet = Number(redValue.innerHTML) + 100;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 100;
        redValue.innerHTML = redBet.toString();
        redModal.style.display = "none";
    }
})
redConfirmBet.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var redValue = document.querySelector(".redValue");
    var redCustom = customAmountRed.value;

    if ((currentMoney.innerHTML - redCustom) < 0) {
        redModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - redCustom;
        currentMoney.innerHTML = money.toString();

        var redBet = Number(redValue.innerHTML) + Number(redCustom);
        currentBet.innerHTML = Number(currentBet.innerHTML) + Number(redCustom);

        redModal.style.display = "none";
        customAmountRed.value = null;
        redValue.innerHTML = redBet.toString();
    }
})

//BLUE
var blue = document.querySelector("#blue");
var blueModal = document.querySelector(".modal-pusta-blue");
// kinuha yung button
var btn5blue = document.querySelector("#blue-amount-5")
var btn25blue = document.querySelector("#blue-amount-25")
var btn50blue = document.querySelector("#blue-amount-50")
var btn75blue = document.querySelector("#blue-amount-75")
var btn100blue = document.querySelector("#blue-amount-100")
var customAmountBlue = document.querySelector("#amount-custom-blue")
var blueConfirmBet = document.querySelector("#confirm-btn-blue");

var betOnBlue = document.querySelector(".betonblue")

betOnBlue.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");

    if (currentMoney.innerHTML <= 0) {
        !alert("Bankrupt!! Go deposit some credits again . . . . .");
        window.location.reload();
    } else {
        blueModal.style.display = "flex";
    }
})
var blueValue = document.querySelector(".blueValue");

btn5blue.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");

    if (5 > currentMoney.innerHTML) {
        blueModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 5;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + 5;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 5;
        blueValue.innerHTML = blueBet.toString();
        blueModal.style.display = "none";
    }
})
btn25blue.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");

    if (25 > currentMoney.innerHTML) {
        blueModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 25;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + 25;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 25;
        blueValue.innerHTML = blueBet.toString();
        blueModal.style.display = "none";
    }
})
btn50blue.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");

    if (50 > currentMoney.innerHTML) {
        blueModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 50;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + 50;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 50;
        blueValue.innerHTML = blueBet.toString();
        blueModal.style.display = "none";
    }
})
btn75blue.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");

    if (75 > currentMoney.innerHTML) {
        blueModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 75;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + 75;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 75;
        blueValue.innerHTML = blueBet.toString();
        blueModal.style.display = "none";
    }
})
btn100blue.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");

    if (100 > currentMoney.innerHTML) {
        blueModal.style.display = "none";
        alert("Insufficient Funds!");
    } else {
        var money = currentMoney.innerHTML - 100;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + 100;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 100;
        blueValue.innerHTML = blueBet.toString();
        blueModal.style.display = "none";
    }
})
blueConfirmBet.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");
    var blueCustom = customAmountBlue.value;

    if ((currentMoney.innerHTML - blueCustom) < 0) {
        blueModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {

        var money = currentMoney.innerHTML - blueCustom;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + Number(blueCustom);
        currentBet.innerHTML = Number(currentBet.innerHTML) + Number(blueCustom);;

        blueModal.style.display = "none";
        customAmountBlue.value = null;
        blueValue.innerHTML = blueBet.toString();
    }
})

// YELLOW
var yellow = document.querySelector("#yellow");
var yellowModal = document.querySelector(".modal-pusta-yellow");
// kinuha yung button
var btn5yellow = document.querySelector("#yellow-amount-5")
var btn25yellow = document.querySelector("#yellow-amount-25")
var btn50yellow = document.querySelector("#yellow-amount-50")
var btn75yellow = document.querySelector("#yellow-amount-75")
var btn100yellow = document.querySelector("#yellow-amount-100")
var customAmountYellow = document.querySelector("#amount-custom-yellow")
var yellowConfirmBet = document.querySelector("#confirm-btn-yellow");

var betOnYellow = document.querySelector(".betonyellow")

betOnYellow.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");

    if (currentMoney.innerHTML <= 0) {
        !alert("Bankrupt!! Go deposit some credits again . . . . .");
        window.location.reload();
    } else {
        yellowModal.style.display = "flex";
    }
})
var yellowValue = document.querySelector(".yellowValue");

btn5yellow.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var blueValue = document.querySelector(".blueValue");

    if (5 > currentMoney.innerHTML) {
        yellowModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 5;
        currentMoney.innerHTML = money.toString();

        var blueBet = Number(blueValue.innerHTML) + 5;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 5;
        blueValue.innerHTML = blueBet.toString();
        blueModal.style.display = "none";
    }
})
btn25yellow.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var yellowValue = document.querySelector(".yellowValue");

    if (25 > currentMoney.innerHTML) {
        yellowModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 25;
        currentMoney.innerHTML = money.toString();

        var yellowBet = Number(yellowValue.innerHTML) + 25;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 25;
        yellowValue.innerHTML = yellowBet.toString();
        yellowModal.style.display = "none";
    }
})
btn50yellow.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var yellowValue = document.querySelector(".yellowValue");

    if (50 > currentMoney.innerHTML) {
        yellowModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 50;
        currentMoney.innerHTML = money.toString();

        var yellowBet = Number(yellowValue.innerHTML) + 50;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 50;
        yellowValue.innerHTML = yellowBet.toString();
        yellowModal.style.display = "none";
    }
})
btn75yellow.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var yellowValue = document.querySelector(".yellowValue");

    if (75 > currentMoney.innerHTML) {
        yellowModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 75;
        currentMoney.innerHTML = money.toString();

        var yellowBet = Number(yellowValue.innerHTML) + 75;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 75;
        yellowValue.innerHTML = yellowBet.toString();
        yellowModal.style.display = "none";
    }
})
btn100yellow.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var yellowValue = document.querySelector(".yellowValue");

    if (100 > currentMoney.innerHTML) {
        yellowModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 100;
        currentMoney.innerHTML = money.toString();

        var yellowBet = Number(yellowValue.innerHTML) + 100;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 100;
        yellowValue.innerHTML = yellowBet.toString();
        yellowModal.style.display = "none";
    }
})
yellowConfirmBet.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var yellowValue = document.querySelector(".yellowValue");
    var yellowCustom = customAmountYellow.value;

    if ((currentMoney.innerHTML - yellowCustom) < 0) {
        yellowModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - yellowCustom;
        currentMoney.innerHTML = money.toString();

        var yellowBet = Number(yellowValue.innerHTML) + Number(yellowCustom);
        currentBet.innerHTML = Number(currentBet.innerHTML) + Number(yellowCustom);;

        yellowModal.style.display = "none";
        customAmountYellow.value = null;
        yellowValue.innerHTML = yellowBet.toString();
    }
})
// WHITE
var white = document.querySelector("#white");
var whiteModal = document.querySelector(".modal-pusta-white");


// kinuha yung button
var btn5white = document.querySelector("#white-amount-5")
var btn25white = document.querySelector("#white-amount-25")
var btn50white = document.querySelector("#white-amount-50")
var btn75white = document.querySelector("#white-amount-75")
var btn100white = document.querySelector("#white-amount-100")
var customAmountWhite = document.querySelector("#amount-custom-white")
var whiteConfirmBet = document.querySelector("#confirm-btn-white");

var betOnWhite = document.querySelector(".betonwhite")

betOnWhite.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");

    if (currentMoney.innerHTML <= 0) {
        !alert("Bankrupt!! Go deposit some credits again . . . . .");
        window.location.reload();
    } else {
        whiteModal.style.display = "flex";
    }
})
var whiteValue = document.querySelector(".whiteValue");

btn5white.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var whiteValue = document.querySelector(".whiteValue");

    if (5 > currentMoney.innerHTML) {
        whiteModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 5;
        currentMoney.innerHTML = money.toString();

        var whiteBet = Number(whiteValue.innerHTML) + 5;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 5;
        whiteValue.innerHTML = whiteBet.toString();
        whiteModal.style.display = "none";
    }
})
btn25white.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var whiteValue = document.querySelector(".whiteValue");

    if (25 > currentMoney.innerHTML) {
        whiteModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 25;
        currentMoney.innerHTML = money.toString();

        var whiteBet = Number(whiteValue.innerHTML) + 25;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 25;
        whiteValue.innerHTML = whiteBet.toString();
        whiteModal.style.display = "none";
    }
})
btn50white.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var whiteValue = document.querySelector(".whiteValue");

    if (50 > currentMoney.innerHTML) {
        whiteModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 50;
        currentMoney.innerHTML = money.toString();

        var whiteBet = Number(whiteValue.innerHTML) + 50;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 50;
        whiteValue.innerHTML = whiteBet.toString();
        whiteModal.style.display = "none";
    }
})
btn75white.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var whiteValue = document.querySelector(".whiteValue");

    if (75 > currentMoney.innerHTML) {
        whiteModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 75;
        currentMoney.innerHTML = money.toString();

        var whiteBet = Number(whiteValue.innerHTML) + 75;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 75;
        whiteValue.innerHTML = whiteBet.toString();
        whiteModal.style.display = "none";
    }
})
btn100white.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var whiteValue = document.querySelector(".whiteValue");

    if (100 > currentMoney.innerHTML) {
        whiteModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 100;
        currentMoney.innerHTML = money.toString();

        var whiteBet = Number(whiteValue.innerHTML) + 100;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 100;
        whiteValue.innerHTML = whiteBet.toString();
        whiteModal.style.display = "none";
    }
})
whiteConfirmBet.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var whiteValue = document.querySelector(".whiteValue");
    var whiteCustom = customAmountWhite.value;

    if ((currentMoney.innerHTML - whiteCustom) < 0) {
        whiteModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - whiteCustom;
        currentMoney.innerHTML = money.toString();

        var whiteBet = Number(whiteValue.innerHTML) + Number(whiteCustom);
        currentBet.innerHTML = Number(currentBet.innerHTML) + Number(whiteCustom);

        whiteModal.style.display = "none";
        customAmountWhite.value = null;
        whiteValue.innerHTML = whiteBet.toString();
    }
})

// green modal
var green = document.querySelector("#green");
var greenModal = document.querySelector(".modal-pusta-green");


// kinuha yung button
var btn5green = document.querySelector("#green-amount-5")
var btn25green = document.querySelector("#green-amount-25")
var btn50green = document.querySelector("#green-amount-50")
var btn75green = document.querySelector("#green-amount-75")
var btn100green = document.querySelector("#green-amount-100")
var customAmountGreen = document.querySelector("#amount-custom-green")
var greenConfirmBet = document.querySelector("#confirm-btn-green");

var betOnGreen = document.querySelector(".betongreen")

betOnGreen.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");

    if (currentMoney.innerHTML <= 0) {
        !alert("Bankrupt!! Go deposit some credits again . . . . .");
        window.location.reload();
    } else {
        greenModal.style.display = "flex";
    }
})
var greenValue = document.querySelector(".greenValue");

btn5green.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var greenValue = document.querySelector(".greenValue");

    if (5 > currentMoney.innerHTML) {
        greenModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 5;
        currentMoney.innerHTML = money.toString();

        var greenBet = Number(greenValue.innerHTML) + 5;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 5;
        greenValue.innerHTML = greenBet.toString();
        greenModal.style.display = "none";
    }
})
btn25green.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var greenValue = document.querySelector(".greenValue");

    if (25 > currentMoney.innerHTML) {
        greenModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 25;
        currentMoney.innerHTML = money.toString();

        var greenBet = Number(greenValue.innerHTML) + 25;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 25;
        greenValue.innerHTML = greenBet.toString();
        greenModal.style.display = "none";
    }
})
btn50green.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var greenValue = document.querySelector(".greenValue");

    if (50 > currentMoney.innerHTML) {
        greenModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 50;
        currentMoney.innerHTML = money.toString();

        var greenBet = Number(greenValue.innerHTML) + 50;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 50;
        greenValue.innerHTML = greenBet.toString();
        greenModal.style.display = "none";
    }
})
btn75green.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var greenValue = document.querySelector(".greenValue");

    if (75 > currentMoney.innerHTML) {
        greenModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 75;
        currentMoney.innerHTML = money.toString();

        var greenBet = Number(greenValue.innerHTML) + 75;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 75;
        greenValue.innerHTML = greenBet.toString();
        greenModal.style.display = "none";
    }
})
btn100green.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var greenValue = document.querySelector(".greenValue");

    if (100 > currentMoney.innerHTML) {
        greenModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 100;
        currentMoney.innerHTML = money.toString();

        var greenBet = Number(greenValue.innerHTML) + 100;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 100;
        greenValue.innerHTML = greenBet.toString();
        greenModal.style.display = "none";
    }
})
greenConfirmBet.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var greenValue = document.querySelector(".greenValue");
    var greenCustom = customAmountGreen.value;

    if ((currentMoney.innerHTML - greenCustom) < 0) {
        greenModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - greenCustom;
        currentMoney.innerHTML = money.toString();

        var greenBet = Number(greenValue.innerHTML) + Number(greenCustom);
        currentBet.innerHTML = Number(currentBet.innerHTML) + Number(greenCustom);

        greenModal.style.display = "none";
        customAmountGreen.value = null;
        greenValue.innerHTML = greenBet.toString();
    }
})

// pink modal
var pink = document.querySelector("#pink");
var pinkModal = document.querySelector(".modal-pusta-pink");


// kinuha yung button
var btn5pink = document.querySelector("#pink-amount-5")
var btn25pink = document.querySelector("#pink-amount-25")
var btn50pink = document.querySelector("#pink-amount-50")
var btn75pink = document.querySelector("#pink-amount-75")
var btn100pink = document.querySelector("#pink-amount-100")
var customAmountPink = document.querySelector("#amount-custom-pink")
var pinkConfirmBet = document.querySelector("#confirm-btn-pink");

var betOnPink = document.querySelector(".betonpink")

betOnPink.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");

    if (currentMoney.innerHTML <= 0) {
        !alert("Bankrupt!! Go deposit some credits again . . . . .");
        window.location.reload();
    } else {
        pinkModal.style.display = "flex";
    }
})
var pinkValue = document.querySelector(".pinkValue");

btn5pink.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var pinkValue = document.querySelector(".pinkValue");

    if (5 > currentMoney.innerHTML) {
        pinkModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 5;
        currentMoney.innerHTML = money.toString();

        var pinkBet = Number(pinkValue.innerHTML) + 5;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 5;
        pinkValue.innerHTML = pinkBet.toString();
        pinkModal.style.display = "none";
    }
})
btn25pink.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var pinkValue = document.querySelector(".pinkValue");

    if (25 > currentMoney.innerHTML) {
        pinkModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 25;
        currentMoney.innerHTML = money.toString();

        var pinkBet = Number(pinkValue.innerHTML) + 25;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 25;
        pinkValue.innerHTML = pinkBet.toString();
        pinkModal.style.display = "none";
    }
})
btn50pink.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var pinkValue = document.querySelector(".pinkValue");

    if (50 > currentMoney.innerHTML) {
        pinkModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 50;
        currentMoney.innerHTML = money.toString();

        var pinkBet = Number(pinkValue.innerHTML) + 50;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 50;
        pinkValue.innerHTML = pinkBet.toString();
        pinkModal.style.display = "none";
    }
})
btn75pink.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var pinkValue = document.querySelector(".pinkValue");

    if (75 > currentMoney.innerHTML) {
        pinkModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 75;
        currentMoney.innerHTML = money.toString();

        var pinkBet = Number(pinkValue.innerHTML) + 75;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 75;
        pinkValue.innerHTML = pinkBet.toString();
        pinkModal.style.display = "none";
    }
})
btn100pink.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var pinkValue = document.querySelector(".pinkValue");

    if (100 > currentMoney.innerHTML) {
        pinkModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - 100;
        currentMoney.innerHTML = money.toString();

        var pinkBet = Number(pinkValue.innerHTML) + 100;
        currentBet.innerHTML = Number(currentBet.innerHTML) + 100;
        pinkValue.innerHTML = pinkBet.toString();
        pinkModal.style.display = "none";
    }
})
pinkConfirmBet.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");
    var pinkValue = document.querySelector(".pinkValue");
    var pinkCustom = customAmountPink.value;

    if ((currentMoney.innerHTML - pinkCustom) < 0) {
        pinkModal.style.display = "none";
        alert("Insufficient Funds!")
    } else {
        var money = currentMoney.innerHTML - pinkCustom;
        currentMoney.innerHTML = money.toString();

        var pinkBet = Number(pinkValue.innerHTML) + Number(pinkCustom);
        currentBet.innerHTML = Number(currentBet.innerHTML) + Number(pinkCustom);

        pinkModal.style.display = "none";
        customAmountPink.value = null;
        pinkValue.innerHTML = pinkBet.toString();
    }
})
// RESULT SECTION

// RESULT GENERATOR
getResult.addEventListener("click", function () {
    var currentMoney = document.querySelector(".current-money");
    var currentBet = document.querySelector(".current-bet");

    var redValue = document.querySelector(".redValue");
    var blueValue = document.querySelector(".blueValue");

    var colorSet = ["red", "blue", "yellow", "pink", "green", "white"];
    var randomColor1 = Math.floor(Math.random() * 5);
    var randomColor2 = Math.floor(Math.random() * 5);

    var randomResult1 = colorSet[randomColor1];
    var randomResult2 = colorSet[randomColor2];

    result1.style.backgroundColor = randomResult1;
    result2.style.backgroundColor = randomResult2;

    //red result
    if (randomResult1 == "red" && randomResult2 == "red") {
        var winresultRed = Number(currentMoney.innerHTML) + (redValue.innerHTML * 3);
        currentMoney.innerHTML = winresultRed;
        redValue.innerHTML = "0";
        currentBet.innerHTML = "0";

    } else if (randomResult1 == "red") {
        var winresultRed = Number(currentMoney.innerHTML) + (redValue.innerHTML * 2);
        currentMoney.innerHTML = winresultRed;
        redValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult2 == "red") {
        var winresultRed = Number(currentMoney.innerHTML) + (redValue.innerHTML * 2);
        currentMoney.innerHTML = winresultRed;
        redValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else {
        redValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    }

    //blue result
    if (randomResult1 == "blue" && randomResult2 == "blue") {
        var winresultBlue = Number(currentMoney.innerHTML) + (blueValue.innerHTML * 3);
        currentMoney.innerHTML = winresultBlue;
        blueValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult1 == "blue") {
        var winresultBlue = Number(currentMoney.innerHTML) + (blueValue.innerHTML * 2);
        currentMoney.innerHTML = winresultBlue;
        blueValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult2 == "blue") {
        var winresultBlue = Number(currentMoney.innerHTML) + (blueValue.innerHTML * 2);
        currentMoney.innerHTML = winresultBlue;
        blueValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else {
        blueValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    }

    // yellow result
    if (randomResult1 == "yellow" && randomResult2 == "yellow") {
        var winresultYellow = Number(currentMoney.innerHTML) + (yellowValue.innerHTML * 3);
        currentMoney.innerHTML = winresultYellow;
        yellowValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult1 == "yellow") {
        var winresultYellow = Number(currentMoney.innerHTML) + (yellowValue.innerHTML * 2);
        currentMoney.innerHTML = winresultYellow;
        yellowValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult2 == "yellow") {
        var winresultYellow = Number(currentMoney.innerHTML) + (yellowValue.innerHTML * 2);
        currentMoney.innerHTML = winresultYellow;
        yellowValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else {
        yellowValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    }

    // white result
    if (randomResult1 == "white" && randomResult2 == "white") {
        var winresultWhite = Number(currentMoney.innerHTML) + (whiteValue.innerHTML * 3);
        currentMoney.innerHTML = winresultWhite;
        whiteValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult1 == "white") {
        var winresultWhite = Number(currentMoney.innerHTML) + (whiteValue.innerHTML * 2);
        currentMoney.innerHTML = winresultWhite;
        whiteValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult2 == "white") {
        var winresultWhite = Number(currentMoney.innerHTML) + (whiteValue.innerHTML * 2);
        currentMoney.innerHTML = winresultWhite;
        whiteValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else {
        whiteValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    }

    // green result
    if (randomResult1 == "green" && randomResult2 == "green") {
        var winresultGreen = Number(currentMoney.innerHTML) + (greenValue.innerHTML * 3);
        currentMoney.innerHTML = winresultGreen;
        greenValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult1 == "green") {
        var winresultGreen = Number(currentMoney.innerHTML) + (greenValue.innerHTML * 2);
        currentMoney.innerHTML = winresultGreen;
        greenValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult2 == "green") {
        var winresultGreen = Number(currentMoney.innerHTML) + (greenValue.innerHTML * 2);
        currentMoney.innerHTML = winresultGreen;
        greenValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else {
        greenValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    }

    // pink result
    if (randomResult1 == "pink" && randomResult2 == "pink") {
        var winresultPink = Number(currentMoney.innerHTML) + (pinkValue.innerHTML * 3);
        currentMoney.innerHTML = winresultPink;
        pinkValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult1 == "pink") {
        var winresultPink = Number(currentMoney.innerHTML) + (pinkValue.innerHTML * 2);
        currentMoney.innerHTML = winresultPink;
        pinkValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else if (randomResult2 == "pink") {
        var winresultPink = Number(currentMoney.innerHTML) + (pinkValue.innerHTML * 2);
        currentMoney.innerHTML = winresultPink;
        pinkValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    } else {
        pinkValue.innerHTML = "0";
        currentBet.innerHTML = "0";
    }
})