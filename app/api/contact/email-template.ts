interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmailTemplate = ({ name, email, subject, message }: EmailTemplateProps) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: 2px;">
                VAMSHI
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">
                Portfolio Contact Form
              </p>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 24px 0; color: #1f2937; font-size: 24px; font-weight: 700;">
                📬 New Contact Form Submission
              </h2>
              
              <p style="margin: 0 0 30px 0; color: #6b7280; font-size: 16px; line-height: 1.6;">
                You've received a new message through your portfolio contact form.
              </p>

              <!-- Contact Information Cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <!-- Name -->
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px; margin-bottom: 12px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <span style="color: #ffffff; font-size: 18px;">👤</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Name
                          </p>
                          <p style="margin: 4px 0 0 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                            ${name}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>
                
                <!-- Email -->
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #8b5cf6, #ec4899); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <span style="color: #ffffff; font-size: 18px;">📧</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Email Address
                          </p>
                          <p style="margin: 4px 0 0 0;">
                            <a href="mailto:${email}" style="color: #3b82f6; font-size: 16px; font-weight: 600; text-decoration: none;">
                              ${email}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>
                
                <!-- Subject -->
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #ec4899, #f97316); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <span style="color: #ffffff; font-size: 18px;">💬</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Subject
                          </p>
                          <p style="margin: 4px 0 0 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                            ${subject}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05)); border: 2px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 16px 0; color: #1f2937; font-size: 18px; font-weight: 700; display: flex; align-items: center;">
                  <span style="margin-right: 8px;">✉️</span> Message
                </h3>
                <div style="color: #374151; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${message}
                </div>
              </div>

              <!-- Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 9999px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px;">
                This email was sent from your portfolio contact form
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                <strong>VAMSHI</strong> • Portfolio © 2026
              </p>
              <p style="margin: 12px 0 0 0; color: #9ca3af; font-size: 12px;">
                Sent on ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// Plain text version for email clients that don't support HTML
export const ContactEmailPlainText = ({ name, email, subject, message }: EmailTemplateProps) => {
  return `
NEW CONTACT FORM SUBMISSION
===========================

From: ${name}
Email: ${email}
Subject: ${subject}

MESSAGE:
${message}

---
Reply to: ${email}
Sent: ${new Date().toLocaleString()}
VAMSHI Portfolio © 2026
  `.trim();
};
