export async function get({params,platform}) {
 
      let post = await platform.env.VIDEOS.get(`${params.id}`, { type: 'json' });

     return {body: await post}
  }