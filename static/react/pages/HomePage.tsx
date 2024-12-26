import React, { FC } from "react"
import { Link } from "react-router-dom"

type HomePageProps = {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {

    const {} = props

    return (
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <Link to="#"><img src="/img/team-1.jpg" className="img-fluid" /></Link>
            </div>
             <div className="col-sm-12 col-md-6">
                <Link to="#"><img src="/img/team-1.jpg" className="img-fluid" /></Link>
            </div>
        </div>
    )
}

export default HomePage