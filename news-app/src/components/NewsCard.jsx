import React from 'react'

const NewsCard = () => {
  return (
    <div className="card mb-3 rounded-0 shadow-sm">
  <div className="row g-0 p-5">
    <div className="col-md-4">
      <img style={{height : '250px'}} src="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <button className="btn btn-primary rounded-0 float-end">Read More</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default NewsCard
