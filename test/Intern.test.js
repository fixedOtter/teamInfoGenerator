//
// made by fixedOtter on 22.7.2022
//
import { Intern } from '../lib/Intern';

describe('Basic data', () => {
  it('Saves user type, name, email, ID, and school name', () => {
    expect(new Intern('Intern', 'bob', '69', 'bberry@email.com', 'school').returnInfo()).toStrictEqual({ type: 'Intern', name: 'bob', userID: '69', userEmail: 'bberry@email.com', schoolName: 'school' });
  })
});