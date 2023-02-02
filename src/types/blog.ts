// ブログ
export type blog = {
  id: string
  title: string
  path: string
  description: string
  body: string
  thumbnail: blogThumbnail
  tags: tag[]
  popular: boolean
  relations: blogRelations[] | null
  revisedAt: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}

// ブログサムネ
export type blogThumbnail = {
  url: string
  height: number
  width: number
}

// 関連リンク
export type blogRelations = {
  title: string
  url: string
  external: boolean
}

// タグ
export type tag = {
  id: string
  name: string
  path: string
  icon: iconThumbnail
  revisedAt: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}

// アイコン
export type iconThumbnail = {
  url: string
  height: number
  width: number
}

// コメント
export type comment = {
  id: string
  article_id: string
  user: string
  comment: string
  revisedAt: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
