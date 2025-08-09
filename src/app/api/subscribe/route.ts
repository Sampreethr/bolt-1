import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { addSubscriber, isSubscribed, markConfirmationSent } from '@/src/lib/subscribers'

// Initialize Resend (you'll need to add your API key to .env.local)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface SubscriptionRequest {
  email: string;
  source?: string;
  timestamp?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscriptionRequest = await request.json()
    const { email, source = 'unknown', timestamp } = body

    // Validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Add subscriber using the storage system
    const subscriptionResult = await addSubscriber(normalizedEmail, source)
    
    if (!subscriptionResult.success) {
      return NextResponse.json(
        { error: subscriptionResult.message },
        { status: 500 }
      )
    }

    if (subscriptionResult.alreadyExists) {
      return NextResponse.json(
        { 
          message: subscriptionResult.message,
          alreadySubscribed: true 
        },
        { status: 200 }
      )
    }

    // Send welcome email (only if Resend is configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: 'AuditsPro Australia <noreply@auditspro.com.au>',
          to: [normalizedEmail],
          subject: '✅ Welcome to AuditsPro Compliance Updates',
          html: generateWelcomeEmail(normalizedEmail, source),
        })

        // Mark confirmation email as sent
        await markConfirmationSent(normalizedEmail)
        console.log(`✅ Welcome email sent to: ${normalizedEmail}`)
      } catch (emailError) {
        console.error('❌ Failed to send welcome email:', emailError)
        // Don't fail the subscription if email fails
      }
    } else {
      console.log(`📧 Email service not configured. Subscription saved for: ${normalizedEmail}`)
    }

    // Log subscription (in production, save to database)
    console.log(`📧 New subscription: ${normalizedEmail} from ${source} at ${timestamp}`)

    return NextResponse.json(
      { 
        message: 'Successfully subscribed! Check your email for confirmation.',
        email: normalizedEmail,
        subscribed: true
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// GET endpoint to check subscription status (optional)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()
    const subscribed = await isSubscribed(normalizedEmail)
    
    return NextResponse.json(
      { 
        email: normalizedEmail,
        subscribed,
        message: subscribed ? 'Email is subscribed' : 'Email is not subscribed'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error checking subscription:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Generate welcome email HTML
function generateWelcomeEmail(email: string, source: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to AuditsPro Compliance Updates</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8fafc;
        }
        .container {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          width: 60px;
          height: 60px;
          background: #3b82f6;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .title {
          color: #1e293b;
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 10px 0;
        }
        .subtitle {
          color: #64748b;
          font-size: 16px;
          margin: 0;
        }
        .content {
          margin: 30px 0;
        }
        .highlight-box {
          background: #f1f5f9;
          border-left: 4px solid #3b82f6;
          padding: 20px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        .updates-list {
          list-style: none;
          padding: 0;
        }
        .updates-list li {
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .updates-list li:last-child {
          border-bottom: none;
        }
        .updates-list li::before {
          content: "✅";
          margin-right: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 14px;
        }
        .button {
          display: inline-block;
          background: #3b82f6;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          margin: 20px 0;
        }
        .unsubscribe {
          color: #64748b;
          font-size: 12px;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <span style="color: white; font-size: 24px; font-weight: bold;">A</span>
          </div>
          <h1 class="title">Welcome to AuditsPro Australia!</h1>
          <p class="subtitle">Your trusted partner for trust account compliance</p>
        </div>

        <div class="content">
          <p>Hi there,</p>
          
          <p>Thank you for subscribing to our compliance updates! You'll now receive the latest information about:</p>

          <div class="highlight-box">
            <ul class="updates-list">
              <li>Trust account regulation changes</li>
              <li>ASIC compliance requirements</li>
              <li>State-specific audit deadlines</li>
              <li>Industry best practices</li>
              <li>Regulatory updates and alerts</li>
            </ul>
          </div>

          <p>We're committed to keeping Australian professionals informed about the latest compliance requirements to help you maintain perfect audit records.</p>

          <div style="text-align: center;">
            <a href="https://auditspro.com.au/dashboard" class="button">
              Visit Your Dashboard
            </a>
          </div>

          <p><strong>What's Next?</strong></p>
          <p>You'll receive our next compliance update within the next few days. In the meantime, feel free to explore our audit services and compliance tools.</p>
        </div>

        <div class="footer">
          <p><strong>AuditsPro Australia</strong><br>
          Professional Trust Account Audit Services<br>
          📧 ${email} • 📞 1300 AUDITS</p>
          
          <p style="margin-top: 20px;">
            <a href="#" class="unsubscribe">Unsubscribe from these emails</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}