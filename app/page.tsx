import { BlogPosts } from 'app/components/posts';

export default function Page() {
  const intro = `Hey there, I’m Dũng—a seasoned marketer who's been knee-deep in branding, consumer psychology, and creative strategy for years.

Recently, I took a dive into the world of computer science, mixing tech with marketing like peanut butter and jelly. This combo lets me cook up digital marketing solutions that are not only data-driven but also ahead of the curve.

Here, I’ll be sharing my journey, along with insights into how tech is flipping the marketing game, especially in the fast-paced, ever-changing landscape of Vietnam.`;

  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        Nước Mắm OG: The Marketing Technologist's Playbook
      </h1>
      {intro.split('\n').map((line, index) => (
        <p className='mb-4' key={index}>
          {line}
        </p>
      ))}
      <div className='my-8'>
        <BlogPosts />
      </div>
    </section>
  );
}
