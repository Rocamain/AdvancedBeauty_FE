import { gql } from '@apollo/client';

//  graphql query to get Menu

const GETMENU = gql`
  query getMenu {
    menu {
      data {
        id
        attributes {
          links {
            ... on ComponentMenuLink {
              name
              url
            }
            ... on ComponentMenuDropdown {
              name
              url
              style
              dropdown_link {
                ... on MenuSectionEntityResponse {
                  data {
                    attributes {
                      links {
                        name
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          logo {
            data {
              attributes {
                alternativeText
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export default GETMENU;
