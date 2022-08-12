import database from "../models";

class PessoaController {
    static async findAll(req, res) {
        try {
            const all = await database.Pessoas.findAll();
            return res.status(200).json(all);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default PessoaController;