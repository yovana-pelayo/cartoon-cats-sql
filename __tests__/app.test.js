const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { cat } = require('../data/cat');

describe('cat routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cat', async () => {
    const res = await request(app).get('/cat');
    const expected = cat.map((object) => {
      return object;
    });
    expect(res.body).toEqual(expected);
  });

  it('/cat/:id should return cat detail', async () => {
    const res = await request(app).get('/cat/1');
    const felix = {
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      is_sidekick: false,
    };
    expect(res.body).toEqual(felix);
  });
  -cat;

  afterAll(() => {
    pool.end();
  });
});
