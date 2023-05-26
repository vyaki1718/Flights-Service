const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return response;
  }

  async get(data) {
    const resopnse = await this.model.findByPk(data);
    if(!resopnse){
      throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND)
    }
    return resopnse;
  }

  async getAll() {
    const resopnse = await this.model.findAll();
    return resopnse;
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return resopnse;
  }
}

module.exports = CrudRepository;
