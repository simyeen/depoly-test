import React from 'react';
import Responsive from '../components/common/Responsive';
import Lotte from '../components/common/Lotte';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
      <Lotte />
    </Responsive>
  );
};

export default WritePage;
