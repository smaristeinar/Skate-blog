async function getThumbnails(keys, {platform}){
let thumbnails = []
await keys.forEach(async tumbnail => {
      let thumbnailData = await platform.env.TUMBNAILS.get(tumbnail.name, {type: "json"})
       thumbnails.push(await thumbnailData)
      })
      return thumbnails
}

export async function get({platform}) {
  // const values = await platform.env.TUMBNAILS.list();
  
   let list = [
    {
      "name": "THE SQUAD | A Video By Calvin Millar"
    },
    {
      "name": "another skate article"
    },
    {
      "name": "more aabout this skate articleaaaaaaaaaaaaaaaaaaaa"
    },
    {
      "name": "skate community and beyond, Nata"
    }
  ]

/*   await values.keys.forEach(async (element:any, {platform}) => {
   let key = element.name
   let item = platform.env.TUMBNAILS.get(await key, { type: "json" })
   items.push(await item)
   });  
*/
 let items = [];
 list.forEach(async item => {
    console.log(item.name);
    
   items.push( item.name/*await platform.env.TUMBNAILS.get(`${item.name}`, { type: "json" })*/)
})


 return { body: items}
}

  /**platform.env.TUMBNAILS.get(values.keys[0].name, { type: "json" })
 */