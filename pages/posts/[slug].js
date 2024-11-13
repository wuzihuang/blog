import { useRouter } from 'next/router';

    const posts = {
      'first-post': { title: 'My First Post', content: 'This is the content of my first post.' },
      'second-post': { title: 'My Second Post', content: 'This is the content of my second post.' }
    };

    export default function Post() {
      const router = useRouter();
      const { slug } = router.query;
      const post = posts[slug];

      if (!post) {
        return <p>Post not found!</p>;
      }

      return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      );
    }
