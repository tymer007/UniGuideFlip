export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your UniGuide Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #0A344B; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #D4F4FB;">
  <div style="background-color: #4EB3D3; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <img src="https://uniguideng.com/logos/uniGuideLogoWhite.png" alt="UniGuide Logo" style="width: 60px;">
    <h1 style="color: white; margin: 10px 0;">Verify Your Email Address</h1>
  </div>
  <div style="background-color: #fff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p style="color: #0A344B;">Hello,</p>
    <p>Welcome to UniGuide! We’re excited to have you join the University of Jos campus navigation community. Please use the verification code below to complete your sign-up:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #0754EB;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration. The code is valid for 15 minutes to ensure security.</p>
    <p>This message was sent to {email}, If you did not sign up for UniGuide, please disregard this message.</p>
    <p>Best regards,<br>The UniGuide Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message; please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to UniGuide</title>
</head>
<body style="font-family: Arial, sans-serif; color: #0A344B; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #D4F4FB;">
  <div style="text-align: center;">
    <img src="https://uniguideng.com/welcomeBanner.png" alt="Welcome to UniGuide" style="width: 100%; border-radius: 5px 5px 0 0;">
  </div>
  <div style="padding: 20px; background-color: #fff; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <h2 style="color: #0754EB;">Welcome, {name}!</h2>
    <p>We're thrilled to have you join UniGuide, your online campus companion designed to make your university experience at the University of Jos seamless and informed!</p>
    <h3 style="color: #0754EB;">Key Features 🌟</h3>
    <ul style="padding-left: 20px;">
      <li>📍 <strong>Interactive Campus Map</strong>: Navigate your campus with ease using real-time location guidance.</li>
      <li>📆 <strong>Event & Class Alerts</strong>: Get notified about class changes, events, and important announcements.</li>
      <li>📚 <strong>Resource Directory</strong>: Quickly find library locations, study spots, and other campus resources.</li>
    </ul>
    <p>Start exploring UniGuide and see how it can make your campus journey smoother, more engaging, and informed.</p>
    <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@uniguideng.com" style="color: #4EB3D3;">support@uniguideng.com</a>. We’re here to help!</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://uniguideng.com/campus" style="padding: 15px 30px; color: #fff; background-color: #4EB3D3; text-decoration: none; border-radius: 5px; font-size: 16px;">Explore UniJos</a>
    </div>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888;">
    <p>Stay connected! Follow us to stay updated:</p>
    <a href="https://web.facebook.com/people/UniGuide-NG/61567782034496/" style="margin: 0 5px;"><img src="https://uniguideng.com/logos/facebook.png" alt="Facebook" width="16"></a>
    <a href="https://www.instagram.com/uniguide_ng" style="margin: 0 5px;"><img src="https://uniguideng.com/logos/instagram.png" alt="Instagram" width="24"></a>
    <a href="https://x.com/UniGuide_NG" style="margin: 0 5px;"><img src="https://uniguideng.com/logos/twitter.png" alt="Twitter" width="26"></a>
  </div>
  <div style="text-align: center; font-size: 0.8em; color: #888; margin-top: 20px;">
    <p>© UniGuide 2024 All Rights Reserved.</p>
    <a href="{unsubscribe_link}" style="color: #888; text-decoration: none;">Unsubscribe</a>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
