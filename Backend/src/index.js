const express = require("express");
const cors = require("cors");

const app = express();

const SiswaRoutes = require("./routes/SiswaRoutes");

app.use(cors());
app.use(express.json());

app.use("/siswa", SiswaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`);
});