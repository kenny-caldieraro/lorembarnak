const express = require('express');
const app = express();
import { getText } from 'lorembarnak';

app.use(express.json());

app.post('/lorem', (req, res) => {
    const custom = req.body.text.trim();
    let quote;
    if (custom.length > 0) {
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
