async function getThumbnails(keys, {platform}){
let thumbnails = []
await keys.forEach(async tumbnail => {
       thumbnails.push(await platform.env.THUMBNAILS.get(tumbnail.name, {type: "json"}))
      })
return thumbnails
}

export async function get({platform}) {
     const values = await platform.env.TUMBNAILS.list();
     return {body: await getThumbnails(values.keys, {platform})} 
  }