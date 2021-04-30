import { combindReducers } from "redux";
import autheduser from "./authedUser";
import tweets from "./tweets";
import users from "./users";

export default combindReducers({
  autheduser,
  tweets,
  users
});
