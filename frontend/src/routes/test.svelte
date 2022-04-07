<script>
// @ts-nocheck


import { render as rend } from 'datocms-structured-text-to-html-string'

let stuff =  {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "heading",
                "level": 1,
                "children": [
                  {
                    "type": "span",
                    "value": "Cool skate Boarding thing"
                  }
                ]
              },
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Known for their unexpected guest boards, Krooked teamed up with Vans to deliver on this tradition by bringing in Natas, who holds special meaning with both brands and who served as an inspiration to Ray during his formative years as a young skateboarder. A respected artist in the skate community and beyond, Natas tapped into iconic board graphics from the past—Ray’s Ragdoll and Natas’ Panther—updating them with signature Krooked eyes and bringing them to life across footwear, apparel, and a guest Krooked board."
                  }
                ]
              },
              {
                "item": "1652934",
                "type": "block"
              },
              {
                "item": "3458739",
                "type": "block"
              },
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "more text and shit koslfkalskfsakflksaæl"
                  }
                ]
              }
            ]
          }
        },
        "blocks": [
          {
            "image": [
              {
                "id": "445640",
                "url": "https://www.datocms-assets.com/65130/1648555528-unknown-11.webp",
                "filename": "unknown-11.webp"
              }
            ],
            "id": "1652934"
          },
          {
            "image": [
              {
                "id": "445641",
                "url": "https://www.datocms-assets.com/65130/1648555530-unknown-12.webp",
                "filename": "unknown-12.webp"
              }
            ],
            "id": "3458739"
          }
        ],
        "links": []
      }
    
    




const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode('figure', {}, renderNode('img', { src: record.image[0].url }));
  },
  renderInlineRecord({ record, adapter: { renderNode } }) {
    return renderNode('a', { href: `/blog/${record.slug}` }, record.title);
  },
  renderLinkToRecord({ record, children, adapter: { renderNode } }) {
    return renderNode('a', { href: `/blog/${record.slug}` }, children);
  },
};

let helllo = rend(stuff, options);

console.log(helllo);
</script>

<div>
    {@html helllo}
</div>