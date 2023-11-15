import { pool } from '../config/database.js'
import '../config/dotenv.js'

const createPostsTable = async () => {
  const createTableQuery = `

    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      approved int NOT NULL,
      date timestamp NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 posts table created successfully')
  } catch (err) {
    console.error('⚠️ error creating posts table', err)
  }
}


const createJobsTable = async () => {
  const createTableQuery = `
    
    CREATE TABLE IF NOT EXISTS jobs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      date timestamp NOT NULL,
      company VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      url text NOT NULL,
      remote BOOLEAN NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 jobs table created successfully')
  } catch (err) {
    console.error('⚠️ error creating jobs table', err)
  }
}




const seedGiftsTable = async () => {
  await createPostsTable()
  await createJobsTable()
}

seedGiftsTable()

