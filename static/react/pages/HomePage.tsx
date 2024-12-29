import React, { FC } from "react"

type HomePageProps = {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {

    const {} = props

    return (
        <div className="container border border-primary p-3">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Your Events !</h1>
                    <img src="/img/stub/400x300.png" className="img-fluid" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellendus tenetur sapiente accusantium labore praesentium odio, aliquid recusandae veritatis quasi voluptatibus impedit optio provident delectus velit aspernatur soluta natus laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage