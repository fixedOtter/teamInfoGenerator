//
// made by fixedOtter on 22.7.2022
//
import { Engineer } from '../lib/Engineer';

describe('Basic data', () => {
  it('Saves user name, email, ID, and officeNum', () => {
    expect(new Engineer('bob', '69', 'bberry@email.com', 'fixedOtter').returnInfo()).toBe({ name: 'bob', userID: '69', userEmail: 'bberry@email.com', github: 'fixedOtter' });
  })
});