import Image from "next/image";

const Header = () => {
  return (
    <footer className="h-100 relative flex items-end justify-center overflow-hidden bg-[#9FC52E]">
      <div className="bg-custom-radial h-240 w-240 20 -top-45 absolute z-10 rounded-full"></div>
      <Image
        src={"/tree.png"}
        alt="Tree"
        width={230}
        height={230}
        className="z-20"
      />
    </footer>
  );
};

export default Header;
