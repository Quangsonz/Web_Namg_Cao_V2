import React from 'react'
import { useState } from 'react';
import Ratting from '../components/Ratting';



const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on 21/2/2024 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on 11/12/2024 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on 2/1/2024 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on 12/1/2024 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];

const Review = () => {
    const[reviewShow, setReviewShow] = useState(true)
  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}> 
        <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
      </ul>

      {/* desc and review content*/}
      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>

         <div className='review-showing'>
            <ul className='content lab-ul'>
                {
                    ReviewList.map((review,i) =>(
                        <li key={i}>
                            <div className='post-thumb'>
                                <img src={review.imgUrl} alt=''/>
                            </div>

                            <div className='post-content'>
                                <div className='entry-meta'>
                                    <div className='posted-on'>
                                        <a href='#'>{review.name}</a>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                                <div className='entry-content'>
                                    <p>{review.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>

            {/*add review*/}
            <div className='client-review'>
                <div className='reivew-form'>
                    <div className='review-title'>
                        <h5>{reviwtitle}</h5>
                    </div>

                    <form action="action" className='row'>
                        <div className='col-md-4 col-12'>
                            <input type='text' name='name' id='name' placeholder='Full Name *'/>
                        </div>

                        <div className='col-md-4 col-12'>
                            <input type='email' name='email' id='email' placeholder='Your Email *'/>
                        </div>

                        <div className='col-md-4 col-12'>
                            <div className='rating'>
                               <span className='me-2'>Your Rating</span>
                               <Ratting/>
                            </div>
                        </div>

                        <div className='col-md-12 col-12'>
                          <textarea name='message' id='message' rows="8" placeholder='Type Here Message'></textarea>
                        </div>

                        <div className='col-12'>
                            <button type='submit' className='default-button'>
                                <span>Submit Review</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
         </div>

         {/*description*/}
         <div className='description'>
            <p>
            The oversized unisex hoodie is the perfect choice for those who love a youthful, dynamic style while ensuring maximum comfort. Made from high-quality fleece fabric, it provides a soft feel, excellent warmth, and breathability. The loose fit suits all body types, making it easy to mix and match for a streetwear-inspired look or a simple, minimalist outfit. The hoodie features a spacious hood and a front pocket for added convenience. Available in a wide range of colors, from neutral tones to bold shades, this is definitely a must-have item for your wardrobe!
            </p>
            <div className='post-item'>
                 <div className='post-thumb'>
                    <img src='/src/assets/images/shop/06.jpg'/>
                 </div>
                 <div className='post-content'>
                    <ul className='lab-ul'>
                        <li>Love this hoodie! Soft, warm, and super comfy. The oversized fit is perfect and the color options are great. Highly recommend!</li>
                        <li>Great hoodie! Soft, warm, and super comfortable. The oversized fit and color options are perfect. Totally worth it!</li>
                        <li> Soft, warm, and super comfortable. The oversized fit and color options are perfect. Totally worth it!</li>
                        <li> The oversized fit and color options are perfect. Totally worth it!</li>
                    </ul>
                 </div>
            </div>
            <p>
            The oversized unisex hoodie is the perfect choice for those who love a youthful, dynamic style while ensuring maximum comfort. Made from high-quality fleece fabric, it provides a soft feel, excellent warmth, and breathability. The loose fit suits all body types, making it easy to mix and match for a streetwear-inspired look or a simple, minimalist outfit. The hoodie features a spacious hood and a front pocket for added convenience. Available in a wide range of colors, from neutral tones to bold shades, this is definitely a must-have item for your wardrobe!
            </p>
         </div>
      </div>
    </>
  )
}

export default Review
