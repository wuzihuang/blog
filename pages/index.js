import Link from 'next/link';

    const posts = [
      { slug: 'first-post', title: 'My First Post', content: 'This is the content of my first post.' },
      { slug: 'second-post', title: 'My Second Post', content: 'This is the content of my second post.' }
    ];

    export default function Home() {
      return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>My Blog</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} legacyBehavior>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
