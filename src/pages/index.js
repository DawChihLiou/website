import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

const bigHeader = css``

const ComponentName = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allTagsYaml.nodes.map(t => (
          <div key={t.id} css={bigHeader}>
            <Link to={t.fields.slug}>{t.name}</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allTagsYaml(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        tag
        fields {
          slug
        }
      }
    }
  }
`
export default ComponentName
