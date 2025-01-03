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
    <div className="container mt-3">
      <div className="row">
        {events.map((evt, i) => (
          <div className="col-sm-12 col-md-4 event-list p-4" key={i}>
            <h1>{evt.name}</h1>
            <img src={evt.image} className="img-fluid" />
            <p>{evt.summary}</p>
            <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary btn-sm">
              <Link to={`/events/${evt.id}`} className="text-white">
                View Event 
              </Link>
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              <Link to="/events/auth/add" className="text-white">
                Add Event
              </Link>
            </button>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListPresenter;
