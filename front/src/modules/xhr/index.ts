type Props = {
  path?: string;
  method?: "GET" | "POST";
  body?: object;
};

export default function({ path = "", method = "GET", body = {} } = {}): Promise<
  Response
> {
  return new Promise(resolve => {
    let headers: RequestInit = { mode: "no-cors" };
    if (method === "POST") {
      headers.body = JSON.stringify(body);
      headers.method = "POST";
    }
    fetch(`https://localhost:5001/${path}`, headers)
      .then(res => res.json())
      .then(res => {
        resolve(res);
      });
  });
}
