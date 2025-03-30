const Banner = ({ title }: { title: string }) => {
  return (
    <header style={{ margin: `24px` }}>
      <h1 style={{ textAlign: "center" }}>🎮 PixelQuest - {title}</h1>
    </header>
  );
};

export default Banner;
