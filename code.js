var n = 0;

function start() {
  n = document.getElementById("sonnetNumber").value - 1;
  document.getElementById("sonnet").innerHTML = sonnets[n];
  buttons();
}

function buttons() {
  // create a button for each possible avion of the chosen sonnet
  var buttons = [];
  for(let i = 0; i < (words[n]).length; i++) {
    var w = words[n][i];
    buttons.push(
      "<tr><td><button id = " + i + " onclick='show(" + i + ")'>" + w + "</button></td></tr>"
    )
  };
  buttons = "<div class='scroll'><table>" + buttons.join("") + "</table><div>"
  document.getElementById("wordList").innerHTML = buttons;
}

function show(i) {
  // color selected button
  for( b of [...document.getElementsByTagName("button")] ){
    b.style.color = "gray"
  };
  document.getElementById(i + "").style.color = "black";

  // color avion letters in sonnet text
  sonnet = sonnets[n].split("");
  for (j of indexes[n][i]) {
    sonnet[j] = "<em>" + (sonnet[j]).toUpperCase() + "</em>";
  };
  document.getElementById("sonnet").innerHTML = sonnet.join("");
}
