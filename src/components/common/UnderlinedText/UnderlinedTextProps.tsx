import * as React from 'react';

export interface UnderlinedTextProps {
  children: React.ReactNode;
  color?:
    | 'blueSticky'
    | 'blueStickyBright'
    | 'roseSticky'
    | 'redSticky'
    | 'yellowSticky'
    | 'yellowStickyLight'
    | 'accent';
}
