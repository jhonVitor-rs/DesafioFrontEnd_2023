import { faker } from "@faker-js/faker";
import { Video } from "@/types/data";
import data from "./data/data.json"

const TOTAL_PAGES = 1;

const baseVideos = data
const allVideos = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const videos = baseVideos.map((video, index) => ({
    ...video,
    id: index,
    description: faker.lorem.paragraph(),
    created_at: faker.date.past(),
    views: Math.floor(Math.random() * 900) + 101 
  })).sort(() => .5 - Math.random())

  return [...acc, ...videos]
}, [])

const media = {
  data: allVideos as Video[]
};

export default media;
