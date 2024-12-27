import React, { FC } from "react"
import { Link } from "react-router-dom"

type HomePageProps = {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {

    const {} = props

    return (
        <div className="row">
             <div className="col-sm-12 d-flex">
                <Link to="#"><img src="/img/page-header-5.png" className="img-fluid" /></Link>
                <p>Temple events for your consumption</p>
            </div>
        </div>
    )
}

export default HomePage