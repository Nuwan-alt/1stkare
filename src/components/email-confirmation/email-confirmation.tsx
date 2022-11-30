import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './email-confirmation.module.scss'
import emailConfirmationImg from '../../assets/images/email-confirmation.png'
import Image from 'next/image'

function EmailConfirmation() {
  return (
    <div>
      <Header />
      <div className={styles['email-confirmation-section']}>
        <div>
          <div className={styles['email-confirmation-img']}>
            <Image src={emailConfirmationImg} alt="Email Confirmation" />
          </div>
          <h2 className={styles['email-confirmation-title']}>
            Verify Your Email
          </h2>
          <p className={styles['email-confirmation-desc']}>
            We've sent an email to your email address to verify and activate
            your account.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EmailConfirmation
