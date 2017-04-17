import test from 'ava'
import tweep from '.'
test('getting articles from twitter user `nobodyShouldUseThisUsernameOtherwiseBuildWillFail`', async t => {
  const data = await tweep('nobodyShouldUseThisUsernameOtherwiseBuildWillFail', 5)
  t.is(data[0].code, 34)
})
test('twitter user `zuck_007`', async t => {
  const data = await tweep('zuck_007', 5)
  t.is(data.user, 'https://twitter.com/zuck_007')
})
