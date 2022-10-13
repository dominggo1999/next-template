import React from 'react';

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactElement | string
} & React.HTMLAttributes<HTMLButtonElement>

const Button = ({ children, size, ...rest }: ButtonProps) => {
  let fontSize;

  switch (size) {
    case 'sm':
      fontSize = 12;
      break;
    case 'md':
      fontSize = 16;
      break;
    case 'lg':
      fontSize = 20;
      break;
    case 'xl':
      fontSize = 24;
      break;
    default:
      break;
  }

  return (
    <button
      style={{ fontSize, padding: '10px 20px' }}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
};

export default Button;
