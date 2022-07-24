//
// made by fixedOtter on 22.7.2022
//
import { Intern } from '../lib/Intern';

describe('Basic data', () => {
  it('Saves user name, email, ID, and officeNum', () => {
    expect(new Intern('bob', '69', 'bberry@email.com', 'school').returnInfo()).toBe({ name: 'bob', userID: '69', userEmail: 'bberry@email.com', schoolName: 'school' });
  })
});