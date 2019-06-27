const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const PDFDocument = require('pdfkit');
const fs = require('fs');

router.get('/', (req, res) => {
  Users
    .findOne({ where: {firstname: req.query.firstname} })
    .then(users => {
      return createPdf(users)
    })
    .then( pdfBuff => {
      Users
        .update({
          "pdf": pdfBuff
        },
        {
          where: {firstname: req.query.firstname}
        })
        .then(users => { return res.status(200).json(true) })
        .catch(err => {
          return res.sendStatus(500).json(false)
        })
    })
    .catch(err => res.status(500).json(err))
});

function createPdf (user) {
  return new Promise(function executor (resolve, reject) {
    const doc = new PDFDocument;
    doc.text(user.firstName + ' ' + user.lastName);
    if (user.image) 
      doc.image(user.image);
    doc.end();

    const buffs = [];
    doc.on('data', data => buffs.push(data));
    doc.on('end', () => {
      resolve(Buffer.concat(buffs));
    })
  })
}

module.exports = router;
