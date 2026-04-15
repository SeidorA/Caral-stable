import React from 'react';
import Avatar from './Avatar';
import type { Icons } from '../icons';

type AvatarStackItem = {
  id: string;
  text?: string;
  property1?: 'Default' | 'info' | 'Aprove' | 'Danger' | 'Warning' | 'gray' | 'Image';
  iconName?: Icons;
  icon?: React.ReactNode | null;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
};

type AvatarStackProps = {
  avatars: AvatarStackItem[];
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg';
  overlap?: number;
  className?: string;
};

export default function AvatarStack({
  avatars,
  maxVisible = 3,
  size = 'md',
  overlap = 10,
  className = '',
}: AvatarStackProps) {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const extraCount = avatars.length - visibleAvatars.length;

  return (
    <div className={`flex items-center ${className}`.trim()}>
      {visibleAvatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className={index > 0 ? 'relative' : 'relative'}
          style={{ marginLeft: index > 0 ? -overlap : 0, zIndex: index + 2 }}
          title={avatar.title}
        >
          <Avatar
            className="border-[3px] border-white"
            property1={avatar.property1 ?? 'Default'}
            size={avatar.size ?? size}
            icon={avatar.icon}
            iconName={avatar.iconName}
            text={avatar.text}
          />
        </div>
      ))}

      {extraCount > 0 && (
        <div className="relative" style={{ marginLeft: visibleAvatars.length > 0 ? -overlap : 0, zIndex: visibleAvatars.length + 1 }}>
          <Avatar
            className="border-[3px] border-white"
            property1="gray"
            size={size}
            text={`+${extraCount}`}
          />
        </div>
      )}
    </div>
  );
}
