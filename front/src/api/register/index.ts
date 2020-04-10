import Xhr from "../../modules/xhr";

type User = {
  username: string;
  password: string;
  email: string;
};

export default async function(user: User) {

    return await Xhr({
      path: "users",
      method: "POST",
      body: {
        user
      },
  });
}
