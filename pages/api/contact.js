export default function (req, res) {
  console.log(":::req:::", req.body);
  let nodemailer = require("nodemailer");
  const mailData = {
    from: "ankitparashar700@gmail.com",
    to: req.body.email,
    // bcc: "ankitparashar700@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `
    <style>
.thankyou-wrapper{
  width:100%;
  height:auto;
  margin:auto;
  background:#ffffff; 
  padding:10px 0px 50px;
}
.thankyou-wrapper h1{
  font:100px Arial, Helvetica, sans-serif;
  text-align:center;
  color:#333333;
  padding:0px 10px 10px;
}
.thankyou-wrapper p{
  font:26px Arial, Helvetica, sans-serif;
  text-align:center;
  color:#333333;
  padding:5px 10px 10px;
}
.thankyou-wrapper a{
  font:26px Arial, Helvetica, sans-serif;
  text-align:center;
  color:#ffffff;
  display:block;
  text-decoration:none;
  width:250px;
  background:#E47425;
  margin:10px auto 0px;
  padding:15px 20px 15px;
  border-bottom:5px solid #F96700;
}
.thankyou-wrapper a:hover{
  font:26px Arial, Helvetica, sans-serif;
  text-align:center;
  color:#ffffff;
  display:block;
  text-decoration:none;
  width:250px;
  background:#F96700;
  margin:10px auto 0px;
  padding:15px 20px 15px;
  border-bottom:5px solid #F96700;
}
</style>
    <section class="login-main-wrapper">
      <div class="main-container">
          <div class="login-process">
              <div class="login-main-container">
                  <div class="thankyou-wrapper">
                      <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                        <p>for contacting us, we will get in touch with you soon... </p>
                        <a href="index.html">Back to home</a>
                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>
                </div>
            </div>
            <div class="clr"></div>
        </div>
    </section>
    `,
  };

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
  }).then((response) => {
    res.status(200).json({ message: "Hello from Next.js!" });
  });
}
