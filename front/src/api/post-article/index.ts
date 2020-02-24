import Xhr from "../../modules/xhr";

type Props = {
  title: string;
  text: string;
  date: number;
  files?: Array<string | ArrayBuffer>;
};

export default function(props: Props) {
  // const { title, text, date, files } = props;
  const formData: FormData = new FormData();
  Object.keys(props).forEach(key => {
    formData.append(key, props[key]);
  });
  Xhr({
    path: "create",
    method: "POST",
    body: formData
  });
}
