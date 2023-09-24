import React from 'react'
import Card from '../../shared/Uicomponents/Card'
import "./FeaturedArticle.css"
function FeaturedArticle(props) {
  return (
    <div className='featuredarticles-section'>
        <div className='featuredarticlessection'>
            <div className='faturedarticle'>
                <h2 className='secondary-heading'>
                Featured Articles
                </h2>
                <div className='content-box-articles'>
                    {props.articles.map((article)=>{
                        return(
                            <Card>
                                <div className="image-box">
                                    <img src={article.img} className='article-img'  />
                                </div>
                                <div className="text-box">
                                    <p className='article-title'> {article.title} </p>
                                </div>
                        </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedArticle