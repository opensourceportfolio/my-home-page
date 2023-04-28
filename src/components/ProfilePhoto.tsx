export function ProfilePhoto() {
  return (
    <div
      className='bg-cover mx-auto mb-8 lg:mb-32 rounded-full w-72 h-72'
      style={{
        backgroundImage: 'url(self.jpg)',
        backgroundPosition: '100% 25%',
      }}
    ></div>
  );
}
