import "./MobileMenu.css";

function MobileMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="mobile-menu">
          <button className="menu-btn home">HOME</button>
          <button className="menu-btn games">GAMES</button>
          <button className="menu-btn forums">FORUMS</button>
          <button className="menu-btn account">PERSONAL ACCOUNT</button>
          <button className="menu-btn search">Search</button>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
