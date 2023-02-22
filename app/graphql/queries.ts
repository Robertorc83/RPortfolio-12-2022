import { gql } from "graphql-request";

export const GetPostsQuery = gql`
  {
    posts {
        slug
        title
        excerpt
        categories {
            name
        }
        featuredImage{
            url
        }
    } 
  }
`;

export const GetPostBySlug = gql`
  query PostIdQuery($slug: String!) {
    post(where: { slug: $slug }) {
        featuredImage {
            url
        }
        content {
            raw
        }
        authors {
            name
            photo {
                url
            }
        }
        categories {
            name
        }
  }
}

`;