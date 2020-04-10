type Props = {
  path?: string;
  method?: "GET" | "POST";
  body?: object;
};

export default async function ({
  path = "",
  method = "GET",
  body = {},
} = {}): Promise<Response> {
  let requestInit: RequestInit = {};
  // let requestInit: RequestInit = { mode: "no-cors" };
  if (method === "POST") {
    if (body instanceof FormData) {
      requestInit.body = body;
    } else {
      requestInit.body = JSON.stringify(body);
      requestInit.headers = {
        "Content-Type": "application/json",
      };
    }
    requestInit.method = "POST";
  }

  console.log(requestInit)

  let result = await fetch(`http://localhost:5000/${path}`, requestInit);
  return result;
}
