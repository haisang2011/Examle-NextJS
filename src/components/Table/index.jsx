import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import Sort from 'components/Sort';
import Card from 'components/Card';
import SearchInput from 'components/SearchInput';

const SortBy = (todos, direction) => {
    if(direction === "asc"){
        return [...todos].sort((a, b) => a.id - b.id);
    }else if(direction === "desc"){
        return [...todos].sort((a, b) => b.id - a.id);
    }

    return [...todos];
}

function Table({ users, onChange }) {

    const [state, setState] = React.useState("asc");

    const switchStatusSortBy = () => {
        if(state === "asc"){
            setState("desc");
        }else if(state === "desc"){
            setState("asc");
        }
    }

    const data = SortBy(users, state);

    return (
        <>
            <div style={{
                display: "flex",
            }}>
                <button
                    onClick={switchStatusSortBy}
                    style={{
                        border: "none",
                        cursor: "all-scroll",
                        background: "#bbdfc8",
                        margin: "0 25px",
                        outline: "none",
                    }}
                >
                    <Sort
                        direction={state}
                    />
                </button>
                <SearchInput
                    onChange={onChange}
                />
            </div>
            <div style={{
                display: "grid",
                gridColumnGap: "50px",
                gridTemplateColumns: "auto auto auto"
            }}>
            { data.map((item) => (
                <Link key={item.id} href="/user/[id]/todos" as={`/user/${item.id}/todos`}>
                    <a>
                        <Card
                            key={item.id}
                            user={item}
                        />
                    </a>
                </Link>
            )) }
            </div>
        </>
    )
}

Table.propTypes = {

}

export default Table

//https://jsonplaceholder.typicode.com/todos/1
