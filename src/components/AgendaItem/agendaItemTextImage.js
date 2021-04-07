import React from "react";
import agenda_item_placeholder from "../../images/placeholders/agenda_item_placeholder.png"


export function AgendaItemTextImage({title = "Title", content = "Content", image = agenda_item_placeholder, image_placeholder = "Placeholder"}) {
    return (
        <article className="agenda_item_text_image">
            <div className="agenda_item_text_image-header">
                {title}
            </div>
            <div className="agenda_item_text_image-content">
                {content}
            </div>
            <img className="agenda_item_text_image-image" src={agenda_item_placeholder} alt={image_placeholder}/>
        </article>
    )
}
