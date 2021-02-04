import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/write/Editor';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector((write) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [],
  );

  useEffect(() => {
    return () => dispatch(initialize());
  }, [dispatch]);

  return <Editor onChangeField={changeField} title={title} body={body} />;
};

export default EditorContainer;
