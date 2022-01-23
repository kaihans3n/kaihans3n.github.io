var text = "<ol start='0'>";
for (var i = 0; i <= 255; i++) {
  text += "<li>" + i.toString(2) + "</li>";
}
text += "</ol>";
document.getElementById("bin").innerHTML = text;
