export const metadata = {
  title: 'Let’s Chat!',
  description: 'Don’t be shy—drop me a line and let’s connect!',
};

export default function Page() {
  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>
        Get in touch!
      </h1>
      <p className='text-lg mb-4'>
        Got a question, a proposal, or just feel like saying hey? I’m all ears!
        Drop me a line anytime—I’d love to connect.
      </p>
      <p className='text-lg'>
        Email:{' '}
        <a href='mailto:tran.dung@hotmail.com' className='text-blue-600'>
          tran.dung@hotmail.com
        </a>
      </p>
    </section>
  );
}
