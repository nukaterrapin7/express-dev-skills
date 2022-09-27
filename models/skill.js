const skills = [
    {id: 125223, skill: 'HTML', learned: true},
    {id: 127904, skill: 'CSS', learned: true},
    {id: 139608, skill: 'Python', learned: false},
    {id: 148702, skill: 'Django', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  };
  
  function getAll() {
    return skills;
  };
 