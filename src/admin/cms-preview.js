import React from 'react';
import CMS from 'netlify-cms-app';
import 'your-main-stylesheet.css'; // Import your site's main stylesheet

// Create a custom preview component
const CustomPagePreview = ({ entry }) => {
  const title1 = entry.getIn(['data', 'title']);
  const title2 = entry.getIn(['data', 'course']);
  const code = entry.getIn(['data', 'body']);

  return (
    <div>
      <h1>{title1}</h1>
      <h2>{title2}</h2>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

// Register the custom preview component
CMS.registerPreviewTemplate('page', CustomPagePreview);
