//
// made by fixedOtter on 22.7.2022
//
import { Engineer } from '../lib/Engineer';

describe('Basic data', () => {
  it('Saves user type, name, email, ID, and github', () => {
    expect(new Engineer('Engineer', 'bob', '69', 'bberry@email.com', 'fixedOtter').returnInfo()).toStrictEqual({ type: 'Engineer', name: 'bob', userID: '69', userEmail: 'bberry@email.com', github: 'fixedOtter' });
  })
});