# TypeScript - Apollo GraphQL - Chakra - Eslint Example

One of the strengths of GraphQL is [enforcing data types on runtime](https://graphql.github.io/graphql-spec/June2018/#sec-Value-Completion). Further, TypeScript and [GraphQL Code Generator](https://graphql-code-generator.com/) (graphql-codegen) make it safer by typing data statically, so you can write truly type-protected code with rich IDE assists.

This template extends [Apollo Server and Client Example](https://github.com/vercel/next.js/tree/canary/examples/api-routes-apollo-server-and-client#readme) by rewriting in TypeScript and integrating [graphql-let](https://github.com/piglovesyou/graphql-let#readme), which runs [TypeScript React Apollo](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo) in [graphql-codegen](https://github.com/dotansimha/graphql-code-generator#readme) under the hood. It enhances the typed GraphQL use as below:

```tsx
import { useNewsQuery } from './news.graphql'

const News = () => {
	// Typed already️⚡️
	const { data: { news } } = useNewsQuery()

	return <div>{news.map(...)}</div>
}
```

By default `**/*.graphqls` is recognized as GraphQL schema and `**/*.graphql` as GraphQL documents. If you prefer the other extensions, make sure the settings of the webpack loader in `next.config.js` and `.graphql-let.yml` are consistent.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/koolamusic/nextjs-typescript-graphql-chakra-eslint)

## How to use

### Download manually

- You need to have `git` installed on your machine [https://git-scm.com/](https://git-scm.com/)
- You need to have `node and npm or yarn` installed on your machine [https://nodejs.org/en/](https://nodejs.org/en/)

```bash
$ git clone https://github.com/koolamusic/nextjs-typescript-graphql-chakra-eslint
cd nextjs-typescript-graphql-chakra-eslint
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```