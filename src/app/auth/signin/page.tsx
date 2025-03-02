import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoSvg from '../../../../public/assets/images/logo/GB-Full-Logo.svg';
import logoWhite from '../../../../public/assets/images/logo/GW-Full-Logo.svg';
import SignInBasicForm from '@/form/auth/SignIn/basic-form';

const SignInBasicMain = () => {
    return (
        <>
            <div className="container-xxl">
                {/* -- SignIn area start-- */}
                <div className="authentication-wrapper basic-authentication">
                    <div className="authentication-inner">
                        <div className="card__wrapper">
                            <div className="authentication-top text-center mb-[20px]">
                                <Link href="#" className="authentication-logo logo-black">
                                    <Image style={{ width: "100%", height: "auto" }} src={logoSvg} alt="logo" />
                                </Link>
                                <Link href="#" className="authentication-logo logo-white">
                                    <Image style={{ width: "100%", height: "auto" }} src={logoWhite} alt="logo" />
                                </Link>
                                <h4 className="mb-[15px]">Welcome Back to Manager</h4>
                                <p className="mb-[15px]">Please sign-in to your account and start the monitoring and managing</p>
                            </div>
                            {/* Sign in basic form area*/}
                            <SignInBasicForm />
                            {/* Sign in basic end area*/}
                            <p className="text-center">
                                <span>New on our platform? </span>
                                <Link href="/auth/signup">
                                    <span className='underline'>Create an account</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* -- SignIn area end-- */}
            </div>
        </>
    );
};

export default SignInBasicMain;