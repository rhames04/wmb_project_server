const models = require("../db/models");

exports.login = async (req, res) => {
  const { user } = req.body;
  const result = await models.Employee.findOne({
    where: {
      user,
    },
  });

  if (!result) {
    return res.json({ error: "Usuário inválido" });
  } else {
    return res.json({
      sucess: `Funcionário ${user} está logado!`,
      data: result,
    });
  }
};

exports.add_item = async (req, res) => {
  console.log(req);
  const { id, value_1, value_2 } = req.body;
  const { photo, file } = res.req.files;

  function verify(file) {
    if (typeof file === "undefined") return null;
    if (file.length >= 1) return file[0].path;
  }

  const result = await models.Item.create({
    id_employee: id,
    value_1,
    value_2,
    photo: verify(photo),
    file: verify(file),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json({ data: result });
};
