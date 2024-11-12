import { getBlogPosts, getPostPreview, formatDate } from 'app/blog/utils';

export const metadata = {
  title: 'Blog',
  description:
    'Dive into Dũng’s blog for fresh takes on branding, consumer psychology, and digital marketing, all with a tech twist. Explore how data-driven solutions and cutting-edge strategies are transforming the marketing game.',
};

export default function Page() {
  const posts = getBlogPosts();

  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>My Blog</h1>
      <div className='space-y-8'>
        {posts.map((post) => (
          <div key={post.slug} className='p-4'>
            <h2 className='font-semibold text-xl mb-2'>
              {post.metadata.title}
            </h2>
            <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
              {formatDate(post.metadata.publishedAt)}
            </p>
            <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
              {getPostPreview(post.content)}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className='text-blue-600 hover:underline'
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
