import adminRepository from "./admin.repository";

function getAdmins() {
    let admins= adminRepository.getAdmins();
    if (admins != undefined) {
        return admins;
    } else
        return null;
};


export default { getAdmins}