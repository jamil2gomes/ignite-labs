import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o74o2s0xl801xxhk68e4gr/master',
  cache: new InMemoryCache(),
})