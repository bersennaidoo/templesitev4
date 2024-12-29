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
    <div className="container border border-primary p-3">
      <div className="row">
        <div className="col-sm-12">
          <h1>{event?.name}</h1>
          <img src={event?.image} className="img-fluid" />
          <p>{event?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPresenter;
