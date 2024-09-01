import { cn } from '@/libs/utils';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
  btnText?: string;
  hrefViewAll?: string;
  onClickButton?: () => void;
  childrenRight?: React.ReactNode;
  classNameHeader?: string;
}
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  btnText,
  hrefViewAll,
  childrenRight,
  classNameHeader,
  onClickButton,
}) => {
  return (
    <div className="border border-card border-solid shadow-card bg-white rounded-md overflow-hidden">
      <div
        className={cn(
          'py-5 flex items-center justify-between px-4 border-b border-solid   border-card',
          classNameHeader
        )}
      >
        <h2 className="text-xl font-mediumBold">{title}</h2>
        {btnText && (
          <Button onClick={onClickButton}> {hrefViewAll ? <Link href={hrefViewAll}>{btnText}</Link> : btnText}</Button>
        )}
        {childrenRight}
      </div>
      <div className="p-5 pb-8">{children}</div>
    </div>
  );
};

export default SectionWrapper;
