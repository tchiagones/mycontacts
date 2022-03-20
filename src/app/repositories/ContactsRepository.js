const { uuid } = require('uuidv4');

const validation = true;
const contacts = [
  {
    id: uuid(),
    name: 'Thiago',
    email: 'thiago.neves@kroonar.com',
    category_id: uuid(),
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
}

module.exports = new ContactsRepository();
