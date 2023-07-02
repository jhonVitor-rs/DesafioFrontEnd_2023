const faker = require('faker');
const path = require('path')
const fs = require('fs')

const TOTAL_PAGES = 5;

const filePath = path.resolve("data", "data.json");

const data = fs.readFileSync(filePath, 'utf8');
const baseVideos = JSON.parse(data)
const allVideos = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const videos = baseVideos.map( (video, index) => ({
    ...video,
    id: index,
    description: faker.lorem.paragraph(),
    created_at: faker.date.past(),
    views: Math.random()
  })).sort(() => .5 - Math.random())

  return [...acc, ...videos]
}, [])

module.exports = {
  products: allVideos
}
