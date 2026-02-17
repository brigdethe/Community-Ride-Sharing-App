const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Orda Rides: Book trusted rides in your neighborhood—anytime',
        description: 'Book trusted rides in your neighborhood—anytime'
    });
});

app.get('/home', (req, res) => {
    res.redirect('https://www.ordarides.com/home');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
