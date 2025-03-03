export async function foo(request: Request) {
  return fetch(request, { tls: { rejectUnauthorized: false } });
}
