import React, { ChangeEvent, FC } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Event } from "../domain/models/eventModel";

type EventAddPresenterProps = {
  onNameChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onSummaryChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitHandler: (evt: any) => void;
  name: string;
  image: string;
  date: string;
  summary: string;
  description: string;
};

const EventAddPresenter: FC<EventAddPresenterProps> = (
  props: EventAddPresenterProps
) => {
  const {
    name,
    image,
    date,
    summary,
    description,
    onSubmitHandler,
    onNameChange,
    onImageChange,
    onDateChange,
    onDescriptionChange,
    onSummaryChange,
  } = props;

  return (
    <div className="container event-list p-3 mt-3">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Event Name:
              </label>
              <input
                value={name}
                onChange={onNameChange}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="Event Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Image:
              </label>
              <input
                value={image}
                onChange={onImageChange}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="Image Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date:
              </label>
              <input
                value={date}
                onChange={onDateChange}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="Date"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Summary:
              </label>
              <input
                value={summary}
                onChange={onSummaryChange}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="Summary"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description:
              </label>
              <textarea
                value={description}
                onChange={onDescriptionChange}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              />
            </div>
            <button className="btn btn-primary btn-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventAddPresenter;
