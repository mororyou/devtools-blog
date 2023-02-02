export type blog = {
  id: string
  title: string
  description: string
  thumbnail: any
  body: string
  tags: tag[]
  popular: boolean
  relations: blogRelations[] | null
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export type blogRelations = {
  title: string
  url: string
  external: boolean
}

export type blogThumbnail = {
  url: string
  height: number
  width: number
}

export type BlogQuery = {}

export type tag = {
  id: string
  name: string
  revisedAt: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
