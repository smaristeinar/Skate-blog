export async function get({platform}) {
     const values = await platform.env.THUMBNAIL.list();
     return {body: await values} 
  }