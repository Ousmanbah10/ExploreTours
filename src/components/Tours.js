import React from "react";
import Title from "./Title";
import { tours } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article key={tour.id} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.img} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={tour.icon}></i>
                    </span>{" "}
                    china
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
