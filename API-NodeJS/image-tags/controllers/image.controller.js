const vision = require('@google-cloud/vision');
const fs = require('fs');

exports.extract = (req, res) => {
    const { file } = req.files;

    console.log(file);

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFile: 'vision.json',
    });

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = file.path;

    const request = {
        image: { content: fs.readFileSync(fileName) },
    };

    client
        .objectLocalization(request)
        .then((result1) => {
            const result = result1[0];
            const objects = result.localizedObjectAnnotations;
            objects.forEach((object) => {
                console.log(`Name: ${object.name}`);
                console.log(`Confidence: ${object.score}`);
            });
            res.send({ data: objects });
        })
        .catch((err) => {
            console.log('123', err);
            res.send({ err: err });
        });
};