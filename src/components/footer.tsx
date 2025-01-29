export default function Footer() {
  return (
    <footer className="p-5 text-center md:text-start">
      <div className="flex md:flex-row flex-col items-center gap-5 justify-center w-full 2xl:max-w-[1500px] mx-auto">
        <div className="font-rye text-[60px] text-primary">LOGO</div>
        <hr className="h-[200px] border-2  border-primary hidden md:inline" />
        <div className="grid gap-5 font-bebas text-primary text-3xl">
          <span>
            <p>Contact Number 1</p>
            <p>Contact Number 2</p>
          </span>
          <p>Email</p>
          <span>
            <p>Addresses</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
