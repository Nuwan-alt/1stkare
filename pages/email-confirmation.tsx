import { NextSeo } from 'next-seo'
import EmailConfirmation from '../src/components/email-confirmation/email-confirmation'

function EmailConfirmationPage() {
  return (
    <div className="page_container">
      <NextSeo title="Email Confirmation" />
      <EmailConfirmation />
    </div>
  )
}

export default EmailConfirmationPage
