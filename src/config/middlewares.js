import express from "express";

const middlerawes = {
    json: express.json(),
    urlencoded: express.urlencoded({extended: false})
};

// example
// export const toto1 = {
//     json: express.json(),
//     urlencoded: express.urlencoded({extended: false})
// };
// const toto2 = {
//     json: express.json(),
//     urlencoded: express.urlencoded({extended: false})
// };

export default middlerawes;
