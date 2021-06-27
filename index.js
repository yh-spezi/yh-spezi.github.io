// https://raw.githubusercontent.com/JannisDev/Connect/main/News.md
// https://github.com/evilstreak/markdown-js

const $ = id => document.getElementById(id);

var urla = 'https://raw.githubusercontent.com/JannisDev/Connect/main/News.md';



function done(text, id) {
    console.log(text);
    $(id).innerHTML = markdown.toHTML(text.replace(/<br>/g,"\r\n"));
}

const fillPreview = (previewId, url) => {
  fetch(url).then(function(response) {
    response.text().then(function(text) {
      done.call(window, text, previewId);
    });
  });
}

fillPreview("preview", 'https://raw.githubusercontent.com/JannisDev/Connect/main/News.md');
fillPreview("preview-features", "https://raw.githubusercontent.com/JannisDev/Connect/main/Features.md");