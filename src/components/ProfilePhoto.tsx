export function ProfilePhoto() {
  return (
    <div
      className='bg-cover mx-auto mb-8 lg:mb-32 rounded-full w-48 h-48 md:w-72 md:h-72'
      style={{
        backgroundImage: 'url(self.jpg)',
        backgroundPosition: '100% 25%',
      }}
    ></div>
  );
}
