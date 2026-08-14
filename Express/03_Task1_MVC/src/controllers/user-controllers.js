import fs from "node:fs";
import path from "node:path"

//! CONTROLLERS
export async function getHTMLPage(req, res) {
  try {
    let filePath = path.join(import.meta.dirname,"..","pages","index.html")
    let src = fs.createReadStream(filePath, "utf-8");
    src.pipe(res);
  } catch (error) {
    console.log(error);
  }
}
