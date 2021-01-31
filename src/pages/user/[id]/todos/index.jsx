import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Todo from 'components/Todo';
import { BiChevronLeft } from "react-icons/bi";

function index({ todos }) {

    const router = useRouter();

    return (
        <>
            <h2>{router.asPath}</h2>
            <button
                style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#000",
                    opacity: "0.75",
                    color: "#FFF",
                    boxShadow: "1px 1.5px 2.5px gray",
                    borderRadius: "10px",
                }} 
                onClick={() => router.back()}>
                <BiChevronLeft fontSize={14} style={{position: "relative", bottom:"-0.25ex"}} />
                Back
            </button>
            <div style={{
                display: "grid",
                gridColumnGap: "50px",
                gridTemplateColumns: "auto auto auto"
            }}>
                {todos && todos.map(items => (
                    <Todo
                        todos={items}
                    />
                ))}
            </div>
        </>
    )
}

index.propTypes = {

}

export default index

// export async function getStaticPaths(t) {
//     console.log({t})
//     return { t }
// }

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '*' } }
      ],
      fallback: true
    };
  }
      
  export async function getStaticProps(context) {
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${context.params.id}`);
    const todos = await res.json()
    return { props: { todos } }
  }
