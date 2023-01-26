import type { MicroCMSQueries } from 'microcms-js-sdk'
import { client } from '../libs/microcms'

export const getComment = async (queries: MicroCMSQueries, limit: number) => {
  const comments = await client.get({
    endpoint: '',
    queries,
  })

  return comments
}
