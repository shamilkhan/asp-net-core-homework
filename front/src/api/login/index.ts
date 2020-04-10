import Xhr from "../../modules/xhr";

type User = {
  password: string;
  email: string;
};

export default async function(user: User) {

    return await Xhr({
      path: "users/login",
      method: "POST",
      body: {
        user
      },
  });
}
