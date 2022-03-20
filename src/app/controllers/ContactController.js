const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const Contacts = await ContactsRepository.findAll();
    response.json(Contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    return response.json(contact);
  }

  store() {

  }

  update() {

  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactsRepository.remove(id);
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
