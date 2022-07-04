const quotes = [
  {
    quote: "Life is too short for long-term grudges.",
    author: "Elon Musk",
  },
  {
    quote:
      "If something's important enough, you should try. Even if - the probable outcome is failure.",
    author: "Elon Musk",
  },
  {
    quote: "Success is a lonely road.",
    author: "Gael An(Vermouth)",
  },
  {
    quote:
      "Motivation is garbage. You're making a mistake if you think at some point you'll feel ready to do the things you've been thinking about.",
    author: "Mel Robbins",
  },
  {
    quote:
      "Don’t compare yourself with anyone in this world… if you do so, you are insulting yourself.",
    author: "Bill Gates",
  },
  {
    quote: "Life is not fair — get used to it!",
    author: "Bill Gates",
  },
  {
    quote:
      "Job one is to get out of that cave. A lot of people do get out but don’t change.",
    author: "Robert Downey Jr.",
  },
  {
    quote:
      "Maybe the goal really should be a life that values honor, duty, good work, friends and family.",
    author: "Robert Downey Jr.",
  },
  {
    quote: "Just do it.",
    author: "Nike",
  },
  {
    quote:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
