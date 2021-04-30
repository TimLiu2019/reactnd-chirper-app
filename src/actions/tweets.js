export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function reveiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}
