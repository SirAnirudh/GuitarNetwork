module.exports = {
  port: process.env.PORT || 8081,
  db: {
      database: process.env.DB_NAME || 'guitarnetwork',
      user: process.env.DB_USER || 'guitarnetwork',
      password: process.env.DB_PASS || 'guitarnetwork',
      options: {
          dialect: process.env.DIALECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: './guitarnetwork.sqlite'
      }
  },
  authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}