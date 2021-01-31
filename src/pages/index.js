import React from 'react';
import Head from 'next/head'
import ResultCount from 'components/ResultCount';
import SearchInput from 'components/SearchInput';
import Table from 'components/Table';
import Navbar from 'components/Navbar';


export default function Home({ users }) {

  const [keyword, setKeyword] = React.useState("");

  const filterUsers = users.filter((user) => (
    user.name.toLowerCase().includes(keyword) ||
    user.username.toLowerCase().includes(keyword) ||
    user.email.toLowerCase().includes(keyword)
  ))

  const handleFilter = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <ResultCount
          amount={users.length}
        />

        <Table users={filterUsers} onChange={handleFilter} />

      </main>

    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    }
  }
}
