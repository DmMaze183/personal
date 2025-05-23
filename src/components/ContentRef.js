import React from 'react';
import clsx from 'clsx';
import FileIcon from '@site/static/img/file-text.svg';

export default function ContentRef({ children, url }) {
  return (
    <a 
      href={url} 
      className="content-ref-card" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FileIcon title="File Icon" className="file-icon" />
      {children}
    </a>
  );
}