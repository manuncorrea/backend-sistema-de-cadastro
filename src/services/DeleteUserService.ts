import { isValidObjectId } from 'mongoose';
import User from '../models/User';

interface Request {
  id: string
}

class DeleteUserService {
  public async execute({ id }: Request) {
    if(!isValidObjectId(id)) throw new Error('Invalid id argument type')

    const userExists = await User.findById(id)

    if(!userExists) throw new Error('User not found' )

    const user = await User.findByIdAndDelete(id)

    return user
  }
}

export default DeleteUserService