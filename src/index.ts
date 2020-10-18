import bs58 from "bs58";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  const address = "16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS";
  const bytes = bs58.decode(address);
  console.log(bytes.toString("hex"));
  return new Response("Hello worker!", {
    headers: { "content-type": "text/plain" },
  });
}
