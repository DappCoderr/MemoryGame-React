export default Error = () => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <h1 className="text-9xl font-black text-red-600 animate-bounce drop-shadow-2xl">
        404
      </h1>
      <p className="absolute text-2xl font-medium text-red-800 mt-40">
        Page Not Found
      </p>
    </div>
  );
};
