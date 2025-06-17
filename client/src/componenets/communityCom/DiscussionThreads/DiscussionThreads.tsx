import React from 'react';

type Thread = {
  id: string;
  title: string;
  author: string;
  replies: number;
};

const dummyThreads: Thread[] = [
  { id: 'th1', title: 'Best practices for README.md', author: 'marklyUser', replies: 12 },
  { id: 'th2', title: 'Using AI to generate docs', author: 'aiFan', replies: 8 },
];

const DiscussionThreads: React.FC = () => {
  return (
    <section>
      <h2>💬 Discussion Threads</h2>
      <ul>
        {dummyThreads.map((thread) => (
          <li key={thread.id} style={{ marginBottom: 10 }}>
            <strong>{thread.title}</strong> - by {thread.author} ({thread.replies} replies)
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DiscussionThreads;
