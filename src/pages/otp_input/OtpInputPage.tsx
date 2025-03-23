import { useState } from "react";
import OtpInputs from "../../components/OtpInputs/OtpInputs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Header from "../../components/UI/Header";

const OtpInputPage = () => {
  const [otpLength, setOtpLength] = useState<4 | 6>(4);
  const otps = [4, 6];

  const mockAPICall = (otp: string) => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (otp === "1234" || otp === "123456" || otp === "12345678") {
          resolve("OTP Submitted Successfully!");
        } else {
          reject("Invalid OTP, Please try again.");
        }
      }, 1500);
    });
  };

  const [isSubmiting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessasge] = useState<string | null>(null);

  const handleSubmit = async (otp: string) => {
    if (!otp) return;
    setIsSubmitting(true);
    setError(null);
    setMessasge(null);

    try {
      const response = await mockAPICall(otp);
      setMessasge(response);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header title="OTP Input" githubLink="https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/OtpInputs/OtpInputs.tsx" />
      <div className="flex flex-row justify-between gap-2 items-center">
        <p className="text-sm">Correct OTP: {otpLength === 4 ? "1234" : "123456"}</p>
        <div className="flex items-center">
          <h2 className="text-sm">Input Length</h2>
          <div>
            {otps.map((otp, i) => (
              <button
                key={i}
                className={`px-3 py-1 m-2 cursor-pointer ${
                  otp === otpLength ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setOtpLength(otp as 4 | 6)}
              >
                {otp}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center p-4 mx-auto">
        {message ? (
          <div className="flex items-center flex-col gap-4  mt-1">
            <p>{message}</p>
            <IoMdCheckmarkCircleOutline className="text-green-600" size={30} />
          </div>
        ) : (
          <OtpInputs
            handleSubmit={handleSubmit}
            otpLength={otpLength}
            autoSubmit={true}
            isSubmitting={isSubmiting}
          />
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default OtpInputPage;
