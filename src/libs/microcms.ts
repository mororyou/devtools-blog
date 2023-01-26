import { createClient } from 'microcms-js-sdk'

const MICROCMS_DOMAIN = import.meta.env.MICROCMS_SERVICE_DOMAIN
if (!MICROCMS_DOMAIN) {
  throw new Error('Missing SUPABASE_URL')
}

const MICROCMS_API = import.meta.env.MICROCMS_API_KEY
if (!MICROCMS_API) {
  throw new Error('Missing SUPABASE_KEY')
}

export const client = createClient({
  serviceDomain: MICROCMS_DOMAIN,
  apiKey: MICROCMS_API,
})
