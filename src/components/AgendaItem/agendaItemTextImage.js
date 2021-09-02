import React from "react";
import agenda_item_placeholder from "../../assets/placeholders/agenda_item_placeholder.png";
import {useHistory} from "react-router-dom";

export function AgendaItemTextImage({
  id,
  title = "Title",
  content = "Content",
  image = agenda_item_placeholder,
  image_placeholder = "Placeholder",
}) {
    let history = useHistory();

    function clickHandle(id_ev) {
        let url = "/eventDescription/" + id_ev.toString();
        history.push(url);
    }
  return (
    <article className="agenda_item_text_image" onClick={() => clickHandle(id)}>
      <div className="agenda_item_text_image-header">{title}</div>
      <div className="agenda_item_text_image-content">{content}</div>
      <img
        className="agenda_item_text_image-image"
        src={agenda_item_placeholder}
        alt={image_placeholder}
      />
    </article>
  );
}
