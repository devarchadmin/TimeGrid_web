import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoSvg from '../../../../public/assets/images/logo/GB-Full-Logo.svg';
import logoWhite from '../../../../public/assets/images/logo/GW-Full-Logo.svg';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import SignUpBasicForm from '@/form/auth/SignUp/basic-form';

const SignUpBasicMain = () => {
    return (
        <>
            <div className="container-xxl">
                {/* -- Sign Up area start-- */}
                <div className="authentication-wrapper basic-authentication">
                    <div className="authentication-inner">
                        <div className="card__wrapper">
                            <div className="authentication-top text-center mb-[20px]">
                                <Link href="#" className="authentication-logo logo-black">
                                    <Image src={logoSvg} style={{ width: "100%", height: "auto" }} alt="logo" />
                                </Link>
                                <Link href="#" className="authentication-logo logo-white">
                                    <Image src={logoWhite} style={{ width: "100%", height: "auto" }} alt="logo" />
                                </Link>
                                <h4 className="mb-[15px]">Welcome to Time Grid</h4>
                                <p className="mb-[15px]">Please sign-up with us and start the monitoring and managing</p>
                            </div>
                            {/* Sign up basic form */}
                            <SignUpBasicForm />
                            {/* Sign up basic form end*/}
                            <p className="text-center">
                                <span>Aleardy have an account? </span>
                                <Link href="/auth/signin">
                                    <span className='underline'>Sign-In</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* -- Sign Up area end-- */}
            </div>
        </>
    );
};

export default SignUpBasicMain;