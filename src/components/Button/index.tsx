import React from "react";
import "./index.less";

export interface PropsType {
  size?: 'medium' | 'large' | 'small';
  primary?: boolean;
  mode?: 'primary' | 'secondary' | 'tertiary';
  label?: string;
}

const Button = (props:  PropsType) => {
  const {size = 'medium', primary = false, mode, label, ...otherProps} = props
  return <button
  role="button"
  className={['demo-button', `demo-button--${size}`, mode].join(' ')}
  {...otherProps}
>
  {label}
</button>
};

export default Button