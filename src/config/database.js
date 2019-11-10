module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'finances',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
