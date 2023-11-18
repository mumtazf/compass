import passport from 'passport'
import express from 'express';
import cors from 'cors'

/**Steps for authentication
 * 1. Router
 * 2. Route for successful login
 * 3. Route for unsuccessful login
 * 4. 
 */

const router = express.Router();

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'http://compass-production-8bfb.up.railway.app' : 'http://localhost:5173'


router.use(cors({
    origin: CLIENT_URL,
    methods: 'GET, POST, PUT, PATCH, DELETE',
    credentials: true
}));

router.get('/login/success', (req,res) => {
    if(req.user){
        res.status(200).json({success: true, user: req.user})
    }
})

router.get('/login/failed', (req, res) => {
    res.status(401).json({sucess: true, message: "failure"})
})

router.get('/logout', (req,res,next) => {
    req.logout((error) => {
        if(error){
            return next(error)
        }
    })

    req.session.destroy((err) => {
        res.clearCookie('connect.sid');
        res.json({status: "logout", user: {}})
    })
})

router.get(
    '/github',
    passport.authenticate('github', {
        scope: ['read:user']
    })
)

router.get(
    '/github/callback',
    passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/',
    })
)

export default router