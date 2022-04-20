export async function get({params,platform}) {
 
      let post = await platform.env.POSTS.get(`${params.id}`, { type: 'json' });

     return {body: await post}
  }