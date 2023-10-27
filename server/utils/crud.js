const ErrorHeandler = require("./ErrorHeandler");
const Apifeature = require("./Apifeatures");

class Crud {
  constructor(module, req, res, next) {
    this.module = module;
    this.req = req;
    this.res = res;
    this.next = next;
    this.data = {};
  }
  async create() {
    const data = await this.module.create(this.req.body);
    this.data = data;
    this.res.status(201).json({
      message: "success",
      data,
    });
    return data;
  }


  async getAlldata(key, query, find) {
    const apifeatures = new Apifeature(this.module.find({ ...find }), query)
      .search(key, this.req.query.keyword)
      .filter()
      .page()
    const data = await apifeatures.query;
    this.data = data;
    this.res.status(201).json({ message: "success", data });
    return data;
  }

  async update(message) {
    const data = await this.module.findByIdAndUpdate(
      this.req.params.id,
      this.req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    if (!data) this.next(new ErrorHeandler(404, message + "not found"));
    this.data = data;
    this.res.status(201).json({ message: "success", data });

    return data;
  }

  async delete(message) {
    const data = await this.module.findById(this.req.params.id);
    if (!data) this.next(new ErrorHeandler(404, message + "not found"));
    await data.remove();
    this.res.status(201).json({ message: "success" });
  }

}

module.exports = Crud;
