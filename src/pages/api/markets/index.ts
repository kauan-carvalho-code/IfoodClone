import { v4 } from "uuid";

const markets = [
  {
    id: v4(),
    name: "Big",
    category: "",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202010121938_31dbd467-bb46-4884-8879-e545789acc39.png",
    checked: false
  },
  {
    id: v4(),
    name: "Eataly",
    category: "",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/595f29c3-3264-4e74-8089-cec0421420fb/202002101723_dmdz_i.jpg",
    checked: false
  },
  {
    id: v4(),
    name: "Dia Supermercado",
    category: "",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0dbcb1e9-b354-4306-b0f7-d485ac655131/202004061634_lP8b_.jpeg",
    checked: false
  },
  {
    id: v4(),
    name: "Big",
    category: "",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202010121938_31dbd467-bb46-4884-8879-e545789acc39.png",
    checked: false
  },
  {
    id: v4(),
    name: "Eataly",
    category: "",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/595f29c3-3264-4e74-8089-cec0421420fb/202002101723_dmdz_i.jpg",
    checked: false
  },
]

export default function handler(req, res) {
  res.status(200).json(markets)
}