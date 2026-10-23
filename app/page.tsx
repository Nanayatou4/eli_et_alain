const navigation = [
  { label: "À propos", href: "#apropos" },
  { label: "Notre carte", href: "#carte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Localisation", href: "#localisation" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Ely et Alain, accueil">
          Ely et Alain
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-phone" href="tel:+221775501742">
          775 501 742
        </a>
      </header>

      <section className="hero" id="accueil" aria-labelledby="hero-title">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/images/background_home.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="hero-eyebrow">Restaurant · Mbour, Sénégal</p>
          <h1 id="hero-title">
            L’Éveil des Sens à <span>Mbour</span>
          </h1>
          <p className="hero-description">
            Découvrez l’authenticité de la cuisine sénégalaise dans un cadre
            chaleureux et convivial, entre terre et mer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#carte">
              Consulter le menu
            </a>
            <a className="button button-outline" href="#apropos">
              Notre histoire
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#apropos" aria-label="Découvrir le restaurant">
          <span />
        </a>
      </section>
    </main>
  );
}
