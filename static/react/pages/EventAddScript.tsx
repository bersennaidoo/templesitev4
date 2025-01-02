import React, { FC, useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Event } from "../domain/models/eventModel";
import EventAddPresenter from "../components/EventAddPresenter";

type EventAddScriptProps = {
};

const EventAddScript: FC<EventAddScriptProps> = (
  props: EventAddScriptProps
) => {
    const {} = props

    const navigate = useNavigate()

    const [name, setName] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [summary, setSummary] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        setName(evt.target.value)
    } 

     const onImageChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        setImage(evt.target.value)
    } 
     
    const onDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        setDate(evt.target.value)
    } 

     const onSummaryChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        setSummary(evt.target.value)
    } 

     const onDescriptionChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        evt.preventDefault()
        setDescription(evt.target.value)
    } 

    const onSubmitHandler = (evt: any) => {
        evt.preventDefault()

        const details = {
            "name": name,
            "image": "/img/stub/temple-events.png",
            "date": date,
            "summary": summary,
            "description": description,
        }
        axios.post("/api/heroes", details)
             .then((res) => {
                console.log(res.data)
             })

        navigate("/events")
    }

  return (
      <EventAddPresenter onSubmitHandler={onSubmitHandler} name={name} image={image} date={date} summary={summary} description={description} onNameChange={onNameChange} onImageChange={onImageChange} onDateChange={onDateChange} onSummaryChange={onSummaryChange} onDescriptionChange={onDescriptionChange}/>
  );
};

export default EventAddScript;