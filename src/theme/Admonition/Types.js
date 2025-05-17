import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import SupportIcon from '@site/static/img/support.svg';

function support({children }) {
  return (
    <div className="supportblock">
      <SupportIcon title="Support Icon" className="support-icon" />
      {children}
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'support': support,
};

export default AdmonitionTypes;