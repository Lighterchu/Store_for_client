// const response = await fetch(`https://${shop}/admin/api/2019-07/graphql.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "X-Shopify-Access-Token": accessToken,
//     },
//     body: query
//   })

//   const responseJson = await response.json();
//   const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl
//   return ctx.redirect(confirmationUrl)
// };

// import { useQuery } from 'react-query';
import { GraphQLClient, request } from 'graphql-request';

// export const useGQLQuery = (key, query, variables, config = {}) => {
//   const endpoint = 'https://test-site-8cd2.myshopify.com/admin/api/2022-07/graphql.json';
//   const headers = {
//     headers: {
//       authorization: `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`
//     }
//   }

//   const graphQLClient = new GraphQLClient(endpoint, headers);

//   const fetchData = async () => await graphQLClient.request(query, variables);
  
//   // const fetchData = async () => await request(endpoint, query, variables);

//   return useQuery(key, fetchData, config);
// };

export const getSubscriptionUrl = async (accessToken) => {
    const query = JSON.stringify({
      query: `shop {
            name
      }`
    });
  
    const response = await fetch(`https://https://test-site-8cd2.myshopify.com/admin/api/2022-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: query
    })
  
    const responseJson = await response.json();
    
  };

