import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`m-8 flex flex-col items-center`}>
      <section className='prose md:prose-lg lg:prose-xl prose-gray mb-6'>
        <h1 className='text-center capitalize prose'>
          Software engineer, finance enthusiast & mentor
        </h1>
        <p className='text-center'>I design and code, and I love what I do.</p>
      </section>
      <div
        style={{
          backgroundImage: 'url(self.jpg)',
          backgroundPosition: '100% 25%',
          borderRadius: '50%',
          width: '300px',
          height: '300px',
        }}
        className='bg-cover'
      ></div>
      <section className='prose md:prose-lg lg:prose-xl prose-gray'>
        <a
          className='text-center'
          href='https://docs.google.com/document/d/e/2PACX-1vTm7T3R6sLc9J-Z--72hNthCAuYKSeRh2I5WIjFTkfE09XW9yf3Ql6YilMTXSa_l4dEYb7pSVv3k5gb/pub'
        >
          <p>Resume</p>
        </a>
        <a className='text-center' href='https://talks.tager.cc'>
          <p>Talks</p>
        </a>
      </section>
    </main>
  );
}
