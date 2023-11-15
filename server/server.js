import './config/dotenv.js';
import express from 'express';
import cors from 'cors'
import postsRouter from './routes/posts.js';
import jobsRouter from './routes/jobs.js';
import authRoutes from './routes/auth.js';

import session from 'express-session'
import passport from 'passport';
import session from 'express-session';
import {GitHub} from './config/auth.js';

const app = express();

//setting up authentication
app.use(session({
    secret: 'codepath',
    resave: false,
    saveUninitialized: true
}))

app.use(cors({
    origin: 'http://localhost:5173',
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


app.use(cors());
app.use(express.json());



app.use('/postsRoute', postsRouter)
app.use('/jobsRoute', jobsRouter)
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello from homepage.')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

