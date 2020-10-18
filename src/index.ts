const isRelativeUrl = require("is-relative-url");

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  console.log(isRelativeUrl("foo/bar"));
  return new Response("Hello worker!", {
    headers: { "content-type": "text/plain" },
  });
}
