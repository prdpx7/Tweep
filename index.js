'use strict'
const Twitter = require('twitter')
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
var params = {screen_name: '', count: 1000, exclude_replies: true}

function getArticleTweets (tweet) {
  var mediaURL = /https?:\/\/((www|mobile|amp)\.)?(twitter|twimg|flickr|vimeo|imgur|instagram|youtube)\.com/
  var regex = new RegExp(mediaURL)
  var urls = tweet.entities.urls
  if (urls.length > 0) {
    var url = urls[0].expanded_url
    if (!url.match(regex) || url.match('twitter.com/i/moments')) {
      return true
    }
  }
  return false
}
function getTweetProps (tweet) {
  var tweetLink = 'https://twitter.com/'
  var user = tweet.user.screen_name
  var id = tweet.id_str
  if (tweet.retweeted_status) {
    user = tweet.retweeted_status.user.screen_name
    id = tweet.retweeted_status.id_str
  }
  tweetLink += user + '/status/' + id
  return {'tweet_url': tweetLink, 'article_url': tweet.entities.urls[0].expanded_url}
}
var tweep = (username, limit) => {
  limit = limit < 5 ? 5 : limit
  params.screen_name = username
  return client.get('statuses/user_timeline', params)
    .then((tweets, resp) => {
      // console.log(tweets)
      var articles = tweets.filter(getArticleTweets).map(getTweetProps)
      return {'user': `https://twitter.com/${username}`, 'shared_articles': articles.slice(0, limit)}
    })
    .catch(err => {
      // console.log(err)
      return err
    })
}
module.exports = tweep
