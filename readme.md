# tweep

> helper node module for

[![tweet](screenshot.png)](https://twitter.com/TimFederle/status/659798794863775744)

[![MITlicensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zuck007/tweep/master/LICENSE)

[Get Twitter CONSUMER KEYS & ACCESS TOKENS](https://apps.twitter.com/)

## Install
```
$ npm install --save tweep
$ #better save these tokens in ~/.bashrc or ~/.zshrc 
$ export TWITTER_CONSUMER_KEY=xxxxxxx
$ export TWITTER_CONSUMER_SECRET=xxxxxxx
$ export TWITTER_ACCESS_TOKEN_KEY=xxxxxx
$ export TWITTER_ACCESS_TOKEN_SECRET=xxxxx
```
## Usage
```js
// articles or link shared in user's tweets  and retweets will get fetched, also twitter moments will also included
const tweep = require('tweep');
// shared_article_limit totally depends on fetched tweets,you can put 100 but if user haven't shared 100 articles you won't get your desired result
// tweep('twitter_user_name',shared_article_limit)
tweep('zuck_007',5)
    .then(resp => {
        console.log(resp);
        /*
      { user: 'https://twitter.com/zuck_007',
        shared_articles: 
         [  {   tweet_url: 'https://twitter.com/JavaScriptDaily/status/847103438056030209',
                article_url: 'https://twitter.com/i/moments/847043675364507648' },
            {   tweet_url: 'https://twitter.com/zuckXbot/status/844949447469666307',
                article_url: 'http://bit.ly/2mwxwlK' },
            {   tweet_url: 'https://twitter.com/ShashiTharoor/status/839498552015388672',
                article_url: 'https://www.theguardian.com/world/2017/mar/08/india-britain-empire-railways-myths-gifts' },
            {   tweet_url: 'https://twitter.com/zuckXbot/status/836803582154375173',
                article_url: 'http://bit.ly/2mrlppB' },
            {   tweet_url: 'https://twitter.com/ThePracticalDev/status/836732719740694529',
                article_url: 'https://twitter.com/i/moments/836725412130598913' } 
        ] 
      }

        */
    });
tweep('nobodyShouldUseThisUsernameOtherwiseBuildWillFail',10)
    .then(resp => {
        console.log(resp);
        /*
        [ { code: 34, message: 'Sorry, that page does not exist.' } ]

        */
    });
```