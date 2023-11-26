import './config/dotenv.js';
import express from 'express';
import cors from 'cors'
import postsRouter from './routes/posts.js';
import jobsRouter from './routes/jobs.js';
import authRoutes from './routes/auth.js';
import userJobsRoutes from './routes/user-jobs.js'

import passport from 'passport';
import session from 'express-session';
import {GitHub} from './config/auth.js';

const app = express();

const CLIENT_URL = process.env.NODE_ENV === "production" ? "https://compass-production-8bfb.up.railway.app" : "https://localhost:3001";

app.use(cors({
    origin: true,
    methods: 'GET, POST, PUT, PATCH, DELETE',
    credentials: true
}))

//setting up authentication


app.use(passport.initialize());
app.use(passport.session());
passport.use(GitHub);

passport.serializeUser((user, done) => {
    done(null, user)
})


passport.deserializeUser((user, done) => {
    done(null, user)
})


app.use(express.json());



app.use('/postsRoute', postsRouter)
app.use('/jobsRoute', jobsRouter)
app.use('/auth', authRoutes)
app.use('/users-jobs', userJobsRoutes)

app.get('/', (req, res) => {
    res.redirect('/')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

