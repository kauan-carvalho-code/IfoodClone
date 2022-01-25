import { v4 } from "uuid";

const cities = [{
  id: v4(),
  name: "Belo Horizonte"
}, {
  id: v4(),
  name: "Guarulhos"
}, {
  id: v4(),
  name: "Ribeirão Preto"
}, {
  id: v4(),
  name: "São Bernardo do Campo"
}, {
  id: v4(),
  name: "Brasília"
}, {
  id: v4(),
  name: "João Pessoa"
}, {
  id: v4(),
  name: "Rio de Janeiro"
}, {
  id: v4(),
  name: "São Caetano do Sul"
}, {
  id: v4(),
  name: "Campinas"
}, {
  id: v4(),
  name: "Natal"
}, {
  id: v4(),
  name: "Salvador"
}, {
  id: v4(),
  name: "São Paulo"
}, {
  id: v4(),
  name: "Curitiba"
}, {
  id: v4(),
  name: "Niterói"
}, {
  id: v4(),
  name: "Santo André"
}, {
  id: v4(),
  name: "Goiânia"
}, {
  id: v4(),
  name: "Porto Alegre"
}, {
  id: v4(),
  name: "Santos"
}];

export default function handler(req, res) {
  res.status(200).json(cities)
}