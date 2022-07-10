import React from 'react'
import Card from './Card'
import "./Porfolio.css"
import Portfolio_data from './Porfolio_data'

export const Porfolio = () => {
  return (
    <>
        <section className='content-section mtop' id='portfolio'>
            <div className='container heading text-center'>
                <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h1>My Portfolio</h1>
            </div>

            <div className='content grid'>
                {Portfolio_data.map((val,index) => {
                    return  <Card key={index} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} />
                })}
            </div>
        </section>
    </>
  )
}
export default Porfolio