import MobileSidebar from "./mobileSidebar";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4 bg-white">
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
