import express from 'express';

const router = express.Router();

router.get('/inicio', (req, res) =>{
    res.send('hola mundo, soy la configuración con express');
});




export default router;