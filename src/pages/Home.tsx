import { Link } from 'react-router-dom';

const blogPosts = [{ title: 'My First Post', slug: 'writing' }];

export const Home = () => {
  return (
    <div
      style={{
        maxWidth: 'calc(min(80ch, round(down, 100%, 1ch)))',
        padding: 'var(--line-height) 2ch',
      }}
    >
      <div
        style={{
          maxWidth: 'calc(min(80ch, round(down, 100%, 1ch)))',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div className="typewriter">
          {' '}
          <h1>Hey, I'm Carlos!</h1>
        </div>

        <span>
          I am currently a Software Engineer at General Motors, where I work on
          auto manufacturing plant floor applications to enable operators to
          better build vehicles. I am interested in product engineering,
          distributed systems, and user interfaces. I love tinkering with all
          sorts of technologies.
        </span>
        <span>
          I'm a software engineer based in Austin, Texas, with a passion for
          building products that are both functional and user-friendly. I love
          creating intuitive solutions that solve real-world problems, and I'm
          currently sharpening my skills as I pursue a Master's in Computer
          Science, specializing in Computing Systems, at Georgia Tech. Beyond
          code, I'm an avid runner—recently conquered my first half marathon and
          now training for a full one—while also enjoying pickleball, lifting
          weights, and tinkering with fresh ideas. I'm always excited to meet
          new people, so let's connect over tech, fitness, or projects we are
          working on!
        </span>
      </div>
      <div>
        <h3>Links</h3>
        <ul style={{ listStyleType: 'square' }}>
          <li>
            {' '}
            <a href="https://www.linkedin.com/in/carlostrosales/">LinkedIn</a>
          </li>
          <li>
            {' '}
            <a href="https://github.com/carlostrosales">GitHub</a>
          </li>
          <li>
            {' '}
            <a href="https://x.com/iamcarlostovias">X</a>
          </li>
        </ul>
        <h3>Tools I've built</h3>
        <ul style={{ listStyleType: 'square' }}>
          <li>
            <a href="https://github.com/carlostrosales/llm-comparator">
              llm-comparator
            </a>
          </li>
        </ul>
        <h3>Blog Posts</h3>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
