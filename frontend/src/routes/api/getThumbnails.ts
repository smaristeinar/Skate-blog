
export async function get({platform}) {
   let thumbnails = await platform.env.TUMBNAILS.get("thumbnails", { type: "json" })
   return { body: await thumbnails }
}
 
