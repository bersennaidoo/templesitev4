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
    id: "Cavady April",
    image: "/img/stub/400x300.png",
    name: "Cavady April",
    description: "Cavady festival",
  },
  {
    id: "Mariammen",
    image: "/img/stub/400x300.png",
    name: "Mariammunun",
    description: "Mariammen",
  },
  {
    id: "Diwali",
    image: "/img/stub/400x300.png",
    name: "Diwali",
    description: "festival of lights",
  },
  {
    id: "Tamil new year",
    image: "/img/stub/400x300.png",
    name: "Tamil new year",
    description: "new celebration",
  },
  {
    id: "21 day prayer",
    image: "/img/stub/400x300.png",
    name: "21 day prayer",
    description: "fasting prayer",
  },
  {
    id: "Good Luck Prayer",
    image: "/img/stub/400x300.png",
    name: "Good Luck Prayer",
    description: "Prayer for health wealth",
  },
];

seedHero(heroes)