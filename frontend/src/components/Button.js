import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 text-sm font-bold leading-normal tracking-wide transition-colors ${className}`}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
