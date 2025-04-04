import React from 'react'

const RefundPolicy = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="flex justify-center mt-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium">
                        Refund Policy
                    </span>
                </div>

                <h2 className="mt-6 text-4xl font-bold text-center text-gray-900">
                    Our Refund Policy
                </h2>

                <p className="mt-4 text-sm text-center text-gray-400">
                    Updated March 02, 2025
                </p>

                <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Thank you for choosing <span className="font-bold underline decoration-purple-600 italic">MoveCure</span>. Please note that all appointment booking fees of RS. 100 are non-refundable. By completing your payment, you acknowledge and agree that this fee is non-refundable under any circumstances.

                        We encourage you to review your appointment details carefully before confirming your booking. If you have any questions regarding this policy, please contact us at <span className='font-bold underline decoration-purple-600 italic'>(+91) 6291064916</span>.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default RefundPolicy;
