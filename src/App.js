import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/app.scss";
import { NoteAdd } from "./components/note_add/index";
import { NoteList, NoteListItem } from "./components/note_list/index";

class App extends Component {
  state = {
    notes: [
      { comment: "Lorem impsum", category: "Todo" },
      { comment: "Lorem impsum", category: "Todo" },
      { comment: "Lorem impsum", category: "Todo" }
    ],
    categories: ["Remark", "Todo", "Research"]
  };

  handleAddNote = note => {
    const { notes, categories } = this.state;

    let newNotes = [...notes, note];
    this.setState({ notes: newNotes });

    const categoryExist = categories.find(
      category => category === note.category
    );

    if (!categoryExist) {
      let newCategories = [...categories, note.category];

      this.setState({ categories: newCategories });
    }
  };

  render() {
    const { notes, categories } = this.state;
    const notesReversed = [...notes].reverse();

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <h1 className="d-inline-flex bg-dark text-light p-4">
                The Note App
              </h1>
            </div>
            <div className="col-12 col-md">
              <nav className="nav" />
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-5">
              <NoteAdd categories={categories} onSubmit={this.handleAddNote} />
            </div>

            <div className="col-md-6 offset-md-1 mb-5">
              <NoteList>
                {notesReversed.map((note, key) => (
                  <NoteListItem key={`note_${key}`} {...note} />
                ))}
              </NoteList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
