export const Header = () => {
  return (
    <header className="sticky top-0 w-full h-16 flex justify-between items-center">
      <a href="/" className="w-20">
        <p>Heojoooon</p>
      </a>
      <div className="flex w-1/3 justify-evenly">
        <a href="https://github.com/hjy0951">
          <p>GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%ED%97%88-159288250/">
          <p>LinkedIn</p>
        </a>
        <a href="https://www.instagram.com/heojoooon/">
          <p>instagram</p>
        </a>
        <button>Mode</button>
      </div>
    </header>
  );
};
