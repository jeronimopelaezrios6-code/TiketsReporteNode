import { conn } from "../config/database.js"; // Importa tu conexión a la BD
import "../models/relations.js"
import { Department } from "../models/ModelDepartment.js";
import { Rol } from "../models/ModelRol.js";
import { Specialization } from "../models/ModelSpecialization.js";
import { User } from "../models/ModelUser.js";
import { encryptPassword } from "../utils/password.js";

export async function createInitialAdmin() {
    try {
        // 1. Conectar y sincronizar tablas antes de consultar
        await conn.authenticate();
        await conn.sync();

        const adminExists = await User.findOne({ where: { id_rol: 1 } });
        
        if (!adminExists) {
            // Asegurar que existan los registros foráneos mínimos
            await Rol.findOrCreate({ where: { id_rol: 1 }, defaults: { name: "admin" } });
            await Department.findOrCreate({ where: { id_department: 1 }, defaults: { name: "Sistemas" } });
            await Specialization.findOrCreate({ where: { id_specialization: 1 }, defaults: { name: "Sistemas" } });

            const hashedPassword = await encryptPassword("12345");

            await User.create({
                first_name: "Admin",
                last_name: "Sistema",
                phone: "3000000000",
                email: "admin@correo.com",
                password: hashedPassword,
                id_rol: 1,
                id_department: 1,
                id_specialization: 1
            });

            console.log(" Usuario Admin inicial creado con éxito.");
        } else {
            console.log(" El usuario Admin ya existía en la base de datos.");
        }

    } catch (error) {
        console.error("❌Error al crear el usuario Admin:", error);
    } finally {
        // 2. Finalizar la ejecución del proceso
        process.exit();
    }
}

// 3. Ejecutar la función directamente al llamar el archivo
createInitialAdmin();