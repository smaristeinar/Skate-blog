
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest(request) {
  const datoToken = "45d3feff8f1aa49044bf21b6aab5bc"
  const datoUrl = 'https://graphql.datocms.com/'

  const myQuery = `{
  allVideos {
    videoLink {
      thumbnailUrl
      url
    }
    id
    shortDescription
    textContent
    title
    createdAt
  }
  allPosts {
    id
    title
    shortDescription
    createdAt
    thumbnail {
      url
    }
    content
  }
}`

  const datoRequest = await fetch(datoUrl, {
    method: 'POST',
    body: JSON.stringify({ query: myQuery }),
    headers: {
      Authorization: datoToken,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  let datoResponse =  await datoRequest.json() 
  console.log(datoResponse);
  /*await datoResponse.data.allPosts.forEach(post => {
        TEST.put(post.id, JSON.stringify(post));
        console.log(post.id, post, "bing bong");
    });
*/

  return new Response(JSON.stringify(datoResponse), {
    headers: { 'content-type': 'text/plain' },
  })
}
