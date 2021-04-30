import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { reveiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(reveiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}