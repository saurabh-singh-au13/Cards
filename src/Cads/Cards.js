import React from 'react'
import Card from './CardUi'
import img1 from '../Image/1.jpg'
import img3 from '../Image/3.jpg'
import img2 from '../Image/2.jpg'

function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Chicken Tangadi" stitle = "Chicken Rosted Leg Pice 3"/>

                </div>

                <div className="col-md-4">
                    <Card imgsrc={img2} title = "Pizza " stitle = "8 slice pizza cor"/>

                </div>

                <div className="col-md-4">
                    <Card imgsrc={img3} title = "Lasis Roll Panir" stitle = "Slice Panir with Lemon Teast"/>

                </div>

                

            </div>

            
        </div>
    )
}

export default Cards
