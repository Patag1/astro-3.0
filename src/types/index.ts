export type ApiResult = {
  id: number
  title: string
  link: string
  duration: number
  explicit_lyrics: boolean
  preview: string
  artist: {
    name: string
  }
  album: {
    title: string
    cover: string
  }
}
