export default function (req, res) {
  console.log(":::req:::", req.body);
  let nodemailer = require("nodemailer");
  const mailData = {
    from: "ankitparashar700@gmail.com",
    to: req.body.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };
  // const mailOptions = {
  //   from: "ankitparashar700@gmail.com",
  //   to: req.body.email,
  //   subject: `FORMULARIO DE: ${req.body.name}`,
  //   text: req.body.message,
  //   html: `<div>${req.body.message}</div>`,
  // };
  new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ankitparashar700@gmail.com",
        pass: "izmykucthrrkumgw",
      },
    });

    transport.sendMail(mailData, (error, response) => {
      if (error) {
        console.log("error>>>>>>>", error);
        reject(error);
      } else {
        console.log("response>>>>>>>", response);

        resolve(response.messageId);
      }
      transport.close();
    });
  });
}

// import nodemailer from "nodemailer";
// import { privateKey } from "../../config/privateKeys.js";
// const { createTransport } = nodemailer;

// export const sendEmail = async (toMail) =>
//   new Promise((resolve, reject) => {
//     const transport = createTransport({
//       service: "gmail",
//       auth: {
//         user: privateKey.EMAIL,
//         pass: privateKey.PASSWORD,
//       },
//     });

//     transport.sendMail(toMail, (error, response) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(response.messageId);
//       }
//       transport.close();
//     });
//   });
