import { Router } from "express";
const router = Router()


router.get('/',(req, res)=> res.render('index', {tittle:'Bienvenido al index'}))
router.get('/servicios',(req, res)=> res.render('servicios', {tittle:'esto es servicios'}))
router.get('/contact',(req, res)=> res.render('contact', {tittle:'este es el contact'}))

export default router