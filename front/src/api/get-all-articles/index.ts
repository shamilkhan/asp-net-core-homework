import Xhr from "../../modules/xhr";

export default async function() {
  const result = await Xhr({
    path: "articles",
    method: "GET"
  });
  console.log(result);
}
