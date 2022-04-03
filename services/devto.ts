import { DevArticle } from "./graphql/generated";
import { get } from "./_core";

const BASE_URL = "https://dev.to/api";

export async function getArticles() {
  const response = await get(BASE_URL + "/articles/me", {
    headers: { "api-key": process.env.DEV_API_KEY as string },
  });

  if (response.ok) {
    return (await response.json()) as DevArticle[];
  }
  throw {
    status: response.status,
    error: response.statusText,
  };
}
