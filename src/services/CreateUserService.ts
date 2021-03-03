import User from '../models/User';

interface AdressProps{
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

interface UserProps {
  firstName: string;
  lastName: string;
  adress: AdressProps;
  phone: string;
}

class CreateUserServices {
  public async execute({ firstName, lastName, adress, phone }: UserProps) {
    const user = User.create({firstName, lastName, adress, phone})

    return user;
  }
   
}

export default CreateUserServices;