import express from "express";
import { conn } from "./src/config/database.js";
import departmentRoutes from "./src/Routes/RoutesDepartment.js";
import specializationRoutes from "./src/Routes/RoutesSpecialization.js";
import rolRoutes from "./src/Routes/RoutesRol.js";
import userRoutes from "./src/Routes/RoutesUser.js";
import StatesTicketRoute from "./src/Routes/RoutesStates_ticket.js";
import workTeamRoutes from "./src/Routes/RoutesWorkTeam.js";
import SupportDeviceRoutes from "./src/Routes/RoutesSupportDevice.js";
import SupportRoutes from "./src/Routes/RoutesSupport.js";
import priorityRoutes from "./src/Routes/RoutesPriority.js"
import TicketRoutes from "./src/Routes/RoutesTicket.js"
import TeamUserRoutes from "./src/Routes/RoutesTeam_user.js"
import "./src/models/relations.js"

const app = express();

app.use(express.json());

// guti
app.use("/api", departmentRoutes);
app.use("/api", specializationRoutes);
app.use("/api", rolRoutes);
app.use("/api", userRoutes);

// pacha
app.use("/api", workTeamRoutes);
app.use("/api", priorityRoutes)

// cano
app.use("/api", StatesTicketRoute);
app.use("/api", TeamUserRoutes);

//Pelaez
app.use("/api", SupportDeviceRoutes);
app.use("/api", SupportRoutes);
app.use("/api", TicketRoutes);



const PORT = 3000;
const SERVER = "http://localhost:";
const URL = SERVER + PORT;


app.listen(PORT, () => {
    console.log(
        "Servidor funcionando de forma correcta. URL: " + URL
    );
});


conn.authenticate()
    .then(() => {
        return conn.sync({alter: true});
    })
    .catch((error) => {
        console.log(
            "Error en la conexión de la base de datos: ",
            error
        );
    });
