/*async function fetchData(id:any){
  const datoToken = '45d3feff8f1aa49044bf21b6aab5bc'
  const datoUrl = 'https://graphql.datocms.com/'
  const datoQuery = `
  {
    post(filter: {id: {eq: ${id}}}) {
      title
      post {
        links
        value
        blocks {
          image {
            url
            id
          }
          id
        }
      }
      id  
      createdAt
      tags
      videoLink {
        providerUid
      }
      video
    }
  }`

  const datoRequest = await fetch(datoUrl, {
    method: 'POST',
    body: JSON.stringify({ query: datoQuery }),
    headers: {
      Authorization: datoToken,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  if (!datoRequest.ok) {
    throw new Error(`HTTP error! Status: ${datoRequest.status}`)
  }

  const datoCMSResponse: any = await datoRequest.json()

return await datoCMSResponse
}*/

export async function get({platform}) {

/*
  if(params.type == "post"){
    post = await platform.env.post.get(`${params.post}`, { type: 'json' });
  }
  else{
    post = await platform.env.video.get(`${params.post}`, { type: 'json' })
  }
  */ 

  let stuff =  await platform.env.POSTS.get("1652935", { type: 'json' })
  console.log(stuff);
    
  return {body: stuff} 
}