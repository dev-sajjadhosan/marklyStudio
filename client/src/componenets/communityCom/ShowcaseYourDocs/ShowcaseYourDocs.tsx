import React from 'react';

type DocShowcase = {
  id: string;
  title: string;
  author: string;
  link: string;
  description?: string;
};

const dummyDocs: DocShowcase[] = [
  { id: 'd1', title: 'Awesome Project README', author: 'devSajjad', link: '#', description: 'Clean, professional README for a web app.' },
];

const ShowcaseYourDocs: React.FC = () => {
  return (
    <section>
      <h2>📚 Showcase Your Docs</h2>
      <div>
        {dummyDocs.map((doc) => (
          <div key={doc.id} style={{ border: '1px solid #ccc', padding: 12, marginBottom: 8 }}>
            <h3>{doc.title}</h3>
            {doc.description && <p>{doc.description}</p>}
            <small>By: {doc.author}</small>
            <br />
            <a href={doc.link} target="_blank" rel="noopener noreferrer">
              View Docs
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseYourDocs;
