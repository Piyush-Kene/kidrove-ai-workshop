import Enquiry from "../models/Enquiry.js";

export const submitEnquiry = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const trimmedName = name?.trim();

        if (!trimmedName || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address",
            });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Phone number must be 10 digits",
            });
        }

        const enquiry = await Enquiry.create({
            name: trimmedName,
            email,
            phone,
        });

        return res.status(201).json({
            success: true,
            message: "Registration submitted successfully",
            enquiry,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};