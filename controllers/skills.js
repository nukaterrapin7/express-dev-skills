const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
};

function show (req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skill),
        title: "Express Skills"
    })
};

function newSkill(req, res) {
    res.render('skills/new')
};

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
};

function deleteSkill(req, res) {
    Skill.removeOne(req.params.skill)
    res.redirect('/skills')
};

function edit(req, res) {
    console.log(req.params)
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.skill)
    })
};

function update (req, res) {
    Skill.update(req.params.skill, req.body)
    res.redirect(`/skills/${req.body.skill}`)
};