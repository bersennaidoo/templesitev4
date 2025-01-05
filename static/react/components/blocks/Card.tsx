import React, { FC } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Event } from "../../domain/models/eventModel";

type CardProps = {
  event: Event;
};

const Card: FC<CardProps> = (props: CardProps) => {
  const { event } = props;

  return (
    <div className="card bg-primary-200">
      <h5 className="card-header">Event</h5>
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.summary}</p>
        <div className="d-flex justify-content-start">
          <Link
            to={`/events/${event.id}`}
            className="btn btn-secondary text-white me-3 card-btn"
          >
            View Event
          </Link>
          <Link to="/events/auth/add" className="btn btn-secondary text-white">
            Add Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
