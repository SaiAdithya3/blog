import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function contacts(req, res) {
    
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const query = gql`
    mutation CreateContact($name: String!, $email: String!,$subject: String!, $message: String!) {
      createContact(data: {name: $name, email: $email,subject: $subject, message: $message }) { id }
    }
  `;


  try {
      
      const result = await graphQLClient.request(query, req.body);
      return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
  }



}   