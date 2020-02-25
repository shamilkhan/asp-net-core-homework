import Xhr from "../../modules/xhr";

export default async function() {
  let result = await Xhr({
    path: "articles",
    method: "GET"
  });
  result = await result.json();
  return result;
}
