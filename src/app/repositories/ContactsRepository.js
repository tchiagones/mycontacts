// const { v4 } = require('uuid');
const db = require('../../database');

const validation = true;
let contacts = [
  // {
  //   id: v4(),
  //   name: 'Thiago',
  //   email: 'thiago.neves@kroonar.com',
  //   category_id: v4(),
  // },
  // {
  //   id: v4(),
  //   name: 'Rômulo',
  //   email: 'romulo.gomes@kroonar.com',
  //   category_id: v4(),
  // },
];

class ContactsRepository {
  async findAll(orderBy) {
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${orderBy}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE ID = $1', [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);

    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
        INSERT INTO contacts(name, email, phone, category_id)
        VALUES($1, $2, $3, $4)
        RETURNING *
        `, [name, email, phone, category_id]);

    return row;
  }

  update(id, { name, email }) {
    return new Promise((resolve, reject) => {
      if (validation) {
        const updatedContact = {
          id,
          name,
          email,
        };

        contacts = contacts.map((contact) => (
          contact.id === id ? updatedContact : contact
        ));

        resolve(updatedContact);
      } else {
        reject(new Error('something bad happened'));
      }
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      if (validation) {
        contacts = contacts.filter((item) => item.id !== id);
        resolve();
      } else {
        reject(new Error('something bad happened'));
      }
    });
  }
}

module.exports = new ContactsRepository();
