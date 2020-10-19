import isRelativeUrl from "is-relative-url";
import QRCode from "qrcode";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  console.log(isRelativeUrl("foo/bar"));
  // With promises
  QRCode.toDataURL("I am a pony!")
    .then((url) => {
      console.log(url);
    })
    .catch((err) => {
      console.error(err);
    });
  return new Response("Hello worker!", {
    headers: { "content-type": "text/plain" },
  });
}
