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
   let key = element.name
    items.push(await key/*platform.env.TUMBNAILS.get(element.name, { type: "json" })*/)
   });  

   if(items.length == values.keys.length){return { body: items}}
}

  /**platform.env.TUMBNAILS.get(values.keys[0].name, { type: "json" })
 */