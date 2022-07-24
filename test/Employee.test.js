//
// made by fixedOtter on 22.7.2022
//

import { Employee } from '../lib/Employee';

describe('Basic data', () => {
  it('Saves user type, name, email, and ID', () => {
    expect(new Employee('Employee', 'bob', '69', 'bberry@email.com').returnInfo()).toStrictEqual({ type: 'Employee', name: 'bob', userID: '69', userEmail: 'bberry@email.com' });
  })
});