import React from 'react'
import Link from 'next/link'
import AboutPage from './about/page'

const HomePage = () => {
  return (
    <div>
      <h1>This is the HomePage</h1>
      <nav>
        <ul>
          <li>
            <Link href='/'> home </Link>
          </li>
          <li>
            <Link href='/about'> about </Link>
          </li>
          <li>
            <Link href='/about/team'> team </Link>
          </li>
        </ul>
      </nav>
    
    </div>
  )
}

export default HomePage
