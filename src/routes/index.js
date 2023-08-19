import { Router } from "express";
const router = Router()


router.get('/',(req, res)=> res.render('index', {tittle:'InnovateTech Solutions'}))
router.get('/about',(req, res)=> res.render('about', {tittle:'este es el about'}))
router.get('/contact',(req, res)=> res.render('contact', {tittle:'este es el contact'}))
router.get('/quienes',(req, res)=> res.render('quienes', {tittle:'quienes somos'}))
router.get('/quienes',(req, res)=> res.render('quienes', {tittle:'quienes somos'}))
router.get('/quienes',(req, res)=> res.render('quienes', {tittle:'quienes somos'}))

export default router