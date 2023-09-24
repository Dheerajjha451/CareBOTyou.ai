import React from 'react'
import Button from '../../shared/Uicomponents/Button'
import img1 from "../../images/forum-img.png"
import "./ForumInfo.css"
function ForumInfo() {
  return (
    <div className='foruminfo-section'>
        <div className='foruminofsection'> 
            <div className='foruminfo'>
                <div className='textbox-foruminfo'>
                  <h2 className='secondar-heading'>
                  Let's Talk About Feelings
                  </h2>
                  <p className='forumifo-text'>
                  Finding Help for Kid’s Mental Health
                  </p>
                  <Button className = "forum-btn">
                    Message Now
                  </Button>
                </div>
                <div className='fourm-image-box'>
                  <img src={img1} className='forum-img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForumInfo