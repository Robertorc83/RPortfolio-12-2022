export interface MenuItm {
    id: string;
    title: string;
    url: string;
}

interface IsCategory {
    name: string, 
}

export interface IsPost {
    title: string, 
    excerpt: string, 
    slug: string, 
    categories: IsCategory[], 
    featuredImage: IsFeaturedImage
}

export interface IsFeaturedImage {
    url: string
}

export interface IsChildrenProps{
    content: string
}
export interface IsChildrenCode{
    props: IsChildrenProps
}