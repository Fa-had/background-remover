const Nav = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-gray-600">
      <a href="#" className="hover:text-gray-800">Remove Background</a>
      <a href="#" className="hover:text-gray-800">Features <i className="fas fa-chevron-down"></i></a>
      <a href="#" className="hover:text-gray-800">For Business <i className="fas fa-chevron-down"></i></a>
      <a href="#" className="hover:text-gray-800">Pricing</a>
    </nav>
  )
};
export default Nav;