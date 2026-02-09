https://petercwilson.github.io/netplus-arcade/# NetPlus Arcade

NetPlus Arcade is a gamified learning platform designed to help users master CompTIA Network+ concepts in a fun and interactive way. Styled with a retro 80's arcade theme, this application provides various tools to make studying for your certification an engaging experience.

## Features

- **Interactive Flashcards**: Learn key networking terms and definitions with flippable cards.
- **Scenario-Based Quizzes**: Test your knowledge with practical, real-world network scenarios.
- **Progress Tracking**: Monitor your learning journey and unlock achievements as you master concepts.
- **Quick-Reference Glossary**: Easily look up networking terms and concepts.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI**: [React](https://reactjs.org/) with [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your_username/your_repository.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is configured for deployment to GitHub Pages.

1.  Update the `homepage` field in `package.json` with your GitHub repository URL.
2.  Run the deployment script:
    ```sh
    npm run deploy
    ```
This will build the application and push the static files to the `gh-pages` branch of your repository.
