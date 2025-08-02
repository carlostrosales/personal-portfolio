import { Link } from 'react-router-dom';

const blogPosts = [
  { title: 'My First Post', slug: 'my-first-post' },
  { title: 'My Second Post', slug: 'my-second-post' },
];

export const Home = () => {
  return (
    <div
      style={{
        maxWidth: 'calc(min(80ch, round(down, 100%, 1ch)))',
        padding: 'var(--line-height) 2ch',
      }}
    >
      <div>
        <h1>Hey, I'm Carlos!</h1>
        <span>
          I am currently a Software Engineer at General Motors, where I work on
          auto manufacturing plant floor applications to enable operators to
          better build vehicles. I am interested in product engineering,
          distributed systems, and user interfaces. I love tinkering with all
          sorts of technologies.
        </span>
      </div>
      <div>
        <ul style={{ listStyleType: 'square' }}>
          <li>
            <h3>Tools I've built</h3>
            <a href="https://github.com/carlostrosales/llm-comparator">
              llm-comparator
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
