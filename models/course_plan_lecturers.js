"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH course_plan_lecturers DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class course_plan_lecturers extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA course_plan_lecturers.INIT SESUAI NAMA MODEL ===
  course_plan_lecturers.init(
    {

        // === LANGKAH 3 UBAH DIBAWAH INI SESUAI YANG UDAH DIBUAT SEBELUMNYA ===
      // primary key
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // foreign key
      course_plan_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_plans,
          key: "id",
        },
      },
      lecturer_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
              model: lecturers,
              key: "id",
            },
      },
      creator: {
          type: DataTypes.INT,
          allowNull: false,
      },
      created_at: {
          type: DataTypes.DATE,
          allowNull: true
      },
      updated_at: {
          type: DataTypes.DATE,
          allowNull: true
      },
    //   === AKHIR DARI LANGKAH 3 ===


    },
    {
        // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "course_plan_lecturers", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA course_plan_lecturers SESUAI NAMA MODELS
  return course_plan_lecturers; //EDIT HANYA INI SAJA -> LANGKAH 5
};
