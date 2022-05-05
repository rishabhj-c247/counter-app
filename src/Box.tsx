import * as React from 'react';

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Box: React.FC<IProps> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Box;
