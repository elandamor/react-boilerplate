import * as React from 'react';

import {
  AccordionAccordionProps,
  default as AccordionAccordion,
} from './AccordionAccordion';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

export interface AccordionProps extends AccordionAccordionProps {
  [key: string]: any;

  /** Additional classes. */
  className?: string;

  /** Format to take up the width of its container. */
  fluid?: boolean;

  /** Format for dark backgrounds. */
  inverted?: boolean;

  /** Adds some basic styling to accordion panels. */
  styled?: boolean;
}

interface AccordionComponent extends React.ComponentClass<AccordionProps> {
  Accordion: typeof AccordionAccordion;
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

declare const Accordion: AccordionComponent;

export default Accordion;
