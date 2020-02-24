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
    headers.body = JSON.stringify(body);
    headers.method = "POST";
  }
  let result = await fetch(`https://localhost:5001/${path}`, headers);
  result = await result.json();
  return result;
}
