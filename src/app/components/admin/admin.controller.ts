import adminRepository from "./admin.repository";

function getAdmin(username: string ,password: string) {
    let admins= adminRepository.getAdmin(username,password);
    if (admins != undefined) {
        return admins;
    } else
        return null;
};


export default { getAdmin}