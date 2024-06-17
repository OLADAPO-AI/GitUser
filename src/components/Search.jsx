// import React, { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'

// const Search = () => {
//   const [searchInput, setSearchInput] = useState('')
//   const [repos, setRepos] = useState([])
//   const handleChange = (e) => {
//     setSearchInput(e.target.value)
//     // if (!searchValue) {
//     //   return
//     // } else {
//     //   console.log(searchValue)
//     // }
//   }
//   const url = 'https://api.github.com/'

//   const apiToken = `${import.meta.env.VITE_API_KEY}`
//   const headers = {
//     Authorization: `Bearer ${apiToken}`,
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   }

//   const config = {
//     headers: headers,
//   }
//   const handleClick = async () => {
//     try {
//       const result = await axios(`${url}users/repos`, config)
//       setRepos(result)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   console.log(repos)
//   return (
//     <div className=" relative">
//       <form action="">
//         <input
//           type="text"
//           onChange={handleChange}
//           placeholder="JavaScript"
//           value={searchInput}
//           className=" px-20 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           className=" absolute left-[10px] top-3 text-xl text-blue-500"
//           onClick={handleClick}
//         >
//           <FaSearch />
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Search

import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ handleSearchChange }) => {
  // const [searchInput, setSearchInput] = useState('')
  // const [repos, setRepos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) {
      return
    }
    console.log(searchValue)
  }

  // const url = 'https://api.github.com/user/repos'

  // const apiToken = import.meta.env.VITE_API_KEY
  // const headers = {
  //   Authorization: `Bearer ${apiToken}`,
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // }

  // const handleClick = async (e) => {
  //   e.preventDefault()
  //   if (!searchInput) {
  //     console.log('Search input is empty')
  //     return
  //   }
  //   try {
  //     const result = await axios.get(`${url}`, { headers })
  //     setRepos(result.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // console.log(repos)

  return (
    <div className="relative">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleSearchChange}
          type="text"
          name="search"
          placeholder="JavaScript"
          className="px-20 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="absolute left-[10px] top-3 text-xl text-blue-500"
          type="submit"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default Search
