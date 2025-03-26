/**
 * A component for inputting a one-time password (OTP) with a specified
 * number of digits.
 *
 * @example
 * <OtpInputs otpLength={4} handleSubmit={(otp) => {}} />
 *
 * @param {number} [otpLength=4] - The number of digits in the OTP.
 * @param {boolean} [autoSubmit=true] - Whether to automatically submit the
 *   OTP when all digits are filled in.
 * @param {Function} handleSubmit - The function to call when the OTP is
 *   submitted. It is passed the OTP as a string.
 * @param {boolean} [isSubmitting=false] - Whether the OTP is currently being
 *   submitted. This is used to block multiple submissions.
 * @param {string} [error=null] - An error message to display.
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OtpInputsProps {
  otpLength?: 4 | 6;
  autoSubmit?: boolean;
  handleSubmit: (otp: string) => void;
  isSubmitting?: boolean;
  error?: string | null;
}
const OtpInputs = ({
  otpLength = 4,
  handleSubmit,
  autoSubmit,
  isSubmitting,
}: OtpInputsProps) => {
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));

  const inputRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    const regex = /^[0-9]*$/;
    if(!regex.test(value))return;
    const otpCopy = [...otp];
    otpCopy[index]= value
    setOtp(otpCopy);

    if (value && index < otpLength - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    console.log(otp[index]);
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < otpLength - 1) {
      inputRef.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRef.current[index - 1].focus();
    } else if (e.key === "Enter" && handleSubmit) {
      handleSubmit(otp.join(""));
      setOtp(new Array(otpLength).fill(""));
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData("Text").slice(0, otpLength);
    const otpArray = pasted.split("").slice(0, otpLength);

    const newOtp = [...otp];
    otpArray.forEach((num, i) => {
      newOtp[i] = num.replace(/\D/g, "");
    });

    setOtp(newOtp);

    const lastIndex = otpArray.length - 1;
    if (lastIndex < otpLength - 1) {
      inputRef.current[lastIndex + 1].focus();
    }
  };

  const handleFocus = (index: number) => {
    inputRef.current[index].select();
  };

  // handle auto submit
  useEffect(() => {
    if (!autoSubmit || !handleSubmit) return;

    if (otp.every((digit) => digit !== "")) {
      console.log("Submit OTP:", otp.join(""));
      // Trigger submission logic here
      handleSubmit(otp.join(""));
      setTimeout(() => {
        setOtp(new Array(otpLength).fill(""));
      }, 1000);
    }
  }, [otp, handleSubmit, autoSubmit, otpLength]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    setOtp(new Array(otpLength).fill("")); // Reset OTP state when length changes
    inputRef.current[0]?.focus();
  }, [otpLength]);

  return (
    <div>
      <h1 className="mb-4 text-lg">Enter OTP</h1>
      <div className="flex flex-row items-center justify-center relative">
        <AnimatePresence mode="wait">
          {!isSubmitting && (
            <motion.div
              key={"otp-inputs"}
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex justify-center space-x-2">
                {otp.map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    ref={(el) => (inputRef.current[i] = el!)}
                    className={`appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none placeholder:text-center placeholder:text-gray-400 border border-gray-300 p-2 w-12 text-center rounded-md flex items-center justify-center`}
                    maxLength={1}
                    inputMode="numeric"
                    pattern="\d*"
                    value={otp[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onPaste={handlePaste}
                    placeholder="#"
                    disabled={isSubmitting}
                    onFocus={() => handleFocus(i)}
                    onBeforeInput={() => handleFocus(i)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {isSubmitting && (
            <motion.div
              key="loading"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="animate-spin w-6 h-6 border-t-2 border-blue-500 rounded-full"></div>
                <span>Verifying OTP...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <button
        disabled={isSubmitting}
        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mt-4 text-md"
        onClick={() => handleSubmit(otp.join(""))}
      >
        Submit
      </button> */}
    </div>
  );
};

export default OtpInputs;
