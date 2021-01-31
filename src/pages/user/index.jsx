import React from 'react'
import PropTypes from 'prop-types'

function index({ todos, }) {
    console.log({todos})
    return (
        <div>
            hai sang
        </div>
    )
}

index.propTypes = {

}

export default index


export const getStaticProps = async (t) => {
  console.log({t})
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=1`);
    const todos = await res.json();
  
    return {
      props: {
        todos,
      }
    }
  }