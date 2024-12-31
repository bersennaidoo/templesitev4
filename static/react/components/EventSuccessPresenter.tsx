import React, { ChangeEvent, FC } from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { Event } from "../domain/models/eventModel";

type EventSuccessPresenterProps = {
  closeSuccess: () => void;
};

const EventSuccessPresenter: FC<EventSuccessPresenterProps> = (
  props: EventSuccessPresenterProps
) => {
  const { closeSuccess } = props;
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
    <div className="alert alert-success p-3" role="alert">
        <h3>Success!</h3>
      <button type="button" className="btn btn-primary btn-lg" onClick={closeSuccess}>
        Close!
      </button>
    </div>
    </div> 
  );
};

export default EventSuccessPresenter;
