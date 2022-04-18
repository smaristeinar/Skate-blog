import { allArticles } from "./helpers/allArticles"
import {thumbNails} from "./helpers/thumbNails"

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest(request) {

  await allArticles()
  await thumbNails()

  return new Response("hello", {
    headers: { 'content-type': 'text/plain' },
  })
}