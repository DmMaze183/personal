import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ExternalUrlRef.css';

const ExternalUrlRef = ({ url, title }) => {
  const [faviconUrl, setFaviconUrl] = useState(null);
  
  const getDomain = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch (e) {
      console.error('Invalid URL:', url);
      return null;
    }
  };
  
  useEffect(() => {
    const domain = getDomain(url);
    if (!domain) return;
    
    const faviconSources = [
      `https://www.google.com/s2/favicons?domain=${domain}`,
      `https://favicon.yandex.net/favicon/${domain}`,
      `https://${domain}/favicon.ico`
    ];
    
    const checkFavicon = async () => {
      for (const source of faviconSources) {
        try {
          const response = await fetch(source, { mode: 'no-cors' });
          if (response.ok || true) { 
            setFaviconUrl(source);
            break;
          }
        } catch (e) {
          continue;
        }
      }
    };
    
    checkFavicon();
  }, [url]);
  
  if (!getDomain(url)) {
    return <span>{title || url}</span>;
  }
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="external-url-ref"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
    >
      {faviconUrl && (
        <img 
          src={faviconUrl} 
          alt="" 
          width="16" 
          height="16" 
          style={{ display: 'block' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      )}
      {title || getDomain(url)}
    </a>
  );
};

ExternalUrlRef.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default ExternalUrlRef;