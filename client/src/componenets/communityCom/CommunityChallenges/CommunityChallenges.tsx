import React from 'react';

type Challenge = {
  id: string;
  title: string;
  description: string;
  deadline: string;
};

const dummyChallenges: Challenge[] = [
  {
    id: 'c1',
    title: 'Best README of the Month',
    description: 'Submit your best README created with Markly to win virtual badges.',
    deadline: '2025-07-31',
  },
];

const CommunityChallenges: React.FC = () => {
  return (
    <section>
      <h2>🏆 Community Challenges</h2>
      <ul>
        {dummyChallenges.map((challenge) => (
          <li key={challenge.id} style={{ marginBottom: 10 }}>
            <strong>{challenge.title}</strong> — {challenge.description} (Deadline: {challenge.deadline})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommunityChallenges;
