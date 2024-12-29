import React, { FC, useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import { Event } from "../domain/models/eventModel";
import EventPresenter from "../components/EventPresenter";

type EventScriptProps = {
};

const EventScript: FC<EventScriptProps> = (
  props: EventScriptProps
) => {
    const {} = props
    const [event, setEvent] = useState<Event>();
    const params = useParams()

    useEffect(() => {
      axios
        .get(`/api/heroes/${params.id}`)
        .then((response) => {
          setEvent(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [event]);

  return (
    <div className="container">
      <EventPresenter event={event} />
    </div>
  );
};

export default EventScript;