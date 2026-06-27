import { Document, Operation, DemoUser } from './types';

// Helper to generate ISO date strings robustly
const createDateOffset = (months: number) => {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  return d.toISOString();
};

const createDayOffset = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

const nowIso = new Date().toISOString();
const oneMonthAgoIso = createDateOffset(1);
const twoMonthsAgoIso = createDateOffset(2);
const threeMonthsAgoIso = createDateOffset(3);
const fourMonthsAgoIso = createDateOffset(4);
const fiveMonthsAgoIso = createDateOffset(5);
const sixMonthsAgoIso = createDateOffset(6);

const yesterdayIso = createDayOffset(1);
const twoDaysAgoIso = createDayOffset(2);
const threeDaysAgoIso = createDayOffset(3);
const fourDaysAgoIso = createDayOffset(4);
const fiveDaysAgoIso = createDayOffset(5);
const sevenDaysAgoIso = createDayOffset(7);


export const DEMO_USER: DemoUser = {
  id: 'user-2f74c8',
  name: 'Marcus Webb',
  email: 'marcus.webb@example.com',
  role: 'Technical Writer',
  plan: 'Pro',
  avatar: 'MW',
  joinedAt: sixMonthsAgoIso,
};

export const MOCK_DOCUMENTS: Document[] = [
  {
    id: 'doc-8e1f2b',
    title: 'Q3 Security Audit Report Draft',
    content: 'The Q3 security audit identified several critical vulnerabilities in the legacy authentication module. Remediation plans are in progress with a target completion date of October 31st. This document details the findings and proposed solutions.',
    status: 'active',
    createdAt: fourMonthsAgoIso,
    updatedAt: yesterdayIso,
  },
  {
    id: 'doc-4d6c7a',
    title: 'ManusAI Release Notes v1.1.0',
    content: 'This release includes performance optimizations for summarization, a new "formal tone" rephrasing option, and minor UI improvements for document management. Users will experience faster processing times and enhanced text generation capabilities.',
    status: 'active',
    createdAt: twoMonthsAgoIso,
    updatedAt: twoDaysAgoIso,
  },
  {
    id: 'doc-1b9e0c',
    title: 'Internal API Documentation Overview',
    content: 'The internal API serves as the backbone for inter-service communication. This document outlines the core endpoints, data models, authentication mechanisms, and common usage patterns for developers.',
    status: 'active',
    createdAt: sixMonthsAgoIso,
    updatedAt: threeDaysAgoIso,
  },
  {
    id: 'doc-7f3h5g',
    title: 'Project Phoenix - Phase 2 Proposal',
    content: 'Phase 2 of Project Phoenix focuses on extending our core AI capabilities to support advanced code generation. This requires integrating a specialized large language model locally and developing robust testing protocols.',
    status: 'archived',
    createdAt: fiveMonthsAgoIso,
    updatedAt: fiveDaysAgoIso,
  },
  {
    id: 'doc-2a8d9e',
    title: 'New Employee Onboarding Guide',
    content: 'Welcome to the team! This guide will walk you through setting up your development environment, understanding our code standards, and getting familiar with ManusAI workflows. It also covers company culture and benefits.',
    status: 'active',
    createdAt: fiveMonthsAgoIso,
    updatedAt: yesterdayIso,
  },
  {
    id: 'doc-9b3c4f',
    title: 'Marketing Campaign Analysis Q1 2024',
    content: 'A deep dive into the performance of our Q1 marketing campaigns, highlighting key successes in social media engagement and areas for improvement in conversion rates. Includes ROI calculations and future recommendations.',
    status: 'active',
    createdAt: threeMonthsAgoIso,
    updatedAt: twoDaysAgoIso,
  },
  {
    id: 'doc-5g8h1i',
    title: 'Product Roadmap Q4 2024',
    content: 'Our strategic objectives for Q4 include launching the multimodal AI feature, improving API stability, and expanding our integration ecosystem. This document details timelines, key milestones, and resource allocation.',
    status: 'active',
    createdAt: oneMonthAgoIso,
    updatedAt: nowIso,
  },
  {
    id: 'doc-3j6k7l',
    title: 'Legal Compliance Review - GDPR',
    content: 'Comprehensive review of our data handling practices against GDPR requirements. Identified minor areas for process refinement in user data deletion requests and data portability. An action plan is provided.',
    status: 'archived',
    createdAt: sixMonthsAgoIso,
    updatedAt: fourDaysAgoIso,
  },
  {
    id: 'doc-0m2n5p',
    title: 'Customer Feedback Aggregation Report',
    content: 'Analysis of recent customer feedback across support tickets, surveys, and social media. Key themes include requests for more granular control over AI output and improved UI responsiveness. User satisfaction scores are also presented.',
    status: 'active',
    createdAt: oneMonthAgoIso,
    updatedAt: sevenDaysAgoIso,
  },
  {
    id: 'doc-6q9r0s',
    title: 'Server Infrastructure Upgrade Plan',
    content: 'Detailed plan for upgrading our backend server infrastructure to improve scalability and reduce latency. Includes proposed hardware specifications, migration timeline, and contingency plans for service interruption.',
    status: 'active',
    createdAt: twoMonthsAgoIso,
    updatedAt: threeDaysAgoIso,
  },
];

export const MOCK_OPERATIONS: Operation[] = [
  {
    id: 'op-123xyz',
    documentId: 'doc-8e1f2b',
    type: 'summarize',
    input: 'The Q3 security audit identified several critical vulnerabilities...',
    output: 'The Q3 security audit found critical vulnerabilities in the legacy authentication module. Remediation is planned for Oct 31st.',
    status: 'completed',
    createdAt: yesterdayIso,
    updatedAt: yesterdayIso,
  },
  {
    id: 'op-456abc',
    documentId: 'doc-4d6c7a',
    type: 'rephrase',
    input: 'This release includes performance optimizations for summarization, a new "formal tone" rephrasing option, and minor UI improvements...',
    output: 'Performance optimizations for summarization, a new formal tone rephrasing option, and minor UI improvements for document management are included in this release.',
    status: 'completed',
    createdAt: twoDaysAgoIso,
    updatedAt: twoDaysAgoIso,
  },
  {
    id: 'op-789def',
    documentId: 'doc-1b9e0c',
    type: 'generate',
    input: 'Write a brief introduction for internal API documentation.',
    output: 'This document provides an overview of our internal API, which facilitates communication between services. It details key endpoints, data models, and authentication methods.',
    status: 'completed',
    createdAt: threeDaysAgoIso,
    updatedAt: threeDaysAgoIso,
  },
  {
    id: 'op-012ghi',
    documentId: 'doc-8e1f2b',
    type: 'summarize',
    input: 'The Q3 security audit identified several critical vulnerabilities in the legacy authentication module. Remediation plans are in progress with a target completion date of October 31st...',
    output: 'The Q3 security audit found several critical vulnerabilities. Remediation is underway, targeting October 31st completion.',
    status: 'completed',
    createdAt: fourDaysAgoIso,
    updatedAt: fourDaysAgoIso,
  },
  {
    id: 'op-345jkl',
    documentId: 'doc-2a8d9e',
    type: 'rephrase',
    input: 'Welcome to the team! This guide will walk you through setting up your development environment, understanding our code standards...',
    output: 'Team members are welcomed and guided through development environment setup, code standards, and ManusAI workflows.',
    status: 'completed',
    createdAt: fiveDaysAgoIso,
    updatedAt: fiveDaysAgoIso,
  },
  {
    id: 'op-678mno',
    documentId: 'doc-9b3c4f',
    type: 'summarize',
    input: 'A deep dive into the performance of our Q1 marketing campaigns, highlighting key successes in social media engagement and areas for improvement in conversion rates...',
    output: 'Q1 marketing campaign analysis shows social media success and areas for conversion improvement.',
    status: 'completed',
    createdAt: sevenDaysAgoIso,
    updatedAt: sevenDaysAgoIso,
  },
  {
    id: 'op-901pqr',
    documentId: 'doc-5g8h1i',
    type: 'generate',
    input: 'Outline Q4 product roadmap goals.',
    output: 'Q4 product roadmap goals include launching multimodal AI, improving API stability, and expanding integration.',
    status: 'completed',
    createdAt: oneMonthAgoIso,
    updatedAt: oneMonthAgoIso,
  },
  {
    id: 'op-234stu',
    documentId: 'doc-3j6k7l',
    type: 'summarize',
    input: 'Comprehensive review of our data handling practices against GDPR requirements. Identified minor areas for process refinement in user data deletion requests...',
    output: 'GDPR compliance review found minor process refinements needed for user data deletion requests.',
    status: 'completed',
    createdAt: twoMonthsAgoIso,
    updatedAt: twoMonthsAgoIso,
  },
  {
    id: 'op-567vwx',
    documentId: 'doc-0m2n5p',
    type: 'rephrase',
    input: 'Analysis of recent customer feedback across support tickets, surveys, and social media. Key themes include requests for more granular control over AI output and improved UI responsiveness...',
    output: 'Customer feedback indicates a desire for more AI output control and improved UI responsiveness.',
    status: 'completed',
    createdAt: oneMonthAgoIso,
    updatedAt: oneMonthAgoIso,
  },
  {
    id: 'op-890yza',
    documentId: 'doc-6q9r0s',
    type: 'generate',
    input: 'Create a title for a server infrastructure upgrade plan.',
    output: 'Server Infrastructure Upgrade Plan for Enhanced Scalability and Reduced Latency',
    status: 'completed',
    createdAt: threeMonthsAgoIso,
    updatedAt: threeMonthsAgoIso,
  },
];