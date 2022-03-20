const { uuid } = require('uuidv4');

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
    return contacts;
  }
}

module.exports = new ContactsRepository();
