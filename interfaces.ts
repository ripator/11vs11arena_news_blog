export interface PostNode {
   node: Post
}
export interface Post {
   author: Author,
      categories: Category,
      createdAt: string
      slug: string,
      title: string,
      excerpt: string,
      featuredImage1: {
        url: string
      }
}

export interface Author {
   id: string,
   name: string,
   photo: {
      url: string,
   }
}


export interface Category {
   name: string,
   slug: string,
}