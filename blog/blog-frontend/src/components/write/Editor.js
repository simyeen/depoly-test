import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input``;

const QuillWrapper = styled.div``;

const Editor = () => {
  return <EditorBlock></EditorBlock>;
};

export default Editor;
