import { Router } from "express";
const router = Router()


router.get('/',(req, res)=> res.render('index', {tittle:'Bienvenido al index'}))
router.get('/servicios',(req, res)=> res.render('servicios', {tittle:'este es el about'}))
router.get('/contact',(req, res)=> res.render('contact', {tittle:'este es el contact'}))
router.get('/quienes',(req, res)=> res.render('quienes', {tittle:'este es el contact'}))

export default router