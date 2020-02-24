type Props = {
  path?: string;
  method?: "GET" | "POST";
  body?: object;
};

export default async function({
  path = "",
  method = "GET",
  body = {}
} = {}): Promise<Response> {
  let headers: RequestInit = { mode: "no-cors" };
  if (method === "POST") {
    if (body instanceof FormData) {
      headers.body = body;
    } else {
      headers.body = JSON.stringify(body);
    }
    headers.method = "POST";
  }
  let result = await fetch(`https://localhost:5001/${path}`, headers);
  return result;
}
