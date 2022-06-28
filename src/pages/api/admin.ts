import AdminUser from "../../models/adminUser";

const admin = async (req: any, res: any) => {
  AdminUser.find()
    .then((buffer) => res.json(buffer))
    .catch((err) => {
      if (err) throw err;
    });
};

export default admin;
