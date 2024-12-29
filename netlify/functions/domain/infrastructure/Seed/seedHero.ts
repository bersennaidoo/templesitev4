import axios from "axios";
import { Hero } from "../../models/Hero/Hero";

export const seedHero = (list: Hero[]) => {
  list.forEach((element) => {
    axios
      .post("http://localhost:8888/api/heroes", element)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
};
const heroes: Hero[] = [
  {
    id: "Cavady",
    image: "/img/stub/400x300.png",
    name: "Cavady",
    description: "Cavady festival",
  },
  {
    id: "Mariammen",
    image: "/img/stub/400x300.png",
    name: "Mariammen",
    description: "Mariammen",
  },
  {
    id: "Diwali",
    image: "/img/stub/400x300.png",
    name: "Diwali",
    description: "festival of lights",
  },
  {
    id: "Tamil",
    image: "/img/stub/400x300.png",
    name: "Tamil",
    description: "new celebration",
  },
  {
    id: "21day",
    image: "/img/stub/400x300.png",
    name: "21day",
    description: "fasting prayer",
  },
  {
    id: "GoodLuck",
    image: "/img/stub/400x300.png",
    name: "GoodLuck",
    description: "Prayer health",
  },
];

seedHero(heroes)