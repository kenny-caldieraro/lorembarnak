const express = require('express');
const app = express();
const { getText } = require('lorembarnak');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/lorem', (req, res) => {
    let quote;
    if (custom && !isNaN(custom)) {
        quote = getText(parseInt(custom));
    } else {
        quote = getText();
    }

    res.json({
        response_type: 'in_channel',
        text: quote,
        attachments: [
            {
                text: '🍁 LOREMBARNAK',
            },
        ],
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
