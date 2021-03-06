async function fetchData(value:any){
  const datoToken = '45d3feff8f1aa49044bf21b6aab5bc'
  const datoUrl = 'https://graphql.datocms.com/'
  const datoQuery = `
  {
  allPosts(filter: {OR: {title: {matches: {pattern: "${value}"}}}}) {
    thumbnail {
      url
    }
    title
    shortDescription
    video
    videoLink {
      thumbnailUrl
    }
    id
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
}

export async function get({ params }) {
   return {body : await fetchData(params.value)} 
} 