import { get } from "./_core";
import { DevArticle } from "./_type";

const BASE_URL = "https://dev.to/api";

export async function getArticles() {
  const response = await get(BASE_URL + "/articles/me", {
    headers: { "api-key": process.env.DEV_API_KEY as string },
  });

  if (response.ok) {
    return (await response.json()) as DevArticle[];
  }

  if (response.status === 401) console.error("Missing DEV_API_KEY from environement");

  throw {
    status: response.status,
    error: response.statusText,
  };
}
