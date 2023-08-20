import { memo } from "react";

import { Character } from "@/interfaces/character";

import "./CharacterCard.style.scss";

const CharacterCard = memo(
  ({ name, image, dateOfBirth, house, patronus, actor, alive }: Character) => {
    return (
      <div className="card">
        {image
          ? (
            <img
              className="card__image"
              alt={name}
              src={image}
              width={300}
              height={400}
              loading="lazy"
            />
          )
          : <div className="card__image--error">No image provided.</div>}
        <span className="card__alive-flag">{alive ? "VIVO" : "MORTO"}</span>
        <div className="card__info">
          <span className="card__info--text text--name">{name}</span>
          <span className="card__info--text">Date of Birth: {dateOfBirth}</span>
          <span className="card__info--text">House: {house}</span>
          <span className="card__info--text">Patronus: {patronus}</span>
          <span className="card__info--text">Actor: {actor}</span>
        </div>
      </div>
    );
  },
);

export default CharacterCard;
