export default function ({ $axios, redirect, app, store, req }) {
  // base_url for development mode
  $axios.setBaseURL(`http://localhost:300`)

  function setHeader() {
    let accessToken = null
    accessToken = app.$cookies.get('raayaToken')

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      lang: app.i18n.locale,
    }
    headers.Authorization = accessToken ?? ''

    return headers
  }
  // Add a request interceptor
  $axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers = setHeader(config)

      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}
