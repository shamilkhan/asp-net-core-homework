import { login } from "../index";
import Xhr from "../../../modules/xhr";

export default ({ email, password }) => async (dispatch, getState) => {
  let result = await Xhr({
    path: "users/login",
    method: "POST",
    body: { user: { email, password } },
  });

  result = await result.json();

  const { user } = result;

  dispatch(login(user));
};
