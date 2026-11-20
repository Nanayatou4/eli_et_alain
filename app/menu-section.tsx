"use client";

import Image from "next/image";
import { useState } from "react";

type Dish = {
  name: string;
  description: string;
  detail: string;
  photo?: { src: string; alt: string; width: number; height: number };
};

const menuGroups: { title: string; dishes: Dish[] }[] = [
  {
    title: "Poisson",
    dishes: [
      {
        name: "Thiof de luxe",
        photo: { src: "/images/galerie-poisson.jpeg", alt: "Thiof grillé accompagné de patates douces", width: 894, height: 1280 },
        description: "Le roi des poissons du Sénégal, grillé à la perfection.",
        detail: "Un beau thiof préparé et grillé pour préserver toute la finesse de sa chair, avec les accompagnements de votre choix.",
      },
      {
        name: "Dorade rose",
        photo: { src: "/images/galerie-poisson-legumes.jpeg", alt: "Dorade grillée servie avec des légumes", width: 740, height: 1080 },
        description: "Fraîchement pêchée, savoureuse et délicate.",
        detail: "Dorade fraîche grillée et assaisonnée simplement pour laisser s’exprimer les saveurs de la mer.",
      },
      {
        name: "Brochette de Lotte",
        photo: { src: "/images/galerie-brochette.jpeg", alt: "Brochette de lotte grillée servie avec des frites", width: 1064, height: 1080 },
        description: "Tendres morceaux de lotte marinés aux épices douces.",
        detail: "Des morceaux de lotte marinés puis grillés, pour une assiette généreuse aux notes délicatement épicées.",
      },
      {
        name: "Sole aux fines herbes",
        photo: { src: "/images/galerie-poisson.jpeg", alt: "Sole grillée accompagnée de patates douces", width: 894, height: 1280 },
        description: "Filet de sole parfumé aux herbes fraîches du jardin.",
        detail: "Un filet de sole cuisiné aux herbes et servi avec l’accompagnement de votre choix.",
      },
      {
        name: "Crevette au gingembre",
        photo: { src: "/images/galerie-crevettes.jpeg", alt: "Crevettes préparées avec des frites", width: 744, height: 1080 },
        description: "Gambas sautées minute au gingembre frais de Mbour.",
        detail: "Des crevettes saisies à la minute avec du gingembre frais, pour une assiette parfumée et savoureuse.",
      },
    ],
  },
  {
    title: "Viande",
    dishes: [
      {
        name: "Filet de zébu",
        photo: { src: "/images/galerie-steak.jpeg", alt: "Filet de zébu grillé accompagné de frites", width: 1038, height: 1080 },
        description: "Une pièce d’exception, d’une tendreté incomparable.",
        detail: "Un filet tendre, grillé selon votre goût et accompagné de garnitures au choix.",
      },
      {
        name: "Brochette de Boeuf",
        photo: { src: "/images/galerie-brochette.jpeg", alt: "Brochette de bœuf grillée servie avec des frites", width: 1064, height: 1080 },
        description: "Bœuf mariné et grillé selon votre goût.",
        detail: "Des morceaux de bœuf marinés puis grillés, servis avec riz, frites, légumes ou attiéké.",
      },
      {
        name: "Poulet",
        description: "Poulet braisé ou grillé au feu de bois traditionnel.",
        detail: "Choisissez votre poulet braisé ou grillé au feu de bois, accompagné selon votre envie.",
        photo: { src: "/images/plat-poulet.jpeg", alt: "Poulet grillé accompagné de frites", width: 892, height: 1080 },
      },
      {
        name: "Fricassé ou Bolognaise",
        description: "Nos spécialités cuisinées avec passion et authenticité.",
        detail: "Une assiette généreuse préparée maison. Demandez à l’équipe la suggestion du jour.",
      },
    ],
  },
];

const madeToOrder = ["Camerounes", "Gambas", "Langouste"];

export default function MenuSection() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  function toggleDish(dish: Dish) {
    setSelectedDish((current) => current?.name === dish.name ? null : dish);
  }

  return (
    <section className="menu-section" id="carte" aria-labelledby="menu-title">
      <div className="menu-inner">
        <header className="menu-heading">
          <p className="section-kicker">Le menu à la carte</p>
          <h2 id="menu-title">Notre Carte</h2>
          <p className="menu-intro">« Une cuisine généreuse, des saveurs authentiques et des prix accessibles. »</p>
          <span className="heading-underline" />
        </header>

        <div className="menu-groups">
          {menuGroups.map((group) => (
            <section className="menu-group" key={group.title} aria-labelledby={`menu-${group.title}`}>
              <h3 id={`menu-${group.title}`}><span>{group.title}</span></h3>
              <ul>
                {group.dishes.map((dish) => {
                  const isSelected = selectedDish?.name === dish.name;
                  return (
                    <li key={dish.name}>
                      <button
                        className={`menu-dish${isSelected ? " is-selected" : ""}`}
                        type="button"
                        aria-pressed={isSelected}
                        aria-expanded={isSelected}
                        onClick={() => toggleDish(dish)}
                      >
                        <span className="menu-dish-name">{dish.name}</span>
                        <span className="menu-dish-description">{dish.description}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <section className="menu-order-section" aria-labelledby="menu-order-title">
          <div className="menu-order-heading">
            <span className="menu-order-rule" aria-hidden="true" />
            <p>Les trésors de la mer</p>
            <h3 id="menu-order-title">Sur commande</h3>
            <span className="menu-order-rule" aria-hidden="true" />
          </div>
          <ul>
            {madeToOrder.map((dish) => (
              <li key={dish}>
                <span className="menu-order-name">{dish}</span>
                <span className="menu-order-dot" aria-hidden="true">◆</span>
              </li>
            ))}
          </ul>
        </section>

        {selectedDish && (
          <article className={`menu-preview${selectedDish.photo ? "" : " no-photo"}`} id="dish-preview" aria-live="polite">
            {selectedDish.photo ? (
              <div className="menu-preview-image">
                <Image
                  src={selectedDish.photo.src}
                  alt={selectedDish.photo.alt}
                  width={selectedDish.photo.width}
                  height={selectedDish.photo.height}
                  sizes="(max-width: 760px) 100vw, 430px"
                />
              </div>
            ) : (
              <div className="menu-preview-no-image">Photo non disponible pour ce plat</div>
            )}
            <div className="menu-preview-copy">
              <p>À découvrir</p>
              <h3>{selectedDish.name}</h3>
              <span>{selectedDish.detail}</span>
              <strong>{selectedDish.description}</strong>
            </div>
            <button
              className="menu-preview-close"
              type="button"
              aria-label="Fermer l’aperçu du plat"
              onClick={() => setSelectedDish(null)}
            >
              ×
            </button>
          </article>
        )}

        <div className="menu-extras">
          <div className="menu-sides">
            <h3>Accompagnements au choix</h3>
            <ul>
              <li>Riz blanc</li>
              <li>Frites</li>
              <li>Légumes</li>
              <li>Attiéké</li>
            </ul>
          </div>
          <div className="menu-vegetarian">
            <h3>Végétariens</h3>
            <p>Nous vous proposons également une salade fraîche ou la suggestion du chef selon le marché.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
