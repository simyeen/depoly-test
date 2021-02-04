import React from 'react';
import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import Lotte from '../components/common/Lotte';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <Lotte />
    </Responsive>
  );
};

export default WritePage;
