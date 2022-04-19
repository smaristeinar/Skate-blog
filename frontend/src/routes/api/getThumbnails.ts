export async function get({platform}) {
     const values = await platform.env.TUMBNAILS.list();
     console.log(values);
     return {body: await values} 
  }