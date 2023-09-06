import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="col-lg-8 col-md-10  d-flex justify-content-evenly my-4 mx-auto">
        <div>
          <img src="/img/Logo.svg" alt="Logo lemon"/>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;