import * as png from "@vivaxy/png";

const generate = async (request: Request) => {
  // const { text } = await request.json();
  const meta = {
    width: 2,
    height: 2,
    depth: 2,
    colorType: 3,
    compression: 0,
    interlace: 0,
    filter: 0,
    palette: [
      [255, 0, 0, 255],
      [0, 255, 0, 255],
      [0, 0, 255, 255],
      [255, 255, 255, 127],
    ],
    sRGB: 1,
    physicalDimensions: {
      pixelPerUnitX: 2835,
      pixelPerUnitY: 2835,
      unit: 1,
    },
    data: [255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 255, 255, 127],
  };

  const headers = { "Content-Type": "image/png" };
  return new Response(png.encode(meta), { headers });
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
