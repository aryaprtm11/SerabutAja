import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconType = keyof typeof import('@/config/icons').appStoreIcons | 
  keyof typeof import('@/config/icons').serviceIcons |
  keyof typeof import('@/config/icons').workflowIcons |
  keyof typeof import('@/config/icons').trustIcons |
  keyof typeof import('@/config/icons').navigationIcons |
  keyof typeof import('@/config/icons').socialIcons;

interface IconProps {
  icon: IconDefinition;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x';
  color?: string;
  onClick?: () => void;
}

export const Icon = ({ icon, className = '', size = 'lg', color, onClick }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={`${className} ${color ? `text-${color}` : ''}`}
      size={size}
      onClick={onClick}
    />
  );
};

export default Icon; 