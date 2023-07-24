const Home = () => {
  return (
    <main className="w-full h-screen grid items-center justify-center bg-gray-900">
      <div className="flex flex-col gap-4">
        <a
          href="/timer"
          className="text-white text-center no-underline py-3 px-4 rounded-md text-xl border-4 border-white bg-blue-500 transition hover:border-blue-500 hover:bg-blue-900"
        >
          Timer
        </a>
        <a
          href="/infinizai"
          className="text-white text-center no-underline py-3 px-4 rounded-md text-xl border-4 border-white bg-blue-500 transition hover:border-blue-500 hover:bg-blue-900"
        >
          Infinizai
        </a>
      </div>
    </main>
  );
};

export default Home;
