import React, { ChangeEvent, FC } from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { Event } from "../domain/models/eventModel";

type EventDeletePresenterProps = {
  id: string | undefined;
  onDelete: (id: any) => void;
};

const EventDeletePresenter: FC<EventDeletePresenterProps> = (
  props: EventDeletePresenterProps
) => {
  const { id, onDelete } = props;
  const navigate = useNavigate();

  return (
    <div className="container bg-primary-400 delete-evt mt-3">
      <div className="row justify-content-center p-3">
        <div className="col-sm-12">
          <h5 className="">Delete Event</h5>
        </div>
        <div className="col-sm-12">
          <p>Please Confirm.</p>
        </div>
        <div className="col-sm-12">
          <button type="button" className="btn btn-primary me-3" onClick={() => onDelete(id)}>
            Delete
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/events/${id}`)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDeletePresenter;
