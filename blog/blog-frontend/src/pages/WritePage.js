import React from 'react';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import Lotte from '../components/common/Lotte';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
      <Lotte />
    </Responsive>
  );
};

export default WritePage;
