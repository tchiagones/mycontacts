const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  index(request, response) {
    const Contacts = ContactsRepository.findAll();
    response.json(Contacts);
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
