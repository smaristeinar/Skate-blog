
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
    allPosts {
      createdAt
      id
      post {
        links
        value
        blocks {
          id
          image {
            url
            video {
              streamingUrl
            }
          }
        }
      }
      video
      title
      tags
      shortDescription
      thumbnail {
        url
      }fffffffffff
      videoLink {
      url
      thumbnailUrl
    }
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
  console.log(await datoResponse);
  await datoResponse.data.allPosts.forEach(post => {
    if(true){
        TEST.put(post.id, JSON.stringify(post));
        console.log(post.id, post, "bing bong");
        console.log("---------------------------------------------")
    }
    });


  return new Response(JSON.stringify(await datoResponse), {
    headers: { 'content-type': 'text/plain' },
  })
}
