function Home() {
    return (
    <div className="mx-2">
      <h1 className="text-xl font-medium px-2">Home Page</h1>
      <div className="m-4 p-4 border-2 border-indigo-400 rounded">
        <p className="text-2xl font-bold mb-4">Welcome!</p>
        <img
          src="https://picsum.photos/400/200"
          alt="welcome"
          className="rounded"
        />
      </div>
    </div>
  );
}

export default Home;
