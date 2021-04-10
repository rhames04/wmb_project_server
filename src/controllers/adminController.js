const models = require("../db/models");

exports.login = async (req, res) => {
  const { user } = req.body;
  const result = await models.Admin.findOne({
    where: {
      user,
    },
  });

  if (!result) {
    return res.json({ error: "Usuário inválido" });
  } else {
    return res.json({ sucess: `Admin ${user} está logado!`, data: result });
  }
};

exports.get_all_items = async (req, res) => {
  const result = await models.Item.findAll();
  if (result) {
    return res.json({ data: result });
  } else {
    return res.send({ error: "Nenhum dado encontrado." });
  }
};

exports.delete_item = async (req, res) => {
  const { id } = req.params;
  await models.Item.destroy({
    where: {
      id,
    },
  });
  return res.json({ sucess: `Item (id ${id}) foi deletado.` });
};
