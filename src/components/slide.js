import React from "react";
import b1 from "./b1.jpg"
import b2 from "./b2.jpg"
import b3 from "./b3.jpg"


export const Slide =()=>{
    return(
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <ul class="carousel-indicators" style={{listStyle:"none"}}>
                <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
            </ul>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src={b1} class="w-100 d-block" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img src={b2} class="w-100 d-block" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img src={b3} class="w-100 d-block" alt="Third slide"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}