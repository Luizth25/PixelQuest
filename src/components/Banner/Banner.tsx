const Banner = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <header style={{ margin: `24px` }}>
      <h1 style={{ textAlign: "center" }}>
        {icon} PixelQuest - {title}
      </h1>
    </header>
  );
};

export default Banner;
