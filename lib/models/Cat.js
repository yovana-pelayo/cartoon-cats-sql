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
    const { rows } = await pool.query('SELECT * FROM cat;');
    return rows.map((row) => new Cat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cat WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Cat(rows[0]);
  }
};

// $ prevent sql injection
// static cannot be called on an instance only on a class
//method that gets called on the class
//Cat is the class

/// pool connects data in our sql file and sends it to beekeeper database
