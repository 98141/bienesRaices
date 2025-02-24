import express from 'express';

const router = express.Router();

//Routing
router.get('/', function(req, res){
    res.send('Hola Mundo');
});

router.get('/nosotros', function(req, res){
    res.send('Hola Mundo nosotros');
});

export default router;