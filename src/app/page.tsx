import Image from "next/image";
import bg1 from "../../public/bg1.png";
import redknot from "../../public/redknot.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        <div className="w-[50%] h-screen relative">
          <div className="w-full h-screen absolute top-0 left-0">
            <div className="w-full h-screen">
              <Image
                src={bg1}
                alt="BG 1"
                layout="fill"
                // objectFit="contain"
                sizes="100vw"
                // className="w-full"
              />
            </div>
          </div>

          <div className="w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-between px-[72px] pt-[40px] pb-[80px]">
            <div className="w-full">
              <Image
                src={redknot}
                alt="redknot logo"
                width={220}
                height={40}
                // className="w-full"
              />
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-text-white">
                Welcome back to the Redknot earners platform
              </h1>
              <p className="text-text-white leading-[24px]">
                Sign in to access Your earnings dashboard and keep track of your
                sales performance
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col h-screen p-[50px]">
          <div className="w-full flex justify-end">
            <div className="flex gap-[5px]">
              <p className="small">Don’t have an account?</p>
              <Link href={"/signup"}>
                <p className="small font-semibold text-primary-100">Sign up</p>
              </Link>
            </div>
          </div>

          <div className="flex-grow flex justify-center items-center">
            <div className="w-[370px] flex flex-col gap-[32px]">
              <h2 className="leading-[44px] font-semibold text-text-loud">
                Log in to Redknot
              </h2>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
                  <label htmlFor="">
                    <p className="small text-text-muted">Email address</p>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="font-normal font-inter text-[16px] leading-[24px] focus:border-none focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px]">
                  <label htmlFor="">
                    <p className="small text-text-muted">Password</p>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="font-normal font-inter text-[16px] leading-[24px] focus:border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="flex gap-[5px]">
                  <p className="small">Forgot Password?</p>
                  <Link href={"/"}>
                    <p className="small font-semibold text-primary-100">
                      Reset your password
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
