export async function get({platform}) {
      let tumbNails = []
      const values = await platform.env.TUMBNAILS.list();
     await values.keys.forEach(async tumbnail => {
       tumbNails.push(await platform.env.THUMBNAILS.get(tumbnail, {type: "json"}))
      });

     console.log(values);
     return {body: await tumbNails} 
  }