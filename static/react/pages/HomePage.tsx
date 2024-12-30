import React, { FC } from "react";
import { Link } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
  const {} = props;

  return (
    <div className="container event-list p-3 mt-3">
      <div className="row">
        <div className="col-sm-12">
          <h1>Your Events !</h1>
          <img src="/img/stub/400x300.png" className="img-fluid" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            repellendus tenetur sapiente accusantium labore praesentium odio,
            aliquid recusandae veritatis quasi voluptatibus impedit optio
            provident delectus velit aspernatur soluta natus laborum.
          </p>
          <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary btn-sm">
            <Link to="/events/add" className="text-white">
              Add Event
            </Link>
          </button>
           <button type="button" className="btn btn-primary btn-sm">
            <Link to="/events/delete" className="text-white">
              Delete Event
            </Link>
          </button>

          </div> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
