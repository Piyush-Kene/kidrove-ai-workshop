import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            console.log(data);

            await axios.post(...)

            toast.success(
                "Registration submitted successfully!"
            );
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="register" className="py-16 md:py-24 bg-white" >

            <div className="max-w-3xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-4">
                    Register Now
                </h2>

                <p className="text-center text-slate-600 mb-10">
                    Reserve your seat for the AI & Robotics Summer Workshop
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-slate-50 rounded-2xl shadow-lg p-6 md:p-10"
                >

                    {/* Name */}

                    <div className="mb-5">
                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>

                        <input type="text" placeholder="Enter your name" className=" w-full border  border-slate-300 rounded-xl p-3 outline-none  focus:border-blue-500 "
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}

                    <div className="mb-5">
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className=" w-full border  border-slate-300  rounded-xl p-3 outline-none focus:border-blue-500 "
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message:
                                        "Please enter a valid email",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Phone */}

                    <div className="mb-8">
                        <label className="block mb-2 font-medium">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className=" w-full border  border-slate-300 rounded-xl p-3 outline-none  focus:border-blue-500 "
                            {...register("phone", {
                                required:
                                    "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message:
                                        "Enter a valid 10-digit number",
                                },
                            })}
                        />

                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className=" w-full  bg-blue-600 hover:bg-blue-700  text-white py-4 rounded-xl font-semibold transition disabled:opacity-50 "
                    >
                        {loading ? "Submitting..." : "Register"}
                    </button>

                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;