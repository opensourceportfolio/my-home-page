import { Inter } from 'next/font/google';
import Image from 'next/image';

import { BottomShade } from '@/components/BottomShade';
import { ProfilePhoto } from '@/components/ProfilePhoto';
import { TopShade } from '@/components/TopShade';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-white'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <TopShade />

        <div className='mx-auto max-w-2xl py-32'>
          <div className='text-center'>
            <ProfilePhoto />
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Software engineer, finance enthusiast & mentor
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              I design and code, and I love what I do.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='https://docs.google.com/document/d/1OdMB6-cdY1zlMfW1XX5vXUN2lUNd9eopZmR57p31zSg/edit?usp=sharing'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Resume
              </a>
              <a
                href='https://talks.tager.cc'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Tech talks <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <BottomShade />
      </div>
    </div>
  );
}
