// binary, octal, hexadecimal list until 255


var text = "<ol start='0'>";
for (var i = 0; i <= 255; i++) {
  text += "<li>" + i.toString(2) + "</li>";
}
text += "</ol>";
document.getElementById("bin").innerHTML = text;


var text2 = "<ol start='0'>";
for (var j = 0; j <= 255; j++) {
  text2 += "<li>" + j.toString(8) + "</li>";
}
text2 += "</ol>";
document.getElementById("oct").innerHTML = text2;


var text3 = "<ol start='0'>";
for (var k = 0; k <= 255; k++) {
  text3 += "<li>" + k.toString(16) + "</li>";
}
text3 += "</ol>";
document.getElementById("hex").innerHTML = text3;
