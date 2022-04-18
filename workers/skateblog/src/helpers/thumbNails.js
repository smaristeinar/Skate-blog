export async function thumbNails() {
    const datoToken = "45d3feff8f1aa49044bf21b6aab5bc"
    const datoUrl = 'https://graphql.datocms.com/'

    const myQuery = `{
        allPosts {
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
        body: JSON.stringify({
            query: myQuery
        }),
        headers: {
            Authorization: datoToken,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })

    let datoResponse = await datoRequest.json()
    console.log("thumb", JSON.stringify(await datoResponse))

    console.log(await datoResponse);
    await datoResponse.data.allPosts.forEach(async post => {
        await THUMBNAILS.put(post.title, JSON.stringify(post));
        console.log(post)
    });
}