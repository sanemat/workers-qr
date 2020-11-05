import qr from "qr-image";
import { PNG } from "pngjs/browser";

const generate = async (request: Request) => {
  let w = 32;
  let h = 64;

  /// RGBA input (color type 6)
  let buffer = Buffer.alloc(2 * w * h * 4);
  let bitmap = new Uint16Array(buffer.buffer);
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      bitmap[i * 4 * w + 4 * j] = (i * 65535) / h;
      bitmap[i * 4 * w + 4 * j + 1] = (j * 65535) / w;
      bitmap[i * 4 * w + 4 * j + 2] = ((h - i) * 65535) / h;
      bitmap[i * 4 * w + 4 * j + 3] = 65535;
    }
  }

  let png = new PNG({
    width: w,
    height: h,
    bitDepth: 16,
    colorType: 6,
    inputColorType: 6,
    inputHasAlpha: true,
  });

  // const { text } = await request.json();
  const headers = { "Content-Type": "image/png" };
  const qr_png = PNG.sync.read(buffer);
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
  return await generate(request);
}
