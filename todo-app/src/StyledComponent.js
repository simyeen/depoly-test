import React from 'react';
import styled, { css } from 'styled-components';

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button inverted={true}>안녕하세요</Button>
      <Button inverted={false}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;

const Box = styled.div`
  display: flex;
  padding: 1rem;

  background: ${(props) => props.color || 'blue'};

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;

  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;
