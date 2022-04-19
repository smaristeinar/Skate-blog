async function getThumbnails(keys, {platform}){
let thumbnails = []
await keys.forEach(async tumbnail => {
      let thumbnailData = await platform.env.TUMBNAILS.get(tumbnail.name, {type: "json"})
       thumbnails.push(await thumbnailData)
      })
      return thumbnails
}

export async function get({platform}) {
   const values = await platform.env.TUMBNAILS.list();
   let items = [];
   values.keys.forEach(async element => {
      items.push(await platform.env.TUMBNAILS.get(element.name, { type: "json" }))
   });  

   if(items.length){return { body: await items}}
}

  /**platform.env.TUMBNAILS.get(values.keys[0].name, { type: "json" })
 */