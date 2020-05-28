import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { IndexTemplate } from '../templates/IndexTemplate';

const IndexPage = (response) => {
    const [meta, setMeta] = useState({});
    const [content, setContent] = useState({});

    useEffect(() => {
        setMeta(response.data.markdownRemark.frontmatter.meta);
        setContent(response.data.markdownRemark.frontmatter.content);
    }, response);

    return (
        <Layout title={meta.title} description={meta.description}>
            <IndexTemplate data={content} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "IndexTemplate" } }) {
            frontmatter {
                meta {
                    title
                    description
                }
                content {
                    heading
                    text
                }
            }
        }
    }
`;

export default IndexPage;
