import React from 'react'

function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
  return (
    <div>
        <div>
        <div className="card my-3">
          <img className='news-img' src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} alt="..." rel="noreferrer" />
          <div className="card-body">
            <h5 className="card-title">{title}...  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" > {source}
              99+</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
