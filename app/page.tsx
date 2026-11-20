import Image from "next/image";
import MenuSection from "./menu-section";
import ResponsiveNavigation from "./responsive-navigation";

const navigation = [
  { label: "À propos", href: "#apropos" },
  { label: "Plats du jour", href: "#plats-du-jour" },
  { label: "Notre carte", href: "#carte" },
  { label: "Boissons", href: "#boissons" },
  { label: "Desserts", href: "#desserts" },
  { label: "Galerie", href: "#galerie" },
  { label: "Localisation", href: "#localisation" },
  { label: "Contact", href: "#contact" },
];

const googleReviews = [
  {
    id: "orlane-gilot",
    author: "Orlane Gilot",
    date: "Il y a 9 mois",
    text: "Chez Ely, on se sent comme à la maison. Cela fait des années que nous venons, et revenir ici est toujours un vrai bonheur. […] Sa cuisine, que ce soit poisson ou viande, est toujours fraîche, généreuse et délicieuse. Les prix sont très corrects.",
  },
  {
    id: "camille-haesaert",
    author: "Camille Haesaert",
    date: "Il y a 8 mois",
    text: "Chez Ely est rapidement devenu notre cantine préférée pour le midi, tous les plats sont généreux et délicieux et Ely toujours si accueillante.",
  },
  {
    id: "florence-le-calvez",
    author: "Florence Le Calvez",
    date: "Il y a 5 mois",
    text: "Très bon accueil ! Et une cuisine délicieuse",
  },
] as const;

const dailyDishes = [
  "Thiéboudienne",
  "Mafé à la viande",
  "Caldou",
  "Thiébou guinar ou yap",
  "C'est bon",
  "Soupe",
  "Mbakhalou Saloum",
];

const secondaryDrinks = [
  { name: "Bières", illustration: "beer" },
  { name: "Sodas", illustration: "soda" },
  { name: "Thé", illustration: "tea" },
  { name: "Vins", illustration: "wine" },
  { name: "Eau minérale", illustration: "water" },
] as const;

type DrinkIllustrationKind = "beer" | "soda" | "tea" | "wine" | "water" | "cocktail" | "juice";

const drinkPhotos: Record<DrinkIllustrationKind, { src: string; alt: string; width: number; height: number }> = {
  beer: { src: "/images/biere.jpeg", alt: "Bière servie fraîche", width: 534, height: 800 },
  soda: { src: "/images/soda.jpeg", alt: "Soda servi frais", width: 736, height: 1104 },
  tea: { src: "/images/the.jpeg", alt: "Tasse de thé", width: 736, height: 474 },
  wine: { src: "/images/vins.jpeg", alt: "Verres de vin", width: 236, height: 360 },
  water: { src: "/images/eau.jpeg", alt: "Eau minérale", width: 541, height: 1036 },
  cocktail: { src: "/images/cocktail.jpeg", alt: "Cocktail maison", width: 736, height: 1308 },
  juice: { src: "/images/jus-locaux.jpeg", alt: "Jus locaux", width: 736, height: 1307 },
};

function DrinkIllustration({ kind }: { kind: DrinkIllustrationKind }) {
  const common = { viewBox: "0 0 100 100", className: "drink-illustration drink-illustration-" + kind, "aria-hidden": true as const };

  switch (kind) {
    case "beer":
      return <svg {...common}><path d="M28 32h34v48H28zM62 40h9a8 8 0 0 1 0 16h-9M28 47h34" /><path d="M30 31c-5-2-4-9 1-10 0-7 10-8 13-2 4-6 13-3 13 3 7-1 9 8 3 10" /><path d="M40 53v18m11-18v18" /></svg>;
    case "soda":
      return <svg {...common}><path d="M37 19h26l-3 65H34l3-65Zm3 0v-6h20l3 6M36 30h26M36 72h23" /><path d="m55 15 10-9M47 40v17m0 0 7-7" /></svg>;
    case "tea":
      return <svg {...common}><path d="M22 45h48v10a19 19 0 0 1-19 19H41a19 19 0 0 1-19-19V45Zm48 5h7a8 8 0 0 1 0 16h-9M17 80h61" /><path d="M37 35c-7-7 6-9 0-17m15 17c-7-7 6-9 0-17" /></svg>;
    case "wine":
      return <svg {...common}><path d="M28 14h19v22c0 10-4 16-10 19v17h12v8H25v-8h12V55c-6-3-9-9-9-19V14Zm35 3h14v18c0 8-3 13-7 16v21h10v7H53v-7h10V51c-5-3-7-8-7-16V17Z" /><path d="M29 35h17M58 33h18" /></svg>;
    case "water":
      return <svg {...common}><path d="M35 18h24v9l5 7v47H30V34l5-7v-9Zm5 0v-7h14v7M31 42h31" /><path d="M68 53h18l-2 28H70l-2-28Zm3 8h12" /></svg>;
    case "cocktail":
      return <svg {...common}><path d="M24 17h54L53 48v24h15v8H32v-8h15V48L24 17Z" /><path d="m31 26 36 0M45 37l8 7 7-8M68 12l9-8M72 12l7 3" /><circle cx="70" cy="27" r="9" /><path d="M70 19v16M62 27h16M64.5 21.5l11 11m0-11-11 11" /></svg>;
    case "juice":
      return <svg {...common}><path d="M27 32h45l-5 49H32l-5-49Zm7 0-5-12h38l-5 12M42 20l-5-9" /><circle cx="66" cy="66" r="14" /><path d="M66 52v28M52 66h28M56 56l20 20m0-20L56 76M66 52c0-10 8-15 17-14-1 9-7 14-17 14Z" /></svg>;
  }
}

function DrinkVisual({ kind, label, large = false }: { kind: DrinkIllustrationKind; label: string; large?: boolean }) {
  const photo = drinkPhotos[kind];

  return (
    <div
      className={"drink-visual" + (large ? " drink-visual-large" : "")}
      role={photo ? undefined : "img"}
      aria-label={photo ? undefined : label}
    >
      {photo ? (
        <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={large ? "(max-width: 760px) 80vw, 38vw" : "(max-width: 760px) 40vw, 18vw"} />
      ) : (
        <DrinkIllustration kind={kind} />
      )}
      {!photo && <span className="drink-visual-note">Illustration</span>}
    </div>
  );
}

const dessertPhotos = [
  {
    src: "/images/banane_flambee.jpeg",
    alt: "Banane flambée au miel",
    width: 736,
    height: 1104,
  },
  {
    src: "/images/salade_fruits.jpeg",
    alt: "Salade de fruits exotiques",
    width: 736,
    height: 920,
  },
  {
    src: "/images/glace_artisanale.jpeg",
    alt: "Glaces artisanales",
    width: 736,
    height: 1104,
  },
];

const dailyDishPhotos: Partial<Record<(typeof dailyDishes)[number], { src: string; alt: string; width: number; height: number }>> = {
  Thiéboudienne: { src: "/images/thiéboudieune .jpeg", alt: "Illustration du Thiéboudienne", width: 736, height: 1104 },
  "Mafé à la viande": { src: "/images/Mafé.jpeg", alt: "Illustration du Mafé à la viande", width: 736, height: 786 },
  Caldou: { src: "/images/caldou.jpeg", alt: "Illustration du Caldou", width: 474, height: 480 },
  "Thiébou guinar ou yap": { src: "/images/thiebou-guinar.jpeg", alt: "Illustration du Thiébou guinar ou yap", width: 600, height: 728 },
  "C'est bon": { src: "/images/cbon.jpeg", alt: "Illustration du plat « C'est bon »", width: 361, height: 640 },
  Soupe: { src: "/images/soupe.jpeg", alt: "Illustration de la soupe", width: 736, height: 736 },
  "Mbakhalou Saloum": { src: "/images/mbaxalou-saloum.jpeg", alt: "Illustration du Mbakhalou Saloum", width: 360, height: 640 },
};

function DailyDishCard({
  dish,
  index,
  featured = false,
  compact = false,
}: {
  dish: (typeof dailyDishes)[number];
  index: number;
  featured?: boolean;
  compact?: boolean;
}) {
  const photo = dailyDishPhotos[dish];
  const cardClass = featured ? "daily-card-featured" : compact ? "daily-card-compact" : "";
  const imageSize = featured
    ? "(max-width: 600px) 100vw, (max-width: 1000px) 92vw, 62vw"
    : "(max-width: 600px) 100vw, (max-width: 1000px) 45vw, 28vw";

  return (
    <article className={`daily-card ${cardClass}`}>
      <div className={`daily-photo-slot${photo ? " has-photo" : ""}`}>
        {photo ? (
          <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={imageSize} />
        ) : (
          <span>Photo à venir</span>
        )}
      </div>
      <div className="daily-card-info">
        <span className="daily-card-number">{String(index + 1).padStart(2, "0")}</span>
        <h3>{dish}</h3>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Ely et Alain, accueil">
          Ely et Alain
        </a>

        <ResponsiveNavigation links={navigation} />

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

      <section className="about-section" id="apropos" aria-labelledby="about-title">
        <div className="about-photos">
          <div className="about-photo about-photo-interior">
            <Image
              src="/images/atable.jpeg"
              alt="Salle chaleureuse du restaurant Ely et Alain"
              width={1200}
              height={1600}
              sizes="(max-width: 760px) 45vw, 260px"
            />
          </div>
          <div className="about-photo about-photo-dish">
            <Image
              src="/images/plat-grillade.jpeg"
              alt="Brochette grillée accompagnée de frites"
              width={1064}
              height={1080}
              sizes="(max-width: 760px) 42vw, 240px"
            />
          </div>
          <div className="rating-card" aria-label="Note de 4,6 sur 5">
            <strong>4.6 <span aria-hidden="true">★★★★★</span></strong>
            <small>AVIS GOOGLE &amp; TRIPADVISOR</small>
          </div>
        </div>

        <div className="about-copy">
          <p className="section-kicker">Bienvenue chez Ely et Alain</p>
          <h2 id="about-title">Plus qu’un restaurant, une tradition familiale.</h2>
          <p>
            Situé sur la Route de l’Hôpital à Mbour, notre établissement vous
            accueille dans une atmosphère authentique où chaque plat raconte
            une histoire. Notre cuisine met à l’honneur les spécialités
            africaines et européennes, préparées avec les produits frais du
            marché et la pêche du jour.
          </p>
          <p>
            Que vous soyez de passage ou résident, venez savourer nos grillades
            au feu de bois et nos spécialités de la mer sur notre terrasse
            ombragée par les palmiers.
          </p>
          <p className="about-identity">Tradition, Saveurs &amp; Convivialité</p>
          <ul className="about-values" aria-label="Nos engagements">
            <li><span aria-hidden="true">✦</span>Frais</li>
            <li><span aria-hidden="true">♨</span>Fait maison</li>
            <li><span aria-hidden="true">☀</span>Terrasse</li>
          </ul>
        </div>
      </section>

      <section className="catalog-section daily-section" id="plats-du-jour" aria-labelledby="daily-title">
        <div className="catalog-inner">
          <header className="catalog-heading">
            <p className="section-kicker">Spécialités du moment</p>
            <h2 id="daily-title">Nos Plats du Jour</h2>
            <span className="heading-underline" />
            <p>Découvrez nos spécialités locales et laissez-vous tenter par les saveurs de la cuisine africaine.</p>
          </header>
          <div className="daily-feature-layout">
            <DailyDishCard dish={dailyDishes[0]} index={0} featured />
            <div className="daily-featured-stack">
              {dailyDishes.slice(1, 3).map((dish, index) => (
                <DailyDishCard dish={dish} index={index + 1} key={dish} compact />
              ))}
            </div>
          </div>
          <div className="daily-supporting-grid">
            {dailyDishes.slice(3).map((dish, index) => (
              <DailyDishCard dish={dish} index={index + 3} key={dish} compact />
            ))}
          </div>
          <div className="daily-menu-action">
            <a className="button button-primary" href="#carte">Découvrir toute notre carte</a>
          </div>
        </div>
      </section>

      <MenuSection />

      <section className="catalog-section drinks-section" id="boissons" aria-labelledby="drinks-title">
        <div className="catalog-inner">
          <header className="catalog-heading">
            <p className="section-kicker">À partager à table</p>
            <h2 id="drinks-title">Nos boissons</h2>
            <span className="heading-underline" />
            <p>Des boissons pour accompagner vos repas et prolonger vos moments de convivialité.</p>
          </header>
          <div className="drinks-layout">
            <article className="drink-feature-card">
              <div className="drink-feature-art">
                <DrinkVisual kind="cocktail" label="Illustration de cocktail maison" large />
                <DrinkVisual kind="juice" label="Illustration de jus local" large />
              </div>
              <div className="drink-feature-copy">
                <p>Nos créations maison</p>
                <h3>Cocktails &amp; Jus locaux</h3>
                <div className="drink-feature-categories">
                  <span>Cocktails maison</span>
                  <span>Jus locaux</span>
                </div>
                <span className="drink-feature-description">Des boissons rafraîchissantes pour accompagner vos moments de partage.</span>
              </div>
            </article>
            <div className="drinks-grid">
              {secondaryDrinks.map((drink) => (
                <article className={"drink-tile drink-tile-" + drink.illustration} key={drink.name}>
                  <DrinkVisual kind={drink.illustration} label={"Illustration de " + drink.name.toLowerCase()} />
                  <h3>{drink.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section desserts-section" id="desserts" aria-labelledby="desserts-title">
        <div className="catalog-inner">
          <header className="catalog-heading desserts-heading">
            <p className="section-kicker">Pour finir en douceur</p>
            <h2 id="desserts-title">Nos Desserts</h2>
            <span className="heading-underline" />
          </header>
          <div className="catalog-grid desserts-grid">
            <article className="catalog-card dessert-card">
              <div className="dessert-photo-frame">
                <Image src={dessertPhotos[0].src} alt={dessertPhotos[0].alt} width={dessertPhotos[0].width} height={dessertPhotos[0].height} sizes="(max-width: 560px) 92vw, (max-width: 900px) 44vw, (max-width: 1360px) 28vw, 410px" />
              </div>
              <h3>Banane flambée au miel</h3>
            </article>
            <article className="catalog-card dessert-card">
              <div className="dessert-photo-frame">
                <Image src={dessertPhotos[1].src} alt={dessertPhotos[1].alt} width={dessertPhotos[1].width} height={dessertPhotos[1].height} sizes="(max-width: 560px) 92vw, (max-width: 900px) 44vw, (max-width: 1360px) 28vw, 410px" />
              </div>
              <h3>Salade de fruits exotiques</h3>
            </article>
            <article className="catalog-card dessert-card">
              <div className="dessert-photo-frame">
                <Image src={dessertPhotos[2].src} alt={dessertPhotos[2].alt} width={dessertPhotos[2].width} height={dessertPhotos[2].height} sizes="(max-width: 560px) 92vw, (max-width: 900px) 44vw, (max-width: 1360px) 28vw, 410px" />
              </div>
              <h3>Glaces artisanales</h3>
              <p>Parfums disponibles selon la sélection du moment. Renseignez-vous auprès du restaurant.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="galerie" aria-labelledby="gallery-title">
        <div className="gallery-inner">
          <header className="gallery-header">
            <div>
              <p className="section-kicker">L’expérience visuelle</p>
              <h2 id="gallery-title">Notre Galerie</h2>
              <span className="heading-underline" />
            </div>
            <p className="gallery-intro">
              Un aperçu de nos grillades et de nos spécialités préparées maison.
            </p>
          </header>

          <div className="gallery-grid">
            <figure className="gallery-photo gallery-photo-main">
              <Image
                src="/images/galerie-brochette.jpeg"
                alt="Brochette grillée servie avec des frites"
                width={1064}
                height={1080}
                sizes="(max-width: 600px) 92vw, (max-width: 1000px) 68vw, 49vw"
              />
            </figure>
            <figure className="gallery-photo gallery-photo-steak">
              <Image
                src="/images/galerie-steak.jpeg"
                alt="Steak grillé accompagné de frites"
                width={1038}
                height={1080}
                sizes="(max-width: 600px) 92vw, (max-width: 1000px) 34vw, 34vw"
              />
            </figure>
            <figure className="gallery-photo gallery-photo-crevettes">
              <Image
                src="/images/galerie-crevettes.jpeg"
                alt="Assiette servie avec des frites"
                width={744}
                height={1080}
                sizes="(max-width: 600px) 48vw, (max-width: 1000px) 34vw, 17vw"
              />
            </figure>
            <figure className="gallery-photo gallery-photo-poulet">
              <Image
                src="/images/plat-poulet.jpeg"
                alt="Poulet grillé avec des frites"
                width={892}
                height={1080}
                sizes="(max-width: 600px) 48vw, (max-width: 1000px) 34vw, 17vw"
              />
            </figure>
            <figure className="gallery-photo gallery-photo-poisson">
              <Image
                src="/images/galerie-poisson.jpeg"
                alt="Poisson grillé accompagné de patates douces"
                width={894}
                height={1280}
                sizes="(max-width: 600px) 48vw, (max-width: 1000px) 34vw, 17vw"
              />
            </figure>
            <figure className="gallery-photo gallery-photo-legumes">
              <Image
                src="/images/galerie-poisson-legumes.jpeg"
                alt="Poisson grillé servi avec des légumes"
                width={740}
                height={1080}
                sizes="(max-width: 600px) 48vw, (max-width: 1000px) 34vw, 17vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="invitation-section" aria-labelledby="invitation-title">
        <div className="invitation-content">
          <p className="section-kicker">L’esprit de la maison</p>
          <h2 id="invitation-title">Des plats généreux, des saveurs du Sénégal.</h2>
          <p>
            Poissons, grillades et spécialités de la maison : prenez le temps
            de partager un bon moment chez Ely et Alain, à Mbour.
          </p>
          <div className="invitation-links">
            <a className="button button-primary" href="#carte">Consulter la carte</a>
            <a className="invitation-map-link" href="#localisation">Nous trouver <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-inner">
          <header className="catalog-heading reviews-heading">
            <p className="section-kicker">Vos expériences</p>
            <h2 id="reviews-title">Ils parlent de leur expérience</h2>
            <span className="heading-underline" />
            <p>Au-delà des saveurs, ce sont les moments partagés et l’accueil d’Ely qui rendent chaque visite particulière.</p>
          </header>

          <div className="reviews-grid">
            {googleReviews.map((review) => (
              <article className="review-card" key={review.id}>
                <span className="review-card-source">Avis Google</span>
                <blockquote>
                  <span className="review-quote-mark" aria-hidden="true">“</span>
                  {review.text}
                </blockquote>
                <footer className="review-card-footer">
                  <p className="review-author">{review.author}</p>
                  <time>{review.date}</time>
                </footer>
              </article>
            ))}
          </div>

          <div className="reviews-action">
            <a
              className="button button-primary"
              href="https://www.google.com/maps/place/Chez+Ely/@14.4213376,-16.9863962,17z/data=!4m8!3m7!1s0xec18b09f4e36d79:0x59acd25588c4835a!8m2!3d14.4213376!4d-16.9863962!9m1!1b1!16s%2Fg%2F11h6bzrlyq"
              target="_blank"
              rel="noreferrer"
            >
              Lire les avis sur Google
            </a>
          </div>
        </div>
      </section>

      <section className="location-section" id="localisation" aria-labelledby="location-title">
        <div className="location-inner">
          <header className="location-heading">
            <p className="section-kicker">Où nous trouver</p>
            <h2 id="location-title">Notre Emplacement</h2>
            <span className="heading-underline" />
          </header>

          <div className="location-grid">
            <div className="location-details">
              <article className="location-card address-card">
                <span className="location-icon" aria-hidden="true">⌖</span>
                <h3>Adresse</h3>
                <p>En face de Polimed, Mbour<br />Route de l’Hôpital, Mbour, Sénégal</p>
                <a
                  className="map-link"
                  href="https://www.google.com/maps?q=14.421486700000003,-16.991409941308593"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ouvrir dans Google Maps <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="location-card contact-card" id="contact">
                <h3>Contact Direct</h3>
                <a href="tel:+221775501742"><span aria-hidden="true">☎</span> 77 550 17 42</a>
                <a href="https://wa.me/221775501742" target="_blank" rel="noreferrer">
                  <span className="whatsapp-mark" aria-hidden="true">◉</span> WhatsApp
                </a>
                <p><span aria-hidden="true">◷</span> Mar-Dim : 10h-15h &amp; 19h-22h30</p>
              </article>
            </div>

            <div className="map-frame">
              <iframe
                title="Carte pour trouver Ely et Alain à Mbour"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7728.196940921084!2d-16.991409941308593!3d14.421486700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec18b09f4e36d79%3A0x59acd25588c4835a!2sChez%20Ely!5e0!3m2!1sfr!2ssn!4v1792881761481!5m2!1sfr!2ssn"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <a className="footer-brand" href="#accueil">Ely et Alain</a>
          <p>
            Votre escale gourmande à Mbour. Venez vivre une expérience culinaire
            sénégalaise authentique sur notre terrasse chaleureuse.
          </p>
          <div className="footer-socials" aria-label="Réseaux sociaux">
            <span aria-label="Facebook">f</span>
            <span aria-label="Instagram">◎</span>
            <span aria-label="Pinterest">p</span>
          </div>
        </div>

        <div className="footer-contact">
          <h2>Contact</h2>
          <a href="https://www.google.com/maps?q=14.421486700000003,-16.991409941308593" target="_blank" rel="noreferrer">
            <span aria-hidden="true">⌖</span> Route de l’Hôpital,<br />Mbour, Sénégal
          </a>
          <a href="tel:+221775501742"><span aria-hidden="true">☎</span> 77 550 17 42</a>
          <a href="https://wa.me/221775501742" target="_blank" rel="noreferrer">
            <span className="whatsapp-mark" aria-hidden="true">◉</span> WhatsApp
          </a>
          <a href="mailto:eli.tina.sene@gmail.com"><span aria-hidden="true">✉</span> eli.tina.sene@gmail.com</a>
        </div>

        <div className="footer-hours">
          <h2>Horaires</h2>
          <p>Mardi - Dimanche</p>
          <p>10:00 - 15:00<br />19:00 - 22:30</p>
          <span className="closed-label">Fermé le lundi</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Ely et Alain. Tous droits réservés.</p>
      </div>
    </footer>
    </>
  );
}
