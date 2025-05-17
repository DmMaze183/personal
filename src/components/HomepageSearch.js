import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from '@docusaurus/router';
import { Search } from 'lucide-react';
import styles from './HomepageSearch.module.css';

export default function HomepageSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    history.push({
      pathname: '/search',
      search: `?q=${encodeURIComponent(searchQuery)}`,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <Search className={styles.searchIcon} size={20} />
        <input
          ref={searchInputRef}
          type="text"
          className={styles.searchBox}
          placeholder="Searching..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Searching"
        />
        <div className={styles.keyboardShortcut}>
          <kbd className={styles.kbd}>Ctrl</kbd>
          <span>+</span>
          <kbd className={styles.kbd}>K</kbd>
        </div>
      </form>
    </div>
  );
}