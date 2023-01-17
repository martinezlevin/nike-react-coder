import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, image, description }) => {
  return (
    <div className="section-container">
      <div className="card-container">
        <div className="card">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>

            <button className="btn-ver-producto">
              <Link to={`/detail/${id}`} className="btn-ver-producto">
                Ver detalle
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
