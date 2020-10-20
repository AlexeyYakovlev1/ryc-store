const { Router } = require('express');
const router = Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.get('/login', async(req, res) => {
    res.render('account', {
        title: 'Ryc-store авторизация',
        isLogin: true,
        loginError: req.flash('loginError'),
        registerError: req.flash('registerError')
    })
})

router.get('/logout', async(req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
})

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const candidate = await User.findOne({ email });

        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate.password);

            if (areSame) {
                req.session.user = candidate;
                req.session.isAuthenticated = true;
                req.session.save(err => {
                    if (err) {
                        throw err;
                    }
                    res.redirect('/');
                })
            } else {
                req.flash('loginError', 'Данные неверны.')
                res.redirect('/auth/login');
            }
        } else {
            req.flash('loginError', 'Такого пользователя не существует.')
            res.redirect('/auth/login');
        }
    } catch (e) {
        console.log(e.message);
    }
})

router.post('/register', async(req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const candidate = await User.findOne({ email });

        if (candidate) {
            req.flash('registerError', 'Такой пользователь уже существует.')
            res.redirect('/auth/login');
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                firstName,
                lastName,
                email,
                password: hashPassword,
                cart: { items: [] }
            })

            await user.save();
            res.redirect('/auth/login');
        }
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;