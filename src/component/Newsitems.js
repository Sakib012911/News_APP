import React from 'react'
// import PropTypes from 'prop-types'

const Newsitems=(props)=>{


    var {title,description,url,newsurl,author,date}=props;
    return (
      <>
  <div className="card" >
  <img src={url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more..</a>
  </div>
</div>
      </>
    )
  
}

export default Newsitems;
