import { get } from "./_core";
import { ErrorResponse, VibloArticle, VibloResponse } from "./_type";

const BASE_URL = "https://api.viblo.asia/users/khangnd";

export async function getArticles() {
  const response = await get(BASE_URL + "/posts");

  if (response.ok) {
    return (await response.json()) as VibloResponse<VibloArticle[]>;
  } else {
    console.error((await response.json()) as ErrorResponse);
  }
}
