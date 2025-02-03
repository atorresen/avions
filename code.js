var n = 0;

function start() {
  n = document.getElementById("sonnetNumber").value - 1;
  document.getElementById("sonnet").innerHTML = sonnets[n];
  document.getElementById("word").innerHTML = "<br>";
  buttons();
}

function buttons() {
  var buttons = [];
  for(let i = 0; i < (words[n]).length; i++) {
    var w = words[n][i];
    buttons.push(
      "<button onclick='show(&quot;" + w + "&quot;," + i + ")'>" + w + "</button>"
    )
  };
  document.getElementById("wordList").innerHTML = buttons;
}

function show(w, i) {
  sonnet = sonnets[n].split("");
  document.getElementById("word").innerHTML = w;
  for (j of indexes[n][i]) {
    sonnet[j] = "<em>" + (sonnet[j]).toUpperCase() + "</em>";
  };
  document.getElementById("sonnet").innerHTML = sonnet.join("");
}
