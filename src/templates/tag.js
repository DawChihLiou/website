import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "twin.macro"

export default function Tag(d) {
  const tag = d.data.tagsYaml
  const tools = d.data.allToolsYaml.nodes
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{tag.name} static analysis tools and linters</title>
      </Helmet>
      <article tw="flex flex-col shadow my-4 w-full">
        <div tw="bg-white flex flex-col justify-start p-6 w-full">
          <h1 tw="text-3xl font-semibold pb-5">
            {tag.name} static analysis tools
          </h1>
          <ul>
            {tools.map(tool => (
              <li tw="pb-3" key={tool.id}>
                <Link to={tool.fields.slug} tw="font-bold">
                  {tool.name}
                </Link>
                <p tw="pl-5">{tool.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $tag: String!) {
    tagsYaml(fields: { slug: { eq: $slug } }) {
      name
      tag
      fields {
        slug
      }
    }

    allToolsYaml(
      filter: { tags: { glob: $tag } }
      sort: { order: ASC, fields: name }
    ) {
      nodes {
        id
        name
        description
        tags
        fields {
          slug
        }
      }
    }
  }
`
