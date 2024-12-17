// META
declare interface MetadataResultTitle {
  title: string
  openGraph: {
    title: string
  }
}

declare interface PageParams {
  params: {
    id: string
  }
}

// PARENTS
declare type ParentBoards = ParentBoard[]

declare interface ParentBoard {
  createdAt: Date | null
  id: string
  title: string
}


// CHILDREN
declare type ChildrenBoards = CholdrenBoards[]

declare interface ChildrenBoard {
  createdAt: Date | null
  id: string
  title: string
  boardId: string
}
