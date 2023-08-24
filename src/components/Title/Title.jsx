import React from "react";
import './Title.scss';

export const Title = ({ title, column }) => (
  <h2 className={`title title--${column}`}>{title}</h2>
)
