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
            <div className="d-md-flex flex-md-column bg-white p-5 border-image-panel">
              <h1 className="text-center mb-3">
                <img
                  src="/img/dividers/aum-header.svg"
                  className="img-fluid border-img"
                />
              </h1>
              <h1 className="text-center">{event?.name}</h1>
              <img src="/img/stub/line.png" className="img-fluid mb-3" />
              <p className="text-center">{event?.description}</p>
              <p className="text-center">
                <span className="badge rounded-pill bg-info text-dark fw-bold fs-5">{event?.date}</span>
              </p>
              <div className="text-center">
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
