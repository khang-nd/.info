import { get } from "./_core";
import { DevArticle, ErrorResponse } from "./_type";

const BASE_URL = "https://dev.to/api";

export async function getArticles() {
  const headers: HeadersInit = new Headers();
  headers.set("api-key", process.env.DEV_API_KEY as string);

  const response = await get(BASE_URL + "/articles/me", { headers });

  if (response.ok) {
    return (await response.json()) as DevArticle[];
  } else {
    console.error((await response.json()) as ErrorResponse);
  }
}
