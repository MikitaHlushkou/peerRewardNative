import React from 'react';
import Background from './Background';
import Paragraph from './Paragraph';

const NoItemsExist = () => {
  return (
    <Background>
      <Paragraph>There is no items yet</Paragraph>
    </Background>
  );
};

export default NoItemsExist;
