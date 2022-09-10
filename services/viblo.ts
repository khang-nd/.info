import { get } from "./_core";
import { VibloArticle } from "./_type";

const BASE_URL = "https://api.viblo.asia/users/khangnd";

export async function getArticles() {
  const response = await get(BASE_URL + "/posts");

  if (response.ok) {
    return (await response.json()).data as VibloArticle[];
  }

  throw {
    status: response.status,
    error: response.statusText,
  };
}
