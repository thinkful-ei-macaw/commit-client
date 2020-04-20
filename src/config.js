export default {
  API_ENDPOINT: 'http://localhost:8080/api',
  TOKEN_KEY: 'commit-client-auth-token',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
}