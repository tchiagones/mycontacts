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
  async findAll() {
    const rows = await db.query(`
        SELECT * FROM contacts
        `);

    return rows;
  }

  async findById(id) {
    const rows = await db.query(`
        SELECT * FROM contacts WHERE ID = $1
        `, [id]);

    return rows;
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      if (validation) {
        resolve(contacts.find((item) => item.email === email));
      } else {
        reject(new Error('something bad happened'));
      }
    });
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
