const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET semua data siswa
const getSiswa = async (req, res) => {
    try {
        const siswa = await prisma.siswa.findMany();

        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data siswa",
            error: error.message
        });
    }
};

// GET siswa berdasarkan kode
const getSiswaByKode = async (req, res) => {
    try {
        const kode = req.params.kode;

        const siswa = await prisma.siswa.findUnique({
            where: {
                kode: kode
            }
        });

        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data siswa",
            error: error.message
        });
    }
};

// POST menambahkan data siswa
const createSiswa = async (req, res) => {
    try {
        const { kode, nama, alamat, tanggal, jurusan } = req.body;

        const siswa = await prisma.siswa.create({
            data: {
                kode,
                nama,
                alamat,
                tanggal: new Date(tanggal),
                jurusan
            }
        });

        res.status(201).json(siswa);
    } catch (error) {
        res.status(500).json({
            message: "Gagal menambahkan data siswa",
            error: error.message
        });
    }
};

// PUT mengubah data siswa
const updateSiswa = async (req, res) => {
    try {
        const kode = req.params.kode;
        const { nama, alamat, tanggal, jurusan } = req.body;

        const siswa = await prisma.siswa.update({
            where: {
                kode: kode
            },
            data: {
                nama,
                alamat,
                tanggal: new Date(tanggal),
                jurusan
            }
        });

        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengubah data siswa",
            error: error.message
        });
    }
};

// DELETE menghapus data siswa
const deleteSiswa = async (req, res) => {
    try {
        const kode = req.params.kode;

        await prisma.siswa.delete({
            where: {
                kode: kode
            }
        });

        res.status(200).json({
            message: "Data siswa berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal menghapus data siswa",
            error: error.message
        });
    }
};

module.exports = {
    getSiswa,
    getSiswaByKode,
    createSiswa,
    updateSiswa,
    deleteSiswa
};