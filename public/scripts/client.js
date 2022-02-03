/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const renderTweets = function(tweets) {
  for (let tweet of tweets) {
  const element = createTweetElement(tweet)
  $('#tweets-container').append(element);
  }
  }

  $( "#submitform" ).submit(function( event ) {
    event.preventDefault();
  });







const createTweetElement = function(tweet) {
  let $tweet = `<article class="head">
  <header class="tweet-header">
    <div class="image-name">
      <img src="${tweet.user.avatars}" />
      <p> ${tweet.user.name}</p>

    </div>
    <div>
      <p class="tag">
      ${tweet.user.handle}
      </p>
    </div>
  </header>
  <div class="message">
    <p> ${tweet.content.text}</p>
  </div>
  <footer class="tweet-footer">
    <div>
      <p> ${timeago.format(tweet.created_at)}</p>
    </div>
    <div class="icons">
      <p><i class="fas fa-flag"></i></p>
      <p><i class="fas fa-retweet"></i></p>
      <p><i class="fas fa-heart"></i></p>
    </div>
  </footer>
</article>`
return $tweet;
}





$( document ).ready(function() {
  console.log( "ready!" );

  renderTweets(data)

});
