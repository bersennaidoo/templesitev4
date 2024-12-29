import React, { FC } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Event } from "../domain/models/eventModel";

type EventListPresenterProps = {
  events: Event[];
};

const EventListPresenter: FC<EventListPresenterProps> = (
  props: EventListPresenterProps
) => {
  const { events } = props;

  return (
    <div className="container">
      <div className="row">
        {events.map((evt, i) => (
          <div className="col-sm-12 col-md-4 border border-primary p-4" key={i}>
            <h1>{evt.name}</h1>
            <img src={evt.image} className="img-fluid" />
            <p>{evt.description}</p>
            <button type="button" className="btn btn-primary">
              <Link to={`/events/${evt.id}`} className="text-white">
                View More
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListPresenter;
