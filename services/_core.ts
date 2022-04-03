export function get(url: string, init?: RequestInit) {
  return fetch(url, {
    method: "GET",
    ...init,
  });
}

export function post(url: string, init?: RequestInit) {
  return fetch(url, {
    method: "POST",
    ...init,
  });
}
