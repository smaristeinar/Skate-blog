export async function get({platform}) {
      let tumbNails = []
     const values = await platform.env.TUMBNAILS.list();
     console.log(values.keys[0].name)
     await values.keys.forEach(async tumbnail => {
       tumbNails.push(await platform.env.THUMBNAILS.get(tumbnail.name, {type: "json"}))
      });

     console.log(values);
     return {body: await tumbNails} 
  }