import React, { FC, useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Event } from "../domain/models/eventModel";
import EventDeletePresenter from "../components/EventDeletePresenter";
import EventSuccessPresenter from "../components/EventSuccessPresenter";

type EventDeleteScriptProps = {
};

const EventDeleteScript: FC<EventDeleteScriptProps> = (
  props: EventDeleteScriptProps
) => {
    const {} = props

    const navigate = useNavigate()
    const params = useParams()

    const [success, setSuccess] = useState<boolean>(false)
    const [remove, setRemove] = useState<boolean>(true)

    const onDeleteHandler = (id: any) => {

        axios.delete(`/api/heroes/${id}`)
             .then((res) => {
                setSuccess(!success)
                setRemove(!remove)
             })
    }

    const closeSuccess = () => {
        setSuccess(!success)
        navigate("/events")
    }

  return (
    <>
      {success && <EventSuccessPresenter closeSuccess={closeSuccess} />}
      {remove && <EventDeletePresenter id={params.id} onDelete={onDeleteHandler} /> }
      </>
  );
};

export default EventDeleteScript;