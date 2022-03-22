const mockdata: any = [
      {
        "id": "44608",
        "thumbnail": {
          "url": "https://www.datocms-assets.com/65130/1647527094-us-skateboarder-cory-juneau.jpg"
        },
        "createdAt": "2022-03-17T14:30:33Z",
        "content": "jsjadjaslkjddddddddddddddddddddasjdklajskldjasdjaskljdkalsjdklajskdjaskljdklasjkljgkfjsakfnsdmklvjpsdoxljfisddspjkolvmsihoajpḱfðlsðfkdoilfsæklajfdgopilhjkgnlfæsdfkoaijrhknljisdfklgdkljdfskjldsfkjlsdkjldfskjdflsdkljsdkjlskjldfkjlseiojijisdjlsefjlkslkjfskljfjsdofjsjdgijsdjigjiodfgiojdfgifigojifdigjidfijogdfijogijodgifoigdfojigdidgojigojisejioseojiseoijsfsiojfoijsfisfijiosojisjogigdjigdjogjiogsjoiggojaigajgjaklgkajlægajkljagkeopijaiogajgioajigæofdkjlægjdfgækfdlgjdfigiolskjoiklojilkojilksdfoijkldfjioksdfiojksfldijkllllllllllllllllllllllllllllllllllkldskjlsdfkjlkjlsdkjlfjsdkjlfjlksdflksdflkjsdljkfslkjdfjklsdkljfkjlsdjfklsjdkjkfsdjklfklsdfkjkjlsdjklfskdjlfkjlsddfslkjsdjklfkjl",
        "title": "Blog post 2",
        "shortDescription": "another cool blog post"
      },
      {
        "id": "44593",
        "thumbnail": {
          "url": "https://www.datocms-assets.com/65130/1647527094-us-skateboarder-cory-juneau.jpg"
        },
        "createdAt": "2022-03-17T14:26:22Z",
        "content": "Hellow world this is the first blog post lets get this stuff going hell yeah ![](https://www.datocms-assets.com/65130/1647527094-us-skateboarder-cory-juneau.jpg)\nthis is some more text about stuff and things im just writing with out a care in the world just rambling on and on to write more text to fill out this random blog post and there is nothing you can do to stoppp me heheheh lets continu tiping about every thing an nothing this is super fun what is going on lol more more lolololololololol",
        "title": "Blog post 1",
        "shortDescription": "Cool blog post about stuff and things"
      },
      {
        "id": "44609",
        "thumbnail": {
          "url": "https://www.datocms-assets.com/65130/1647527094-us-skateboarder-cory-juneau.jpg"
        },
        "createdAt": "2022-03-17T14:38:59Z",
        "content": "ksadklasjdkljaskljdkjlsalkdkjsfkjlsdfjlsklklslksfjlksdflksfjklsjfsklnlksfjkls",
        "title": "blog post 3 ",
        "shortDescription": ""
      }
    ]

export async function get() { 
   return {body:{mockdata}} 
}