declare interface MetadataResultTitle {
  title: string
  openGraph: {
    title: string
  }
}

declare type ParentBoards = ParentBoard[]

declare interface ParentBoard {
  createdAt: Date | null
  id: string
  title: string
}
