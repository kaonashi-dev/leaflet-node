const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
   res.render('index');
});

router.get('/admin', (req, res) => {
   console.log(req.params);
   res.render('index_admin');
});

router.post('/admin/new', (req, res) => {
   console.log(req.body);
   
   res.end(':)');
});

module.exports = router;