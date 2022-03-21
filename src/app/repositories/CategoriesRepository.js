const db = require('../../database');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE ID = $1', [id]);

    return row;
  }

  async findByName(name) {
    const rows = await db.query('SELECT * FROM categories WHERE name like $1', [`%${name}%`]);

    return rows;
  }

  async create({
    name,
  }) {
    const [row] = await db.query(`
        INSERT INTO categories(name)
        VALUES($1)
        RETURNING *
        `, [name]);

    return row;
  }

  async update(id, {
    name,
  }) {
    const [row] = await db.query(`
        UPDATE categories
        SET name = $1
        WHERE ID = $2
        RETURNING *
        `, [name, id]);

    return row;
  }

  async remove(id) {
    const deleteOperation = await db.query(`
        DELETE FROM categories
        WHERE ID = $1
        RETURNING *
        `, [id]);

    return deleteOperation;
  }
}

module.exports = new CategoriesRepository();
