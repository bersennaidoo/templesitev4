import React, { FC } from "react";
import { Link } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
  const {} = props;

  return (
    <div className="container bg-primary-200 c-message">
      <div className="row">
        <div className="col-sm-12 p-4">
          <div className="d-md-flex gap-4">
            <img src="/img/stub/temple-events.png" className="img-fluid" />
            <div className="d-md-flex flex-md-column bg-white p-5 border-image-panel">
            <h1 className="text-center mb-3">
            <img
              src="/img/dividers/aum-header.svg"
              className="img-fluid border-img"
            />
          </h1>
              <h1 className="">Temple Events !</h1>
              <img src="/img/stub/line.png" className="img-fluid mb-3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                repellendus tenetur sapiente accusantium labore praesentium
                odio, aliquid recusandae veritatis quasi voluptatibus impedit
                optio provident delectus velit aspernatur soluta natus laborum.
              </p>
              <div>
                <button type="button" className="btn btn-secondary btn-lg">
                  <Link to="/events/auth/add" className="text-white text-decoration-none">
                    Add Event
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
