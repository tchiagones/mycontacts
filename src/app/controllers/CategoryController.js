const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const Categorys = await CategoriesRepository.findAll(orderBy);
    response.json(Categorys);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    return response.json(category);
  }

  async search(request, response) {
    const { name } = request.query;
    const categories = await CategoriesRepository.findByName(name);

    if (!categories) {
      return response.status(404).json({ error: 'No category found' });
    }

    return response.json(categories);
  }

  async store(request, response) {
    const {
      name,
    } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.create({
      name,
    });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
    } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(404).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.update(id, {
      name,
    });

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.remove(id);
    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
