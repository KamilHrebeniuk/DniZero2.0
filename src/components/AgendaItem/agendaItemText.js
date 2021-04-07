import React from "react";

export function AgendaItemText({title = "Title", content = "Content"}) {
    return (
        <article className="agenda_item_text">
            <div className="agenda_item_text-header">
                {title}
            </div>
            <div className="agenda_item_text-content">
                {content}
            </div>
        </article>
    )
}