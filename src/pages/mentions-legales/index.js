import React from 'react';
import styles from './styles.scss';
import Header from '../../uiComponents/header';
import Layout from '../../uiComponents/layout';
import { graphql } from 'gatsby';

export default props => (
  <Layout>
    <Header />
    <div styles={styles} className="mention-legales">
      <h1 className="centered">Mentions légales</h1>
      <p
        dangerouslySetInnerHTML={{
          __html:
            props.data.allContentfulAboutManakin.edges[0].node.mentionsLegales
              .childMarkdownRemark.html,
        }}
      />
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query mentionsLegales {
    allContentfulAboutManakin {
      edges {
        node {
          id
          mentionsLegales {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
