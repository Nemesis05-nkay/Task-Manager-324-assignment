import { colors } from '../theme';

// 2 from the reference design (Exercise, Study) + 5 original additions.
export const categories = [
  { id: '1', title: 'Exercise', tasks: 12, icon: 'barbell-outline', tint: '#FFE6D9', iconColor: '#F97316' },
  { id: '2', title: 'Study', tasks: 8, icon: 'book-outline', tint: '#E1E9FF', iconColor: '#3B6BF5' },
  { id: '3', title: 'Cooking', tasks: 5, icon: 'restaurant-outline', tint: '#FFEFC2', iconColor: '#D9930B' },
  { id: '4', title: 'Finance', tasks: 6, icon: 'wallet-outline', tint: '#D9F5E4', iconColor: '#12A150' },
  { id: '5', title: 'Music', tasks: 4, icon: 'musical-notes-outline', tint: '#F1DEFF', iconColor: '#8B3DDB' },
  { id: '6', title: 'Travel', tasks: 3, icon: 'airplane-outline', tint: '#D8F3FA', iconColor: '#0E92B5' },
  { id: '7', title: 'Reading', tasks: 9, icon: 'library-outline', tint: '#FFE0EC', iconColor: '#DB2777' },
];

export const categoryPlaceholder = colors.primary;