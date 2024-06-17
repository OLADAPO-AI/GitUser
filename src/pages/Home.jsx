import { React, useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://api.github.com/user'

const apiToken = import.meta.env.VITE_API_KEY
const headers = {
  Authorization: `Bearer ${apiToken}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

const Home = () => {
  const [gitUserData, setGitUserData] = useState({})
  useEffect(() => {
    const getGitUser = async () => {
      const response = await axios.get(`${url}`, { headers })
      console.log(response.data)
      setGitUserData(response.data)
      return response.data
    }
    getGitUser().catch((e) => console.error(e))
  }, [])
  return (
    <div>
      <img src={gitUserData.avatar_url} alt="" />
    </div>
  )
}

export default Home
