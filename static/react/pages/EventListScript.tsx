import React, { FC, useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from "axios";
import { Event } from "../domain/models/eventModel";
import EventListPresenter from "../components/EventListPresenter";

type EventListScriptProps = {
};

const EventListScript: FC<EventListScriptProps> = (
  props: EventListScriptProps
) => {
    const {} = props
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
      axios
        .get("/api/heroes")
        .then((response) => {
          setEvents([...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
      <EventListPresenter events={events} />
  );
};

export default EventListScript;
