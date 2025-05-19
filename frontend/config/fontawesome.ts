import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTools,
  faWrench,
  faHammer,
  faSearch,
  faCalendar,
  faCreditCard,
  faCheckCircle,
  faShieldAlt,
  faUserCheck,
  faComments,
  faStar,
  faMapMarkerAlt,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  // Service icons
  faTools,
  faWrench,
  faHammer,
  
  // Workflow icons
  faSearch,
  faCalendar,
  faCreditCard,
  
  // Trust icons
  faCheckCircle,
  faShieldAlt,
  faUserCheck,
  
  // Feature icons
  faComments,
  faStar,
  faMapMarkerAlt,
  
  // Social media icons
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faWhatsappSquare,
  
  // Navigation icons
  faArrowRight
)

// Icon untuk layanan
export const serviceIcons = {
  tools: faTools,
  wrench: faWrench,
  hammer: faHammer,
};

// Icon untuk cara kerja
export const workflowIcons = {
  search: faSearch,
  calendar: faCalendar,
  payment: faCreditCard,
};

// Icon untuk trust badges
export const trustIcons = {
  verified: faCheckCircle,
  secure: faShieldAlt,
  trusted: faUserCheck,
};

// Icon untuk fitur
export const featureIcons = {
  chat: faComments,
  rating: faStar,
  location: faMapMarkerAlt,
};

// Icon social media
export const socialIcons = {
  facebook: faFacebookSquare,
  twitter: faTwitterSquare,
  instagram: faInstagramSquare,
  whatsapp: faWhatsappSquare,
};

// Icon navigasi
export const navigationIcons = {
  'arrow-right': faArrowRight,
}; 