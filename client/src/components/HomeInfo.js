const HomeInfo = ({image,title,content}) => {
  return(
      <div className={'home__info'}>
          <div className="container home__info-container">
              <div className="home__info-wrapper">
                  <div className="home__info-content">
                      <h2>{title}</h2>
                      <p>{content}</p>
                  </div>
                  <div className="home__info-visuals">
                      <div className="home__header-logo">
                              <img src={image} alt="Header Background Image"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default HomeInfo