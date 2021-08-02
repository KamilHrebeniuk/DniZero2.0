import React from "react";
import { AgendaItemText } from "../../components/AgendaItem";
import { AgendaItemTextImage } from "../../components/AgendaItem";

const HomePage = () => {
    return (
        <section className="home">
            <div className="home-main">
                <p>Lorem ipsum dolor sit amet</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</span><br/>
                <button>Szczegóły &rarr;</button>
            </div>
            <div className="home-content" onLoad={horizontalScroll}>
                {/* TO DO: title and content as variables */}
                <AgendaItemText title={"First point"} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <AgendaItemTextImage title={"Second point"} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <AgendaItemText title={"Third point"} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <AgendaItemTextImage title={"Fourth point"} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </div>
        </section>
    )
}
function horizontalScroll(){
    const scrollContainer = document.querySelector(".home-content");
    if(scrollContainer){
        scrollContainer.addEventListener("wheel",(evt) =>{
            evt.preventDefault();
            scrollContainer.scrollLeft +=evt.deltaY;
        })
    }
}

export default HomePage