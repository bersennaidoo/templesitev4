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
    <div className="row">
      {events.map((evt, i) => 
        <div className="col-sm-12 col-md-4" key={i}>
          <h1>{evt.name}</h1>
          <img src={evt.image} className="img-fluid" />
          <p>{evt.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventListPresenter;
