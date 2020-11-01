import qr from "qr-image";
import Jimp from "jimp/es";

const generate = async (request: Request) => {
  // const { text } = await request.json();
  const headers = { "Content-Type": "image/png" };
  const qr_png = qr.imageSync("https://workers.dev");
  const buf = await Jimp.read(qr_png);
  const manipulated = await buf.getBufferAsync(Jimp.MIME_PNG);
  return new Response(manipulated, { headers });
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  return await generate(request);
}
