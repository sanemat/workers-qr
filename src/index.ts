const generate = async (request: Request) => {
  // const { text } = await request.json();
  const data =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";
  const b64String = data.split(",")[1];
  const byteString = atob(b64String);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  let intArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  const headers = { "Content-Type": "image/png" };
  return new Response(intArray, { headers });
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
