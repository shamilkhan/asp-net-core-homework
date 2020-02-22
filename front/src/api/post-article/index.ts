import Xhr from "../../modules/xhr";

type Props = {
  title: string;
  text: string;
  files?: Array<BinaryType>;
};

export default function(props: Props) {
  const { title, text } = props;
  Xhr({
    path: "create",
    method: "POST",
    body: { title, text }
  });
}
