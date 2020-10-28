import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Paul',
      lastName: 'Henry',
      email: 'email@user.com',
      drinkPreference: 'jus de pomme',
      hobbies: ['Course', 'Vélo', 'Natation']
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
