const supertest = require('supertest');
const server = require('./api');

const request = supertest(server);

describe('Mock server function', () => {
  test('Ensure server responds with expected data for react testing', (done) => {
    request.get('/search')
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.collection).toBeInstanceOf(Object);
        expect(data.collection.items.length).toEqual(5);
        expect(data.collection.metadata.total_hits).toEqual(5);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        done();
      });
  });
});
