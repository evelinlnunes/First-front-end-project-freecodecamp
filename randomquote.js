window.onload = go;
function go() {
  $("#new-quote").on("click", function () {
    genRandQuote();
    changePageColors();
  });
  $("#tweet-quote").on("click", function () {});
  genRandQuote();
}

function genRandQuote() {
  var quotes = [
    {
      id: 1,
      text: `"I'd rather be hated for who I am, than loved for who I am not."`,
      author: "- Kurt Cobain"
    },
    {
      id: 2,
      text: `"I like to complain and do nothing to make things better."`,
      author: "- Kurt Cobain"
    },
    { id: 3, text: `"I won't eat anything green."`, author: "- Kurt Cobain" },
    {
      id: 4,
      text: `"Why can't anybody see, what's good for you is bad for me?"`,
      author: "- Stone Sour"
    },
    {
      id: 5,
      text: `"It's face to say that ignorance is bliss"`,
      author: "- Children of Bodom"
    },
    {
      id: 6,
      text: `"I love the way you love, but I hate the way I'm supposed to love you back and."`,
      author: "- Silverchair"
    },
    {
      id: 7,
      text: `"Like a eternal flame, our love will remain."`,
      author: "- Gamma Ray"
    }
  ];
  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.author);
  $("#tweet-quote").attr(
    "href",
    stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.author)
  );
}
function changePageColors() {
  console.log("Mudando as cores da página");
  var randomColor = getRandomColor();

  $("body, footer, #tweet-quote, .button").css({
    "background-color": randomColor
  });
}
function getRandomColor() {
  // Gera uma cor hexadecimal aleatória
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function stringToClickToTweetURL(str) {
  var stringToConvert = str
    .split(" ")
    .join("%20")
    .split("@")
    .join("%40")
    .split("!")
    .join("%21");

  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  return resultString;
}
