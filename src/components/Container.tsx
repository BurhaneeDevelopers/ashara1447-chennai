import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`my-10 mx-auto px-5 sm:px-10 xl:px-20 ${className}`}>
      {children}
    </div>
  );
}