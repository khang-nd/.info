export function get(url: string, init?: RequestInit) {
  return fetch(url, {
    method: "GET",
    ...init,
  });
}
