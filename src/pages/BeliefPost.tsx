import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const markdownFiles = import.meta.glob('../beliefs/*.md', {
  eager: false,
  as: 'raw',
});

export const BeliefPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const filePath = `../beliefs/${slug}.md`;
    if (markdownFiles[filePath]) {
      markdownFiles[filePath]()
        .then((rawContent) => {
          setContent(rawContent);
        })
        .catch(() => setContent('Post not found'));
    } else {
      setContent('Post not found');
    }
  }, [slug]);

  return (
    <div style={{ padding: '2rem' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
