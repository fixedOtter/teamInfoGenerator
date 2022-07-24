//
// made by fixedOtter on 22.7.2022
//

import Employee from 'Employee';

describe('Basic data', () => {
  it('Saves user name, email, and ID', () => {
    expect(new Employee('bob', '69', 'bberry@email.com').returnInfo()).toBe({ name: 'bob', userID: '69', userEmail: 'bberry@email.com' });
  })
});