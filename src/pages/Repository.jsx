import { React, useState } from 'react'
import RepoButton from '../components/RepoButton'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Pagination from './Pagination'

const url = 'https://api.github.com/user/repos'

const apiToken = import.meta.env.VITE_API_KEY
const headers = {
  Authorization: `Bearer ${apiToken}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
}
const searchTerm = 'GOAT'
const Repository = () => {
  const [repos, setRepos] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(6)
  const [search, setSearch] = useState('')
  const response = useQuery({
    queryKey: ['repos', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}?q=${searchTerm}`, { headers })
      setRepos(result.data)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section>
        <h3>loadind.......</h3>
      </section>
    )
  }

  if (response.isError) {
    return (
      <section>
        <h3>There was an Error.......</h3>
      </section>
    )
  }

  const filteredRepos = repos.filter((rep) =>
    rep.name.toLowerCase().includes(search.toLowerCase())
  )

  const lastIndex = currentPage * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const currentRepo = filteredRepos.slice(firstIndex, lastIndex)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setcurrentPage(1)
  }
  return (
    <section className="relative w-screen h-auto">
      <div className=" flex flex-row justify-around">
        <RepoButton className="" />
        <Search handleSearchChange={handleSearchChange} />
        <Filter />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentRepo.map((repo, id) => (
            <Cards
              key={id}
              css={repo.name}
              date={repo.full_name}
              pub={repo.language}
            />
          ))}
        </div>
      </div>
      <div
        class="flex flex-row justify-center p-2"
        aria-label="Pagination Section"
      >
        <Pagination
          totalPosts={repos.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setcurrentPage}
        />
      </div>
    </section>
  )
}

export default Repository
