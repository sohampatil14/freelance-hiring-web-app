const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.from = `Find Programmer <${
      process.env.NODE_ENV === "DEVELOPMENT"
        ? process.env.SMTP_EMAIL_FROM
        : process.env.EMAIL_FROM
    }>`;
  }

  newTransport() {
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "DEVELOPMENT"
    ) {
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // This is Production environment
      return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
  }

  //Send the actual email
  async send(html, subject) {
    //2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    //3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("Welcome to the Programmer Family");
  }

  async sendResetPassword() {
    await this.send(
      `Click here to reset your password: <a href=${this.url}><button>Reset Password</button></a>`,
      "Find Programmer | Your password reset Token ( valid for only 10 minutes )"
    );
  }
};
