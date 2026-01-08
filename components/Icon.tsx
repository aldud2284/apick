import React from 'react';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  // Access the icon dynamically
  const LucideIcon = (Icons as any)[name];

  // Fallback if icon doesn't exist
  if (!LucideIcon) {
    // Check for CircleHelp (new name) or HelpCircle (old name) or default to null
    const Fallback = (Icons as any)['CircleHelp'] || (Icons as any)['HelpCircle'];
    
    if (Fallback) {
        return <Fallback {...props} />;
    }
    return null; // Return nothing if no icon matches
  }

  return <LucideIcon {...props} />;
};