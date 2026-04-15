import React from 'react';
import { Button } from './Button';
import type { Icons } from './icons';

export interface TabItem {
  label: string;
  iconName?: Icons;
}

export interface TabsProps {
  tabs: TabItem[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeIndex: controlledActiveIndex,
  onChange,
  className = '',
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = React.useState(controlledActiveIndex ?? 0);

  React.useEffect(() => {
    if (controlledActiveIndex !== undefined) {
      setInternalActiveIndex(controlledActiveIndex);
    }
  }, [controlledActiveIndex]);

  const activeIndex = controlledActiveIndex !== undefined ? controlledActiveIndex : internalActiveIndex;

  const handleTabClick = (index: number) => {
    if (controlledActiveIndex === undefined) {
      setInternalActiveIndex(index);
    }
    onChange?.(index);
  };

  return (
    <div className={`bg-neutral-500 rounded-md p-1 inline-flex gap-1 ${className}`}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          variant="tab"
          size="sm"
          hasBorder={index !== activeIndex}
          onClick={() => handleTabClick(index)}
          iconName={tab.iconName}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};