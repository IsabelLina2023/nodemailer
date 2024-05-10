import express from 'express';
import enviar from '../config/mailer.js';


const router = express.Router();

router.get('/inicio', (req, res) =>{
    res.send('hola mundo, soy la configuración con express');
});

router.get('/enviar', (req, res)=>{
    const {to, subject, html} = req.query;
    enviar(to, subject, html);
    res.send('Correo enviado');
})


export default router;