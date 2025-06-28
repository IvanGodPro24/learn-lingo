import React from "react";

const TeachersItem = ({
  name,
  surname,
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  levels,
  price_per_hour,
  rating,
  reviews,
}) => {
  return (
    <>
      <div>
        <img src={avatar_url} alt={`${name} ${surname}`} />
      </div>

      <div>
        <div>
          <div>
            <p>Name</p>
            <p>{name}</p>
          </div>

          <div>
            <ul>
              <li>
                <svg>
                  <use></use>
                </svg>
                <p>Lessons online</p>
              </li>
              <li>
                <p>Lessons done: {lessons_done}</p>
              </li>
              <li>
                <svg>
                  <use></use>
                </svg>
                <p>Rating: {rating}</p>
              </li>
              <li>
                <p>Price / 1 hour: {price_per_hour}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersItem;
