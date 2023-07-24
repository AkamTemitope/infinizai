const Wrapper = (Component) =>
  function HOC() {
    return (
      <div className="w-full h-full max-w-[1440px]">
        <Component />
      </div>
    );
  };

export default Wrapper;
