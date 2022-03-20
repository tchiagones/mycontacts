const { v4 } = require('uuid');

const validation = true;
let contacts = [
  {
    id: v4(),
    name: 'Thiago',
    email: 'thiago.neves@kroonar.com',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Rômulo',
    email: 'romulo.gomes@kroonar.com',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      if (validation) {
        resolve(contacts);
      } else {
        reject(new Error('something bad happened'));
      }
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      if (validation) {
        const contact = contacts.find((item) => item.id === id);
        resolve(contact);
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
