import type { MicroCMSQueries } from 'microcms-js-sdk'
import { client } from '../libs/microcms'

export const getArticles = async (queries: MicroCMSQueries) => {
  const articles = await client.get({
    endpoint: 'articles',
    queries,
  })
  return articles
}

export const getArticle = async (queries?: MicroCMSQueries) => {
  const article = await client.get({
    endpoint: 'articles',
    queries,
  })
  return article
}
