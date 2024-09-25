import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <Link href="/" className="navbar-brand">
            <img
              className="header-logo"
              src="https://gcba.github.io/Obelisco-V2/BA.svg"
              alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
            />
          </Link>
          <div className="navbar-login-mobile"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent1"
            aria-controls="navbarContent1"
            aria-expanded="false"
            aria-label="Menú"
          ></button>
          <div className="collapse navbar-collapse" id="navbarContent1">
            <div className="navbar-content">
              <div className="navbar-sections">
                <nav>
                  <p className="navbar-sections-title">Secciones</p>
                  <ul className="nav nav-pills nav-sections">
                    <li className="nav-item">
                      <Link className="nav-link nav-link-lg" href="/">
                        <span>Inicio</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link nav-link-lg" href="/editor">
                        <span>Editor</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </>
  );
};
