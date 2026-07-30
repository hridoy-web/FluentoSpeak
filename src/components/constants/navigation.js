import { MessageSquare, Users, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Speaking English', href: '/speaking', icon: MessageSquare },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Vocabulary', href: '/vocabulary', icon: BookOpen },
  { name: 'Grammar', href: '/grammar', icon: GraduationCap },
  { name: 'Freelancing English', href: '/freelancing', icon: Briefcase },
];

export const COURSE_DROPDOWN_LINKS = [
  { 
    name: 'Vocabulary', 
    href: '/vocabulary', 
    icon: BookOpen, 
    desc: 'Expand your word power daily' 
  },
  { 
    name: 'Grammar', 
    href: '/grammar', 
    icon: GraduationCap, 
    desc: 'Master essential sentence rules' 
  },
  { 
    name: 'Freelancing English', 
    href: '/freelancing', 
    icon: Briefcase, 
    desc: 'Client communication & proposals' 
  },
];