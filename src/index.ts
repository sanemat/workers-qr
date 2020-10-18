const qr = require("qr-image");

const generate = async (request: Request) => {
  const { text } = await request.json();
  const headers = { "Content-Type": "image/png" };
  const qr_png = qr.imageSync(text || "https://workers.dev");
  return new Response(qr_png, { headers });
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  return new Response("Hello worker!", {
    headers: { "content-type": "text/plain" },
  });
}
