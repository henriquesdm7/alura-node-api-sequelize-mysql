import Express from "express";
import BodyParser from "body-parser";

const port = 3000;
const app = new Express();

app.use(Express.json());

app.get("/", (req, res) => res.status(200).send({ mensagem: 'boas-vindas à API' }));

app.listen(port, () => console.log(`Servidor está online na porta ${port}`));

export default app;