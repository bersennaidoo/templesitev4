import React, { FC } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Event } from "../domain/models/eventModel";
import Card from "../components/blocks/Card"

type EventListPresenterProps = {
  events: Event[];
};

const EventListPresenter: FC<EventListPresenterProps> = (
  props: EventListPresenterProps
) => {
  const { events } = props;

  return (
    <div className="container bg-primary-200 c-message mb-5">
      <div className="row">
        {events.map((evt, i) => (
          <div className="col-sm-12 col-md-4 p-3" key={i}>
            <Card event={evt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListPresenter;
