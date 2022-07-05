const model = require('../models/indexmodel')
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig
const jwt = require('jsonwebtoken')
const controller = {}

controller.listmatkul = async (req, res) => {

  const token = req.cookies.jwt
  if (!token) return res.status(200).send("tidak ada token")

  const nip = jwt.verify(token, process.env.TOKEN_SECRET)
  const matkul = await sequelize.query(
    'SELECT course_plans.code, course_plans.name, course_plans.credit, course_plans.rev, course_plans.semester, course_plans.id, course_plans.created_by, course_plans.created_at FROM course_plan_lecturers JOIN course_plans ON course_plan_lecturers.course_plan_id = course_plans.id JOIN lecturers ON course_plan_lecturers.lecturer_id = lecturers.id WHERE lecturers.reg_id= 198201182008121002;',
    {
        replacements: { nipDosen: nip.email },
        type: QueryTypes.SELECT
    }
)
    res.render("dosen/dashboard", {matkul})   
}

controller.detailmatkul = async (req, res) => {
  const id = req.params.id
  const kurikulum = await model.curricula.findAll()
  const rps = await model.course_plans.findOne({where:{id} })
  const cpmk = await model.course_los.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'type', 'code', 'name', 'parent_id']})
  const cpl = await model.curriculum_los.findAll({where:{curriculum_id : 1} ,attributes: [ 'id', 'code', 'name']})
  const referensi = await model.course_plan_references.findAll({where:{[Op.and]: [{course_plan_id : id},{description: 'Utama'}] }})
  const referensi2 = await model.course_plan_references.findAll({where:{[Op.and]: [{course_plan_id : id},{description: 'Pendukung'}] }})
  const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})
  res.render("dosen/detailmatkul", {rps, cpmk, cpl, referensi,referensi2, penilaian, mingguan, kurikulum})
  
}

controller.editRPS = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const cpmk = await model.course_los.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'type', 'code', 'name', 'parent_id']})
  const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'title', 'author', 'publisher', 'year', 'description']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})
  const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
  res.render("dosen/rpsedit", {rps,cpmk,referensi,mingguan,penilaian})
}

module.exports = controller