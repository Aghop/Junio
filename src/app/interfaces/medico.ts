export interface Medico {
    idmedico: number;
    nombre: String;
    apellidos: String;
    rut: number;
    digVer: String;
    idEspecialidad: number;
    idcentroMedico: number;
}
export let listaMedico:Array<Medico>=[];