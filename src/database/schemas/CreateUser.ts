import { ObjectID, Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('createUser')
class CreateUser {
  
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  state: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: string;
}

export default CreateUser;