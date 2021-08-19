import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text: children}</FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "텍스트",
  children: null,
  _onClick: () => {},
  is_float: false,
};

const ElButton = styled.button`
  width: 100%;
  background-color: #817f7f;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 500;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border:none;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;
export default Button;
