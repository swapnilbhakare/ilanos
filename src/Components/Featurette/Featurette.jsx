import React from 'react'

import Layout from '../Layout/Layout'
import styles  from './Featurette.module.css'
const Featurette = (props) => {
    const{discount,title,subTitle,offersConditions,image} = props
    return (
        <>
         <Layout>
        <div  className={`${styles.featurette}`} {...props}>
          <div className={`${styles.imageWrapper}`} {...props}>
            <img src={`${image}`} alt="best-price-img"  />
          </div>

          <div className={`${styles.textWrapper}`}>
            <h3>{discount}</h3>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p>{offersConditions}</p>
            <div>
            {props.children}
            </div>  
          </div>

         
        </div>
      </Layout>
            
        </>
    )
}

export default Featurette
