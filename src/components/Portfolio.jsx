import React from 'react';

export default ({portfolioLinks}) => {
    return (
        <section className="bg-light page-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        {   
            portfolioLinks && portfolioLinks.map((pItem,index) => 
            <div key = {index} className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="" alt="portfolio_img"/>
            </a>
            <div className="portfolio-caption">
              <h4>{ pItem.title }</h4>
              <p className="text-muted">{ pItem.caption }</p>
            </div>
          </div>
            )
        }

      </div>
    </div>
  </section>
    )
}