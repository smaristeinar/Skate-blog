async function getThumbnails(keys, {platform}){
let thumbnails = []
await keys.forEach(async tumbnail => {
       thumbnails.push(await platform.env.THUMBNAILS.get(tumbnail.name, {type: "json"}))
      })
return thumbnails
}

export async function get({platform}) {
     const values = await platform.env.TUMBNAILS.list();
     return {body: await platform.env.THUMBNAILS.get(values.keys[0],{type: "json"})}
  }