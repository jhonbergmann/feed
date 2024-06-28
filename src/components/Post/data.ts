export interface TAuthor {
  name: string
  role: string
  avatarUrl: string
}

export interface TContent {
  type: 'paragraph' | 'link'
  content: string
}

export interface TPost {
  id: number
  author: TAuthor
  publishedAt: Date
  content: TContent[]
}

export interface TPostProps {
  post: TPost
}
