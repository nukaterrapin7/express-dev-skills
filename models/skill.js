const todos = [
    {id: 125223, todo: 'HTML', learned: true},
    {id: 127904, todo: 'CSS', done: true},
    {id: 139608, todo: 'Python', done: false},
    {id: 148702, todo: 'Django', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return todos;
  }
 