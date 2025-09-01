'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/lib/MtConfig';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { usePaymentStatusCheck } from '@/lib/utils/hooks/PaymentStatusCheckHooks';
import { PulseLoader } from 'react-spinners';
import { currencyFormatter } from '@/lib/utils/helper/currencyFormatter';
import { Metadata } from 'next';

type paymentStatusTypes = {
  orderId: string;
  paymentDetails: [{ transactionId: string, amount: number | undefined }];
}

export const metadata: Metadata = {
  title: "Invoice",
  description: "Generated invoice for your transaction",
};

const PaymentSuccess = () => {
  const { id } = useParams() as {id: string};
  const searchParams = useSearchParams();
  const userName = searchParams.get('userName');

  const [paymentStatus, setPaymentStatus] = useState<paymentStatusTypes | null>(null);
  const { mutate: paymentStatusFn, isPending } = usePaymentStatusCheck();

  useEffect(() => {
    paymentStatusFn({ merchantOrderId: id as string }, {
      onSuccess: (res) => {
        console.log(res)
        setPaymentStatus(res?.response);
      },
      onError: (err) => {
        console.log(err);
      }
    })
  }, [id, paymentStatusFn]);

  const transectionId = paymentStatus?.paymentDetails[0].transactionId;
  const amounts = currencyFormatter(paymentStatus?.paymentDetails[0].amount as number);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {
        isPending ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PulseLoader loading color="#744CBD" size={20} />
          </div>
        ) : (
          <motion.div
            className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className='absolute top-1 left-4 z-10'>
              <Image
                src={'/images/phonepe.png'}
                alt='phonepe icon'
                width={100}
                height={100}
                className='w-12 h-12'
              />
            </div>
            <motion.div
              className="relative w-24 h-24 mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-green-300 opacity-20 animate-ping"></div>
              <div className="absolute inset-2 rounded-full bg-green-300 opacity-30"></div>
            </motion.div>

            <motion.h1
              className="text-2xl md:text-3xl font-bold mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Booking Payment Successful
            </motion.h1>
            <motion.p
              className="text-gray-600 mb-2 text-base"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Transaction ID: <strong>{transectionId}</strong>
            </motion.p>
            <hr className="my-4" />
            <motion.p
              className="text-gray-700 mb-1 text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Amount paid: <span className="text-blue-600 font-medium">{amounts}</span>
            </motion.p>
            <motion.p
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Payed by <span className="text-sky-600 font-medium">{userName}</span>
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <Link href={'/'}>
                <Button variant='filled' className="w-full">
                  Back To Home
                </Button>
              </Link>
            </motion.div>

            <motion.p
              className="text-xs text-gray-500 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              We’ll be in touch with you shortly.
            </motion.p>
          </motion.div>
        )
      }
    </div>
  );
}

export default PaymentSuccess;