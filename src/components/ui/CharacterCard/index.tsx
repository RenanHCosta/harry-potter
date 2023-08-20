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
          <span className="card__info--text">{name}</span>
          <span className="card__info--text">Nascimento: {dateOfBirth}</span>
          <span className="card__info--text">Casa: {house}</span>
          <span className="card__info--text">Patrono: {patronus}</span>
          <span className="card__info--text">Ator: {actor}</span>
        </div>
      </div>
    );
  },
);

export default CharacterCard;
