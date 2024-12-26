import React, { FC } from "react"
import { Link } from "react-router-dom"

type OverviewProps = {}

const Overview: FC<OverviewProps> = (props: OverviewProps) => {

    const {} = props

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Link to="/blog/details"><img src="/img/home-banner-3.png" className="img-fluid" /></Link>
                </div>
                 <div className="col-sm-12 col-md-4">
                    <Link to="/blog/details"><img src="/img/home-banner-3.png" className="img-fluid" /></Link>
                </div>
                 <div className="col-sm-12 col-md-4">
                    <Link to="/blog/details"><img src="/img/home-banner-3.png" className="img-fluid" /></Link>
                </div>
                 <div className="col-sm-12 col-md-4">
                    <Link to="/blog/details"><img src="/img/home-banner-3.png" className="img-fluid" /></Link>
                </div>
                 <div className="col-sm-12 col-md-4">
                    <Link to="/blog/details"><img src="/img/home-banner-3.png" className="img-fluid" /></Link>
                </div>
                 <div className="col-sm-12 col-md-4">
                    <Link to="/blog/details"><img src="/img/home-banner-3.png" className="img-fluid" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Overview