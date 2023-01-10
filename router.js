const express = require("express");
const apis = require("./apis");
const router = express.Router();
const url = require('url');
const { response } = require("express");

/*
Front 연결 Router
*/

router.get('/',(req,res) => {
    res.render('index');
})
router.get('/signup',(req,res) => {
    res.render('signup');
})
router.get('/login', (req,res) => {
    res.render('login');
})
router.get('/survey',(req,res) => {
    res.render('survey');
})
router.get('/surveyresult/:result',(req,res) => {
    switch (req.params.result) {
        case 'human':
            res.render('surveyresult/human')
            break
        case 'engineer':
            res.render('surveyresult/engineer')
            break
        case 'design':
            res.render('surveyresult/design')
            break
        case 'manage':
            res.render('surveyresult/manage')
            break
        case 'exercise':
            res.render('surveyresult/exercise')
            break
        default:
            res.render('survey');
            break
    }
})
router.get('/main',(req,res) => {
    fetch('http://127.0.0.1:4500/apis/listBoard')
    .then(response => response.json())
    .then(response => res.render('main', {posts: response}))
})
router.get('/board',(req,res) => {
    res.render('board');
})
router.get('/board/:id', (req,res) => {
    fetch(`http://127.0.0.1:4500/apis/getBoard/${req.params.id}`)
    .then(response => response.json())
    .then(response => {
        fetch(`http://127.0.0.1:4500/apis/getComment/${req.params.id}`)
        .then(response2 => response2.json())
        .then(response2 => res.render('boardPost', {
            post: response.data,
            comments: response2.data,
            user: req.session.user
        }))
        .catch(error => console.log("error:", error))
    })
    .catch(error => console.log("error:", error))
})
router.get('/post', (req,res) => {
    res.render('writePost', {isWrite: true})
})
router.get('/post/:id', (req,res) => {
    fetch(`http://127.0.0.1:4500/apis/getBoard/${req.params.id}`)
    .then(response => response.json())
    .then(response => {
        if (req.session.user) {
            if (response.data.user_id === req.session.user.id) {
                res.render('writePost', {
                    isWrite: false,
                    id: req.params.id,
                    post: response.data
                })
            } else {
                res.render('wrong')
            }
        } else {
            res.render('wrong')
        }
    })
    .catch((error) => console.log("error:", error))
})
router.get('/surveyresult/:result',(req,res)=>{
    switch (req.params.result){
        case 'human':
            res.render('surveyresult/human')
            break
        case 'engineer':
            res.render('surveyresult/engineer')
            break
        case 'design':
            res.render('surveyresult/design')
            break
        case 'manage':
            res.render('surveyresult/manage')
            break
        case 'exercise':
            res.render('surveyresult/exercise')
            break
        default:
            res.render('survey');
            break
    }
})

/*
API 호출 Router
*/

router.post('/apis/checkId', (req,res) => {
    return apis.checkIdOverlap(req,res);
})

router.post('/apis/checkNickname', (req,res) =>{
    return apis.checkNickname(req,res);
})

router.post('/apis/register', (req,res) => {
    return apis.userRegister(req,res);
})

router.post('/apis/login', (req,res) => {
    return apis.userLogin(req,res);
})

router.get('/apis/logout', (req,res) => {
    return apis.userLogout(req,res);
})

router.get('/apis/listBoard', (req,res) => {
    return apis.listBoard(req,res);
})

router.post('/apis/postBoard', (req,res) => {
    return apis.postBoard(req,res);
})

router.get('/apis/getBoard/:id', (req,res) => {
    return apis.getBoard(req,res);
})

router.put('/apis/putBoard/:id', (req,res) => {
    return apis.putBoard(req,res);
})

router.delete('/apis/deleteBoard/:id', (req,res) => {
    return apis.deleteBoard(req,res);
})

router.post('/apis/postComment/:board_id', (req,res) => {
    return apis.postComment(req,res);
})

router.get('/apis/getComment/:board_id', (req,res) => {
    return apis.getComment(req,res);
})

router.put('/apis/putComment/:comment_id', (req,res) => {
    return apis.putComment(req,res);
})

router.delete('/apis/deleteComment/:comment_id', (req,res) => {
    return apis.deleteComment(req,res);
})

router.get('/apis/checkLogin', (req,res) => {
    return apis.checkLogin(req,res);
})


module.exports = router;
