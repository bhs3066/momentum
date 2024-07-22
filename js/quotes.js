const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "<키케로>",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다",
    author: "<로망로랑>",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "<파울로 코엘료>",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "<엘버트 허버드>",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다",
    author: "<마르쿠스 아우렐리우스 안토니우스>",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "<F.스콧 핏제랄드>",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "<단테>",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "<제임스 딘>",
  },
  {
    quote:
      "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
    author: "<간디>",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다",
    author: "<나폴레옹>",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
