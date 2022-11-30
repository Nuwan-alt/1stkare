import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { getAuth } from '../src/utils/firebase/firebase-app'
import useAfterSignUp from '../src/utils/auth/use-after-sign-up'
import { useUser } from '../src/utils/user/user-context'
import { useCity } from '../src/utils/city/city-context'
import type { AuthSignUpOnHasuraInput } from '../src/utils/auth/types'
function CustomEmail() {
  const router = useRouter()
  const { refresh: refreshUser } = useUser()
  const { zipAndCity } = useCity()

  const afterSignUp = useAfterSignUp({
    onSuccess: async () => {
      await refreshUser()
      await router.push('/settings/seller-profile?onboarding=1')
    },
  })
  const input = useMemo<Omit<AuthSignUpOnHasuraInput, 'idToken'>>(
    () => ({
      zip_code_id: zipAndCity?.id!,
      full_name: 'User',
      business_size: 'INDIVIDUAL',
      is_email_verified: true,
    }),
    [zipAndCity?.id]
  )
  useEffect(() => {
    console.log('*****************')
    if (getAuth().isSignInWithEmailLink(window.location.href)) {
      const email = window.localStorage.getItem('emailForSignIn') ?? ''
      if (!email) router.push('/login')
      getAuth()
        .signInWithEmailLink(email, window.location.href)
        .then(({ user }) => {
          console.log(
            '🚀 ~ file: confirm-email.tsx ~ line 26 ~ getAuth ~ user',
            user
          )
          afterSignUp(user!, input)
        })
    }
  }, [])
  return <h1>Loading</h1>
}
export default CustomEmail
