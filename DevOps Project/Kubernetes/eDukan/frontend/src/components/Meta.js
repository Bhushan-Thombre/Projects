import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to eDukan',
  description: 'Get the highest quality products at the best market rates',
  keywords: 'Electronics, buy electronics, cheap electronics',
};

export default Meta;
