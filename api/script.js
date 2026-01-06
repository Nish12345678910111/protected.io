export default async function handler(req, res) {
  // BLOCK browser opening (GET)
  if (req.method !== "POST") {
    res.setHeader("Content-Type", "text/plain");
    return res.status(403).send("Protected by Nish12345678910111");
  }

  const name = req.url.replace("/", "");

  const script =
    `loadstring(game:HttpGet("https://raw.githubusercontent.com/Nish12345678910111/myscripts/main/${name}.lua"))()`;

  res.setHeader("Content-Type", "text/plain");
  res.send(script);
}
