export async function allArticles(){
    const datoToken = "45d3feff8f1aa49044bf21b6aab5bc"
    const datoUrl = 'https://graphql.datocms.com/'
  
    const myQuery = `{
      allPosts {
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
      body: JSON.stringify({ query: myQuery }),
      headers: {
        Authorization: datoToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  
    let datoResponse =  await datoRequest.json() 
    await datoResponse.data.allPosts.forEach(post => {
      if(post.video){
         VIDEOS.put(post.id, JSON.stringify(post));
      }
      else{
       POSTS.put(post.id, JSON.stringify(post)) 
      }
      });
}