import React, { useState } from 'react';
import { FiMail, FiPhone, FiUser, FiFileText } from 'react-icons/fi';

const FormSection = ({ id }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3002';
    const apiUrl = `${baseUrl}/submit-form`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            requirements: e.target.requirements.value
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setSucceeded(true);
                e.target.reset(); // Clear form fields on success
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Network error. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id={id} className="py-16 bg-yellow-400 px-4 sm:px-6 lg:px-[200px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <div className="sticky top-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                BOOKING SPACE IS EASY
                            </h2>
                            <p className="text-lg text-gray-800 mb-8">
                                Share your requirements with us. Our expert will reach out to you at the earliest.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <FiMail className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Email</h3>
                                        <a href="mailto: Goyal.sumit2001@gmail.com" className="text-lg text-gray-800 hover:text-yellow-600 transition flex items-center">
                                             Goyal.sumit2001@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <FiPhone className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Call us</h3>
                                        <a href="tel:95010 66666" className="text-lg text-gray-800 hover:text-yellow-600 transition flex items-center">
                                            +91 95010 66666
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <FiUser className="mr-2 h-4 w-4 text-gray-500" />
                                        First name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                        required
                                        minLength={2}
                                        maxLength={50}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <FiUser className="mr-2 h-4 w-4 text-gray-500" />
                                        Last name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                        required
                                        minLength={2}
                                        maxLength={50}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <FiMail className="mr-2 h-4 w-4 text-gray-500" />
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="requirements" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                    <FiFileText className="mr-2 h-4 w-4 text-gray-500" />
                                    Details of work/requirements *
                                </label>
                                <textarea
                                    id="requirements"
                                    name="requirements"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                    required
                                />
                            </div>
                            {error && (
                                <p className="mb-4 text-red-600 text-center">
                                    {error}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center justify-center"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    'Submit Requirements'
                                )}
                            </button>
                            {succeeded && (
                                <div className="mt-6">
                                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                                        <p className="text-green-600 text-lg">
                                            Thank you! Your requirements have been submitted successfully. We will contact you shortly.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;