const skills = [
    {id: 1001, skill: 'HTML', learned: true},
    {id: 1002, skill: 'CSS', learned: true},
    {id: 1003, skill: 'Python', learned: false},
    {id: 1004, skill: 'Django', learned: false}
  ];
  
module.exports = {
  getAll,
  getOne,
  create,
  removeOne,
  update
};

function getOne(skill) {
  return skills.find(s => s.skill === skill);
};

function getAll() {
  return skills;
};
 
function create(skill) {
  skills.push(skill)
};

function removeOne(skill) {
  console.log(skill)
  const skillIdx = skills.findIndex(s => s.skill === skill)
  skills.splice(skillIdx, 1)
};

function update(skill, updateData) {
  const skillToUpdate = getOne(skill)
  skillToUpdate.skill = updateData.skill
};