import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = () => (
    <div>
        <h1>Kindness Wednesday</h1>
    </div>
);

const IndexPage = ({ data }) => {
    console.log(data);

    return (
        <Layout>
            <IndexPageTemplate />
        </Layout>
    );
};

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`;

export default IndexPage;
