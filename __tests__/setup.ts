import { afterAll, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { HttpResponse, graphql, http } from 'msw';

const names = ['John', 'Jane', 'Megan', 'Stewie', 'Peter'];

export const restHandlers = [
  http.get('https://list-family-guy.com', () => {
    return HttpResponse.json(names);
  }),
];

const graphqlHandlers = [
  graphql.query('ListFamilyGuys', () => {
    return HttpResponse.json({
      data: { names },
    });
  }),
];

const server = setupServer(...restHandlers, ...graphqlHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
