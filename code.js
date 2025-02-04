var n;
var textColor;
var emColor;

function start() {
  n = document.getElementById("sonnetNumber").value - 1;
  document.getElementById("sonnet").innerHTML = sonnets[n];
  buttons();
}

function buttons() {

  textColor = getComputedStyle(document.getElementById("wordList")).getPropertyValue("--text");
  emColor = getComputedStyle(document.getElementById("emEx")).getPropertyValue("--em");

  // create a button for each possible avion of the chosen sonnet
  var buttons = [];
  var len = (words[n]).length;
  for(let i = 0; i < len; i++) {
    var w = words[n][i];
    buttons.push(
      "<tr><td><button id = " + i + " onclick='show(" + i + ")'>" + w + "</button></td></tr>"
    )
  };
  buttons = "<div class='scroll'><table>" + buttons.join("") + "</table><div>"
  document.getElementById("wordList").innerHTML = buttons;
  document.getElementById("wordCount").innerHTML = "(" + len + ")";
  show(0);
}

function show(i) {
  // color selected button
  for( b of [...document.getElementsByTagName("button")] ){
    b.style = "color: " + textColor + "; font-weight: normal"
  };
  document.getElementById(i + "").style = "color: " + emColor + "; font-weight: bold";

  // color avion letters in sonnet text
  sonnet = sonnets[n].split("");
  for (j of indexes[n][i]) {
    sonnet[j] = "<em>" + (sonnet[j]).toUpperCase() + "</em>";
  };
  document.getElementById("sonnet").innerHTML = sonnet.join("");
}
