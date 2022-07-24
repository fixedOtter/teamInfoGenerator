//
// made by fixedOtter on 22.7.2022
//
import { Manager } from '../lib/Manager';

describe('Basic data', () => {
  it('Saves user type, name, email, ID, and officeNum', () => {
    expect(new Manager('Manager', 'bob', '69', 'bberry@email.com', '69').returnInfo()).toStrictEqual({ type: 'Manager', name: 'bob', userID: '69', userEmail: 'bberry@email.com', officeNum: '69' });
  })
});