import React from 'react';
import Layout from '@theme/Layout';
import HomepagePartners from '../components/HomepagePartners';
import HomepageSearch from '../components/HomepageSearch';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.subtitle}>
              {siteConfig.tagline}
            </p>
            
            <HomepageSearch />
          </div>
        </div>
        
        <HomepagePartners />

      </main>
    </Layout>
  );
}