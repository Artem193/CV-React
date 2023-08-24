import React from "react";
import './skill.scss'

export const Skill = ({ skillName, great }) => {

  const readRating = (great, id) => {
    if (great >= id) {
      return 'rating__up'
    }

    return 'rating__down'
  }

  return (
    <div className="skill">
      {skillName}
      <div className="rating">
        <div className={readRating(great, 1)}></div>
        <div className={readRating(great, 2)}></div>
        <div className={readRating(great, 3)}></div>
        <div className={readRating(great, 4)}></div>
        <div className={readRating(great, 5)}></div>
      </div >
    </div>

  )
}
