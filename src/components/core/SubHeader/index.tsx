// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Heading from '@theme/Heading';

import styles from './styles.module.css';

export const SubHeader = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>{siteConfig.title}</div>

                <div className={styles.description}>{siteConfig.tagline}</div>
            </div>
        </div>
    );
};
