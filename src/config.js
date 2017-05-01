export const appName = 'iPOS'
const isProd = process.env.NODE_ENV === 'production'

export const baseUrl = (isProd) ? 'http://icspos.herokuapp.com' : 'http://api-pos.dev'
export const clientId = 2

// ikztiAQlWFHV4mBRxBoBUP1QApzhb4u7AfDhO4Wj mysql
// WU9nfiqDIr9tfClIlsTRNYG5N2EwVLVIcoeyAv2T pgs
// wNAcFjrz0bnWJQMhF7YGMNXFuNRPkcEVoCEmNSJA heroku
export const clientSecret = (isProd) ? 'wNAcFjrz0bnWJQMhF7YGMNXFuNRPkcEVoCEmNSJA' : 'WU9nfiqDIr9tfClIlsTRNYG5N2EwVLVIcoeyAv2T'
export const apiVersion = 'api/v1/'
export const isWeb = false
