import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  icon: IconDefinition;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x';
  color?: string;
  onClick?: () => void;
}

const Icon = ({ icon, className = '', size = 'lg', color, onClick }: IconProps) => {
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