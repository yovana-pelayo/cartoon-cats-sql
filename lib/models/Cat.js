const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM CAT;');
    return rows.map((row) => new Cat(row));
  }
};

/// pool connects data in our sql file and sends it to beekeeper database
