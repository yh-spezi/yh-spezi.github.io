// https://raw.githubusercontent.com/JannisDev/Connect/main/News.md
// https://github.com/evilstreak/markdown-js

const $ = id => document.getElementById(id);

var url = 'https://raw.githubusercontent.com/JannisDev/Connect/main/News.md';
var storedText;

fetch(url).then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done.call(window, storedText);
    });
});

function done() {
    let x = $("preview");
    console.log(storedText);
    x.innerHTML = markdown.toHTML(storedText.replace(/<br>/g,"\r\n"));
}
