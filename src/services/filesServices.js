import https from 'https';
import fs from 'fs';

export async function downloadFile(){
    console.log('entrei na função');
    let file = fs.createWriteStream("src/teste.zip");
    let url = 'https://challenges.coode.sh/food/data/json/products_01.json.gz';
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => {console.log('finalizado')});
        });
    })
}