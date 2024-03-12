export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Akash' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Akash's Blog! Here, Akash Singh, a passionate developer, 
            invites you to explore his thoughts and ideas on technology, coding, 
            and everything in between.
            </p>

            <p>
            Dive into weekly articles and tutorials covering web development, 
            software engineering, and various programming languages. 
            Akash is always learning and sharing new insights, so don't forget to 
            check back for fresh content!
            </p>

            <p>
            Join the conversation by leaving comments and interacting with other readers. 
            Together, we can create a vibrant community where learning and collaboration 
            thrive. Welcome aboard!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
