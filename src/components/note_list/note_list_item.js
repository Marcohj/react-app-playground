import * as React from "react";

const NoteListItem = ({ comment, category }) => (
  <div className="card mb-2">
    <div className="card-body">
      <div className="d-flex">
        <div>{comment}</div>
        <div className="ml-auto">
          <span className="badge badge-pill badge-secondary">{category}</span>
        </div>
      </div>
    </div>
  </div>
);

export default NoteListItem;
