import { HelpCircle, QrCode, Clock, Shield, CreditCard, User } from 'lucide-react';

export function renderCategoryIcon(iconName) {
  const props = { size: 18, className: 'text-[#016970]' };
  switch (iconName) {
    case 'QrCode': return <QrCode {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'CreditCard': return <CreditCard {...props} />;
    case 'User': return <User {...props} />;
    case 'HelpCircle':
    default: return <HelpCircle {...props} />;
  }
}
