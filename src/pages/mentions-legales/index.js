import React from 'react';
import styles from './styles.scss';
import Header from '../../components/header';
import { graphql } from 'gatsby';
import BreadCrumb from '../../uiComponents/breadCrumb';

export default props => (
  <>
    <Header />
    <div styles={styles} className="mention-legales">
      <BreadCrumb current="Mentions légales" />
      <p
        dangerouslySetInnerHTML={{
          __html:
            props.data.allContentfulAboutManakin.edges[0].node.mentionsLegales
              .childMarkdownRemark.html,
        }}
      />
    </div>
  </>
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
