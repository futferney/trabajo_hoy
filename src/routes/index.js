import { Router } from "express";
const router = Router()


router.get('/',(req, res)=> res.render('index', {tittle:'Bienvenido al index'}))
router.get('/about',(req, res)=> res.render('about', {tittle:'este es el about'}))
router.get('/contact',(req, res)=> res.render('contact', {tittle:'este es el contact'}))

export default router