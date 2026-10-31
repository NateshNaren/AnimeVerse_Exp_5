// Ex.5 - JavaScript DOM Elements and Events (AniVerse Hub)

// 1. Find the shortest and longest word in an anime title
function findWords() {
  var str = document.getElementById("text").value.trim();
  if (str == "") {
    alert("Please type an anime title");
    return;
  }

  var words = str.split(/\s+/);
  var shortest = words[0];
  var longest = words[0];

  for (var i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  document.getElementById("shortest").innerHTML = "'" + shortest + "'";
  document.getElementById("longest").innerHTML = "'" + longest + "'";
}

// 2. BMI calculator
function calculate() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  var bmi = weight / (height * height);
  var type;

  if (bmi < 18) {
    type = "Underweight";
  } else if (bmi < 25) {
    type = "Normal";
  } else if (bmi <= 30) {
    type = "Overweight";
  } else {
    type = "Obese";
  }

  document.getElementById("score").innerHTML = bmi.toFixed(1);
  document.getElementById("type").innerHTML = type;

  // highlight the matching row of the BMI chart
  var types = ["Underweight", "Normal", "Overweight", "Obese"];
  for (var i = 0; i < types.length; i++) {
    document.getElementById("row-" + types[i]).className = "";
  }
  document.getElementById("row-" + type).className = "active-row";
}

// 3. Chibi fruit farm - random apple or orange for every plot
function grow() {
  var rows = parseInt(document.getElementById("rows").value);
  var cols = parseInt(document.getElementById("columns").value);

  if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
    alert("Please enter the number of rows and columns");
    return;
  }
  if (rows > 20 || cols > 20) {
    alert("Please use 20 rows and 20 columns at most");
    return;
  }

  var fruits = ["orange.jpg", "apple.jpg"];
  var html = "";
  var apples = 0;
  var oranges = 0;

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var number = Math.floor(Math.random() * 2);
      if (number == 1) {
        apples++;
      } else {
        oranges++;
      }
      html += "<img src='" + fruits[number] + "' alt='fruit'>";
    }
    html += "<br>";
  }

  document.getElementById("garden").innerHTML = html;
  document.getElementById("tally").innerHTML =
    "Harvest: " + apples + " apples and " + oranges + " oranges";
}

// 4. Currency converter
function convert() {
  var amount = parseFloat(document.getElementById("data").value);
  if (isNaN(amount) || amount < 0) {
    alert("Please enter a valid amount");
    return;
  }

  var fromIndex = document.getElementById("from").selectedIndex;
  var from = document.getElementById("from")[fromIndex].value;
  var toIndex = document.getElementById("to").selectedIndex;
  var to = document.getElementById("to")[toIndex].value;

  var result;
  if (from == to) {
    result = amount;
  } else if (from == "Indian Rupee") {
    result = amount * 0.015;
  } else {
    result = amount * 67.12;
  }

  var symbol = (to == "US Dollar") ? "$" : "Rs.";
  var unit = (to == "US Dollar") ? " USD" : " INR";
  document.getElementById("answer").innerHTML = symbol + result.toFixed(2) + unit;
}

// 5. Coin flip - the handler is attached with addEventListener
document.getElementById("flip").addEventListener("click", flipFunction);

function flipFunction() {
  var coin = document.getElementById("coin");
  var heads = document.getElementById("num_heads");
  var tails = document.getElementById("num_tails");

  if (Math.random() < 0.5) {
    coin.src = "heads.jpg";
    heads.innerHTML = parseInt(heads.innerHTML) + 1;
    document.getElementById("verdict").innerHTML = "Heads! The Sun Hero wins.";
  } else {
    coin.src = "tails.jpg";
    tails.innerHTML = parseInt(tails.innerHTML) + 1;
    document.getElementById("verdict").innerHTML = "Tails! The Moon Rival wins.";
  }
}

// 6. Birthday cake order form - the handler is attached with addEventListener
document.getElementById("submit").addEventListener("click", calculateOrder);

function calculateOrder() {
  var small = parseInt(document.getElementById("small").value) || 0;
  var medium = parseInt(document.getElementById("medium").value) || 0;
  var large = parseInt(document.getElementById("large").value) || 0;
  var tip = parseInt(document.querySelector('input[name="tip"]:checked').value);

  if (small < 0 || medium < 0 || large < 0 || small + medium + large == 0) {
    alert("Please enter the number of cakes");
    return;
  }

  var cost = small * 100 + medium * 200 + large * 400;
  var tax = cost * 0.09;
  var tipAmount = (cost + tax) * tip / 100;
  var total = cost + tax + tipAmount;

  document.getElementById("price").innerHTML = "Rs." + total.toFixed(2);
  document.getElementById("details").innerHTML =
    "Cakes: Rs." + cost.toFixed(2) + " + Tax: Rs." + tax.toFixed(2) +
    " + Tip (" + tip + "%): Rs." + tipAmount.toFixed(2);
}
