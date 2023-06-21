import { OAuth2Client } from "google-auth-library";
import { GetAccessTokenResponse } from "google-auth-library/build/src/auth/oauth2client";
import nodemailer from "nodemailer";

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.MAIL_CLIENT_SECRET}`;
const REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
const SENDER_MAIL = `${process.env.MAIL_SENDER_EMAIL_ADDRESS}`;

const sendEmail = async (to: string, active_token: string, txt: string) => {
  const oAuth2Client = new OAuth2Client(
    CLIENT_ID,
    CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    const mailOptions = {
      from: SENDER_MAIL,
      to: to,
      subject: "Instagram",
      html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the LocNguyenBlog.</h2>
      <p>Congratulations! You're almost set to start using LocNguyenBlog.
          Just click the button below to validate your email address.
      </p>
      
      <a href=https://localhost:3000/${active_token} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
  
      <p>If the button doesn't work for any reason, you can also click on the link below:</p>
  
      <div>${active_token}</div>
      </div>
  `,
    };
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
