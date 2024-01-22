import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('111111', 10),
    isAdmin: true
  },
  {
    name: 'sameh',
    email: 'nnhhn@gmail.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'ali',
    email: 'ali@gmail.com',
    password: bcrypt.hashSync('1234567', 10)
  },
]

export default users