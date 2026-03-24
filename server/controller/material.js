import e from "express";
import Material from "../model/Material.js";

// ➕ ADD MATERIAL
export const postMaterial = async (req, res) => {
  try {
    const material = await Material.create(req.body);

    res.json({
      success: true,
      data: material,
      message: "Material added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error saving material",
    });
  }
};

// 📥 GET ALL MATERIALS
export const getMaterials = async (req, res) => {
  try {
    const materials = await Material.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: materials,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error fetching materials",
    });
  }
};

// 🔍 GET BY ID
export const getMaterialById = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);

    res.json({
      success: true,
      data: material,
    });
  } catch {
    res.json({ success: false });
  }
};

// 🗑️ DELETE
export const deleteMaterial = async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch {
    res.json({ success: false });
  }
};

export default {
  postMaterial,
  getMaterials,
    deleteMaterial,
    getMaterialById,
};