async function getThumbnails(keys, {platform}){
let thumbnails = []
await keys.forEach(async tumbnail => {
       thumbnails.push(await platform.env.TUMBNAILS.get(tumbnail.name, {type: "json"}))
      })
return thumbnails
}

export async function get({platform}) {
   const values = await platform.env.TUMBNAILS.list();
   return { body: await getThumbnails(await values.keys,{platform})}
  }

  /**platform.env.TUMBNAILS.get(values.keys[0].name, { type: "json" })
 */