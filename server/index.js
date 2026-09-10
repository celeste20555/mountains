import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

const SPREADSHEET_ID =
    "1EYnS4uaFmYtWO6VhDt3o-6jz_Tlbm90cXCVGaeafGe0";

const auth = new google.auth.GoogleAuth({
    keyFile: "./server/montains-508118-d71053c66ac7.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

app.get("/", async (req, res) => {
    try {
        const authClient = await auth.getClient();

        const sheets = google.sheets({
            version: "v4",
            auth: authClient,
        });

        const response = await sheets.spreadsheets.values.batchGet({
            spreadsheetId: SPREADSHEET_ID,
            ranges: [
                "A:Z",
                "Categorias!A1:C11",
            ],
        });

        const productos =
            response.data.valueRanges[0].values || [];

        const categorias =
            response.data.valueRanges[1].values || [];

        res.json({
            ok: true,
            datos: productos,
            categorias: categorias,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(
        `Servidor funcionando en http://localhost:${PORT}`
    );
});