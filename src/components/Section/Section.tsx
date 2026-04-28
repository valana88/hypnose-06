'use client';

import React from 'react';
import {
  Container,
  SectionWrapper,
  Eyebrow,
  SectionTitle,
  SectionLead,
} from './Section.styles';

export type SectionTone = 'cream' | 'sand' | 'sage' | 'dark';

type SectionProps = {
  tone?: SectionTone;
  narrow?: boolean;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({
  tone = 'cream',
  narrow,
  eyebrow,
  title,
  lead,
  children,
  id,
}: SectionProps) {
  return (
    <SectionWrapper $tone={tone} id={id}>
      <Container $narrow={narrow}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <SectionTitle>{title}</SectionTitle>}
        {lead && <SectionLead>{lead}</SectionLead>}
        {children}
      </Container>
    </SectionWrapper>
  );
}
