import React from 'react'

const Header = ({toggle}) => {

  return (
    <>
        <section id="home" className ="header">
            <div className="text-box">
                <h1>The Better By Far University</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id debitis repellat,
                    quisquam nobis atque adipisci ducimus deleniti repellendus. </p>
                <a href="/" className="btn">Visit Us To Know More</a>
            </div>
        </section>
    </>
  )
}

export default Header