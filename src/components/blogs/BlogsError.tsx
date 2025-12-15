interface BlogsErrorProps {
  error?: string;
}

export default function BlogsError({ error }: BlogsErrorProps) {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-red-600 mb-4'>Error Loading Blogs</h2>
        <p className='text-gray-600'>Please try again later.</p>
        {error && <p className='text-sm text-gray-500 mt-2'>{error}</p>}
      </div>
    </div>
  );
}
