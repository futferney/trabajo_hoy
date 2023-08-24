import { Router } from "express";
const router = Router()


router.get('/',(req, res)=> res.render('index', {tittle:'Bienvenido al index'}))
router.get('/servicios',(req, res)=> res.render('servicios', {tittle:'esto es servicios'}))
router.get('/contact',(req, res)=> res.render('contact', {tittle:'este es el contact'}))
router.get('/quienes',(req, res)=> res.render('quienes', {tittle:'este es el contact'}))
router.get('/productos',(req, res)=> res.render('productos', {tittle:'zona de productos'}))
router.get('/formulario',(req, res)=> res.render('formulario', {tittle:'formularios'}))
router.get('',(req, res)=> res.render('', {tittle:'este es el contact'}))

export default router