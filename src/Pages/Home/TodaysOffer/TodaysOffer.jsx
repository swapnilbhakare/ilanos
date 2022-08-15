import React from 'react'
import Featurette from '../../../Components/Featurette/Featurette'
import Button from '../../../Components/Button/Button'
const TodaysOffer = () => {
    return (
        <div>
           <Featurette 
           image='/images/laptop-2.png'
        title="30% OFF"
        discount="Best Arial View in Town"
        subTitle="on professional camera drones"
        offersConditions="Limited quantities.
        See product detail pages for availability."
      >
           
        <Button>Shop</Button> 
        <div className=''>
            <p className=''>Today's Special</p>
          </div>
       
      </Featurette>
            
        </div>
    )
}

export default TodaysOffer
