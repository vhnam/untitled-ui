import { type IconName } from '@repo/icons';

export const IconNames: Record<string, IconName[]> = {
  Arrows: ['ArrowBack', 'ArrowDropDown', 'ArrowDropUp', 'ArrowForward'],
  Statuses: ['Cancel', 'CheckCircle', 'Warning'],
  Action: [
    'Close',
    'CreditCard',
    'Delete',
    'Edit',
    'FilterAlt',
    'Notifications',
    'Sort',
  ],
  Features: ['Image', 'Location'],
};

export const ComponentNames: IconName[] = [
  'Checkbox',
  'CheckboxIndeterminate',
  'CheckboxOutline',
  'Radio',
  'RadioOutline',
  'SwitchOff',
  'SwitchOn',
];
