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

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'http://compass-production-8bfb.up.railway.app' : 'http://localhost:5173'

//setting up authentication
app.use(session({
    secret: 'codepath',
    resave: false,
    saveUninitialized: true
}))

app.use(cors({
    origin: CLIENT_URL,
    methods: 'GET, POST, PUT, PATCH, DELETE',
    credentials: true
}))

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
    res.redirect(CLIENT_URL)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

