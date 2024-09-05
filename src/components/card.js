import React, { Component } from "react";

export class Card extends Component {
  render() {
    let { title, desc, img, url, author, styleState } = this.props;

    function truncateLast(str, char1, char2) {
      const index1 = str.lastIndexOf(char1);
      const index2 = str.lastIndexOf(char2);
      const index = Math.max(index1, index2);
      return index === -1 ? str : str.substring(0, index);
    }

    let truncatedTitle = truncateLast(title, '-', '|');
    let truncatedDesc = desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
    let truncatedAuthor = author.length > 20 ? '' : author;
    console.log(truncatedAuthor)

    return (
      <div
        className={`card mx-1 bg-${styleState.type}`}
        style={{
          color: styleState.color,
          width: "18rem", // Fixed width
          height: "26rem", // Fixed height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div className="card-body d-flex flex-column" style={{ flex: 1 }}>
          <h5 className="card-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {truncatedTitle}
          </h5>
          <p className="card-text" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {truncatedDesc}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-2" style={{ marginTop: 'auto' }}>
            <a href={url} className="btn btn-sm btn-primary">
              Read More
            </a>
            <figcaption className="blockquote-footer my-1" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {truncatedAuthor}
            </figcaption>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
