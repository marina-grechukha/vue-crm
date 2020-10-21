import localizeFilter from '@/filters/localize.filter'

export default {
  logout: localizeFilter('logout'),
  login: localizeFilter('first-login'),
  'auth/user-not-found': localizeFilter('no-email'),
  'auth/wrong-password': localizeFilter('wrong-password'),
  'auth/email-already-in-use': localizeFilter('email-in-use')
}
