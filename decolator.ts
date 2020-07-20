const logging = (target: Function) => {
  console.log('Logging');
};

@logging
class User {
  name = 'quill';
  constructor() {
    console.log('User was created');
  }
}
