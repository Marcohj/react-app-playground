import React, { Component, Fragment } from "react";

class NoteAdd extends Component {
  state = {
    comment: "",
    category: "",
    errors: {}
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log(value);

    this.setState({
      [name]: value
    });
  };

  handleSetCategory = category => {
    this.setState({
      category
    });
  };

  handleSubmit = event => {
    const { comment, category } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();

    if (comment && category) {
      onSubmit({
        comment,
        category
      });

      this.setState({
        comment: "",
        category: "",
        errors: {}
      });
    } else {
      let errors = {};
      if (!comment) {
        errors.comment = "Comment required!";
      }
      if (!category) {
        errors.category = "Category required!";
      }
      this.setState({
        errors
      });
    }
  };

  render() {
    const { categories } = this.props;
    const { comment, category, errors } = this.state;

    return (
      <Fragment>
        <h1>Add a note</h1>

        <div className="form-group">
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            value={comment}
            placeholder="Enter comment"
            rows="3"
            onChange={this.handleInputChange}
          />
          {errors && errors.comment && (
            <div className="text-danger mb-3">{errors.comment}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category" className="text-bold">
            <strong>Category </strong>
            <small>Add a new category or select an existing</small>
          </label>
          <input
            placeholder="Enter new category..."
            className="form-control mb-2"
            id="category"
            name="category"
            value={category}
            type="text"
            onChange={this.handleInputChange}
          />
          {errors && errors.category && (
            <div className="text-danger mb-3">{errors.category}</div>
          )}

          {categories.map((category, key) => (
            <button
              key={`category_${key}`}
              className="btn btn-secondary mr-2"
              onClick={() => this.handleSetCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-right">
          <button
            className="btn btn-primary btn-lg"
            onClick={this.handleSubmit}
          >
            Add note
          </button>
        </div>
      </Fragment>
    );
  }
}

export default NoteAdd;
