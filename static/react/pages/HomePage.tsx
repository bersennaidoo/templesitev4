import React, { FC } from "react"

type HomePageProps = {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {

    const {} = props

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <img src="/img/home-banner-3.png" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default HomePage