import { v4 } from "uuid";

const restaurants = [
  {
    id: v4(),
    name: "Mcdonald's",
    category: "Lanches",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg",
    checked: true
  },
  {
    id: v4(),
    name: "Coco Bambu",
    category: "Frutos Do Mar",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201910292243_94aaf166-84cc-4ebf-a35d-d223be34d01f.png",
    checked: true
  },
  {
    id: v4(),
    name: "China In Box",
    category: "Chinesa",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/d4a3984f-2b73-4f46-99df-1d6bc79ff293/202001031317_CXpO_i.png",
    checked: true
  },
  {
    id: v4(),
    name: "Habib's",
    category: "Lanches",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg",
    checked: true
  },
  {
    id: v4(),
    name: "Outback Steakhouse",
    category: "Lanches",
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201906182008_2b157a73-7564-4733-94c1-8d0376e7bb39.png",
    checked: true
  },
]

export default function handler(req, res) {
  res.status(200).json(restaurants)
}