import React from 'react'

// const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
//   let pages = []
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pages.push(i)
//   }
//   return (
//     <div>
//       {pages.map((page, index) => {
//         return (
//           <button
//             className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 mx-5"
//             key={index}
//             onClick={() => setCurrentPage(page)}
//           >
//             {page}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((page, index) => {
        const isActive = page === currentPage // Check for active page

        return (
          <button
            key={index}
            className={`px-2 py-1 text-xs font-medium ${
              isActive
                ? 'active:text-white active:bg-gray-500'
                : 'text-gray-800 bg-gray-200'
            } rounded-md hover:bg-gray-300 mx-5`} // Dynamic styles with higher specificity
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
