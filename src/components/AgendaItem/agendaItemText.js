import React from "react";
import {useHistory} from "react-router-dom";

export function AgendaItemText({id, title = "Title", content = "Content" }) {
  let history = useHistory();

  function clickHandle(id_ev) {
     let url = "/eventDescription/" + id_ev.toString();
     history.push(url);
  }
  return (
    <article className="agenda_item_text" onClick={()=>clickHandle(id)}>
      <div className="agenda_item_text-header">{title}</div>
      <div className="agenda_item_text-content">{content}</div>
    </article>
  );
}
