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
    console.log(await datoResponse);
    await datoResponse.data.allPosts.forEach(post => {
      console.log(post.video)
      if(post.video){
         VIDEOS.put(post.id, JSON.stringify(post));
          console.log(post.id, post, "bing bong");
          console.log("---------------------------------------------")
      }
      else{
       POSTS.put(post.id, JSON.stringify(post)) 
      }
      });
}