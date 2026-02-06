import type {
  Flashcard,
  QuizQuestion,
  Achievement,
  GlossaryTerm,
} from '@/lib/definitions';

export const flashcards: Flashcard[] = [
  {
    id: 1,
    term: 'OSI Model',
    definition:
      'A conceptual framework used to understand network interactions in seven layers.',
  },
  {
    id: 2,
    term: 'TCP/IP Model',
    definition:
      'A four-layer conceptual model for network communications, and the protocol suite used on the internet.',
  },
  {
    id: 3,
    term: 'MAC Address',
    definition:
      'A unique identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment.',
  },
  {
    id: 4,
    term: 'IP Address',
    definition:
      'A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.',
  },
  {
    id: 5,
    term: 'Subnet Mask',
    definition:
      'A 32-bit number that masks an IP address and divides the IP address into a network address and host address.',
  },
];

export const quizzes: QuizQuestion[] = [
  {
    id: 1,
    scenario:
      "A user reports they cannot access the company's internal website. You can ping the web server's IP address successfully from the user's computer.",
    question: 'Which OSI layer is most likely the source of the problem?',
    options: [
      'Layer 1 (Physical)',
      'Layer 3 (Network)',
      'Layer 4 (Transport)',
      'Layer 7 (Application)',
    ],
    correctAnswer: 'Layer 7 (Application)',
    explanation:
      'Since you can ping the server (Layer 3), the network connectivity is fine. The issue is likely with an application-layer protocol like HTTP or DNS.',
  },
  {
    id: 2,
    scenario:
      'You are setting up a new small office network. You need to choose a cable type that can support 1 Gbps speeds over 90 meters.',
    question: 'Which Ethernet cable category should you use?',
    options: ['Cat 5', 'Cat 5e', 'Cat 6', 'Cat 3'],
    correctAnswer: 'Cat 6',
    explanation:
      'Cat 6 is rated for 1 Gbps speeds up to 100 meters and provides better performance and less crosstalk than Cat 5e, making it a good choice for new installations.',
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    name: 'First Flip',
    description: 'Complete your first flashcard session.',
    unlocked: true,
  },
  {
    id: 2,
    name: 'Quiz Whiz',
    description: 'Score 100% on a mini-quiz.',
    unlocked: false,
  },
  {
    id: 3,
    name: 'Concept Collector',
    description: 'Review 10 different flashcards.',
    unlocked: true,
  },
  {
    id: 4,
    name: 'Scenario Survivor',
    description: 'Complete your first scenario-based quiz.',
    unlocked: false,
  },
  {
    id: 5,
    name: 'Glossary Guru',
    description: 'Look up 5 terms in the glossary.',
    unlocked: false,
  },
  {
    id: 6,
    name: 'Network Novice',
    description: 'Master 5 concepts.',
    unlocked: true,
  },
];

export const glossary: GlossaryTerm[] = [
  ...flashcards,
  {
    id: 6,
    term: 'DHCP',
    definition:
      'Dynamic Host Configuration Protocol. A network management protocol used on IP networks for automatically assigning IP addresses and other communication parameters to devices connected to the network.',
  },
  {
    id: 7,
    term: 'DNS',
    definition:
      'Domain Name System. The hierarchical and decentralized naming system used to identify computers, services, and other resources reachable through the Internet or other Internet Protocol networks.',
  },
  {
    id: 8,
    term: 'Firewall',
    definition:
      'A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
  },
  {
    id: 9,
    term: 'VPN',
    definition:
      'Virtual Private Network. Extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.',
  },
];
