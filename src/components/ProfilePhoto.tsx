export function ProfilePhoto() {
  return (
    <div
      className='bg-cover mx-auto mb-32 rounded-full'
      style={{
        backgroundImage: 'url(self.jpg)',
        backgroundPosition: '100% 25%',
        width: '300px',
        height: '300px',
      }}
    ></div>
  );
}
