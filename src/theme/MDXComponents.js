import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import ExternalUrlRef from "@site/src/components/ExternalUrlRef";
import CardHeader from '@site/src/components/Card/CardHeader';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  ExternalUrlRef,
  Card, 
  CardHeader, 
  CardBody,

  Columns,
  Column,
};