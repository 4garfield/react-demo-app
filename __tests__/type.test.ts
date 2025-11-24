import { describe, expectTypeOf, it } from 'vitest';

type ManTypes = {
  name: string;
  age: number;
  schools: { college: string; grade: string }[];
};

describe('some types', () => {
  it('matches the expected type', () => {
    const man: ManTypes = {
      name: 'John',
      age: 98,
      schools: [{ college: 'Harvard', grade: 'first class' }],
    };
    expectTypeOf(man).toEqualTypeOf<ManTypes>();
  });
});
