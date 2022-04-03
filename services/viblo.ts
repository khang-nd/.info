import { VibloArticle } from "./graphql/generated";
import { post } from "./_core";

const BASE_URL = "https://api.viblo.asia/users/khangnd";

async function get(url: string) {
  // bypass Viblo's cloudflare using reqbin
  // credit: https://github.com/tonynguyenit18/github-readme-social-article
  const reqbinUrl = "https://apius.reqbin.com/api/v1/requests";
  const response = await post(reqbinUrl, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: "0",
      name: "",
      errors: "",
      sessionId: new Date().getTime(),
      json: JSON.stringify({
        method: "GET",
        url,
        apiNode: "US",
        contentType: "",
        content: "",
        headers: "",
        errors: "",
        curlCmd: "",
        compare: false,
        idnUrl: url,
        auth: {
          auth: "noAuth",
          bearerToken: "",
          basicUsername: "",
          basicPassword: "",
          customHeader: "",
          encrypted: "",
        },
      }),
    }),
  });
  if (response.ok) return JSON.parse((await response.json()).Content);
  throw {
    status: response.status,
    error: response.statusText,
  };
}

export async function getArticles() {
  const response = await get(BASE_URL + "/posts");
  return response.data as VibloArticle[];
}
