import Xhr from "../../modules/xhr";

type Props = {
  title: string;
  text: string;
  date: number;
  files?: Array<string | ArrayBuffer>;
};

export default async function(props: Props) {
  const formData: FormData = new FormData();
  Object.keys(props).forEach(key => {
    formData.append(key, props[key]);
  });
  return await Xhr({
    path: "create",
    method: "POST",
    body: formData
  });
}
