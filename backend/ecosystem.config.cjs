module.exports = {
  apps: [
    {
      name: 'wish-quest',
      script: './bin/www.js',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      env: {
        PORT: '11010',
        STORAGE: 'D:\\.myworld\\wish-quest\\backend\\storage'
      }
    }
  ]
}
