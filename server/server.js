import './config/dotenv.js';
import express from 'express';
import cors from 'cors'
import postsRouter from './routes/posts.js';
import jobsRouter from './routes/jobs.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/postsRoute', postsRouter)
app.use('/jobsRoute', jobsRouter)

app.get('/', (req, res) => {
    res.send('Hello from homepage.')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})