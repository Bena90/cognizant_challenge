import React from "react";
import "./styles.scss";

export const Card = ({ title }: { title: string }) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
    </div>
  );
};
