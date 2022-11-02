import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("mariadb://root:@localhost:3306/neophyte");

export const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {}
);

export async function hubungkan() {
  try {
    await sequelize.authenticate();
    console.log("Berhasil terhubung ke basis data.");

    await sequelize.sync();
    console.log("Semua model berhasil disinkronkan.");
  } catch (error) {
    console.log("Gagal terhubung ke basis data.");
  }
}
