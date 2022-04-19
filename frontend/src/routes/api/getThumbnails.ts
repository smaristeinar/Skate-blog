export async function get({platform}) {
     let posts = await platform.env.THUMBNAIL.list({ type: 'json' });
     return {body: await posts} 
  }