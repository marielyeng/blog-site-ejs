import express from 'express';
import bodyParser from 'body-parser';


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
let submissions = [];

router.get('/', (req, res) => {
    res.render('index.ejs');
});


router.post('/submit', (req, res) => {
    const { authorName, title, category, content } = req.body;
    submissions.push({  authorName, title, category, content });
    res.redirect('/collection')
});

router.get('/collection', (req, res) => {
    res.render('collection.ejs', { submissions });
});

router.put('/update/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const updatedSubmission = req.body;
    console.log(updatedSubmission)
    if (index >= 0 && index < submissions.length) {
        console.log(`Updated successfully!`)
    } else {
        res.json({ success: false });
    }
});

router.delete('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    console.log('Delete request received for index:', index);

    if (index >= 0 && index < submissions.length) {
        submissions.splice(index, 1);
        res.json({ success: true, submissions });
    } else {
        res.status(400).json({ success: false, error: 'Invalid submission index' });
    }
});

export default router;
