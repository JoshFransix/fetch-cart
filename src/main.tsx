// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App.tsx";
import "./index.css";

const httpLink = createHttpLink({
  uri: "https://greenlineco.site/graphql",
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3RpbmctdXNlci1pZCIsImh1YklkIjpudWxsLCJpbnZlbnRvcnlJZCI6bnVsbCwibWVyY2hhbnRJZCI6MSwidHlwZSI6Im1lcmNoYW50Iiwicm9sZXMiOlszMV0sImlhdCI6MTcwNjgxNDc0MywiZXhwIjoxNzI3NzE3NTMwfQ.6xDklrr3sy3dtmbT_bFiioHYIMtc_nqWfug6vQATwDY`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
