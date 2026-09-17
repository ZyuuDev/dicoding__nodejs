const fs = require('fs');

const fileCallback = (error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(data);
};

fs.readFile('./filesystem/notes.txt', 'UTF-8', fileCallback);