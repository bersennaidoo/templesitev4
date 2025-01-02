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
    image: "/img/stub/temple-events.png",
    name: "Cavady",
    date: "12/10/2025",
    summary: "Cavady Festival",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta totam magni voluptatibus possimus odio deserunt minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta?",
  },
  {
    id: "Mariammen",
    image: "/img/stub/temple-events.png",
    name: "Mariammen",
    date: "24/11/2025",
    summary: "Mariammen",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta totam magni voluptatibus possimus odio deserunt minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta?",
  },
  {
    id: "Diwali",
    image: "/img/stub/temple-events.png",
    name: "Diwali",
    date: "24/10/2025",
    summary: "Festival of lights",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta totam magni voluptatibus possimus odio deserunt minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta?",
  },
  {
    id: "Tamil",
    image: "/img/stub/temple-events.png",
    name: "Tamil",
    date: "10/06/2025",
    summary: "new celebration",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta totam magni voluptatibus possimus odio deserunt minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta?",
  },
  {
    id: "21day",
    image: "/img/stub/temple-events.png",
    name: "21day",
    date: "10/07/2025",
    summary: "fasting prayer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta totam magni voluptatibus possimus odio deserunt minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta?",
  },
  {
    id: "GoodLuck",
    image: "/img/stub/temple-events.png",
    name: "GoodLuck",
    date: "11/07/2025",
    summary: "Prayer health",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta totam magni voluptatibus possimus odio deserunt minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium placeat hic, nihil numquam voluptates porro omnis incidunt sequi, ipsa nam, deleniti soluta",
  },
];

seedHero(heroes)