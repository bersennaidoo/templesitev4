import React, { FC } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Event } from "../domain/models/eventModel";

type EventPresenterProps = {
  event?: Event;
};

const EventPresenter: FC<EventPresenterProps> = (
  props: EventPresenterProps
) => {
  const { event } = props;

  return (
    <div className="container bg-primary-200 c-message p-3 mt-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="d-md-flex gap-4">
            <img src={event?.image} className="img-fluid" />
            <div className="d-md-flex flex-md-column">
              <h1>{event?.name}</h1>
              <p>{event?.description}</p>
              <p>{event?.date}</p>
              <div>
                <button type="button" className="btn btn-secondary btn-lg">
                  <Link
                    to={`/events/auth/delete/${event?.id}`}
                    className="text-white text-decoration-none"
                  >
                    Delete Event
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPresenter;
