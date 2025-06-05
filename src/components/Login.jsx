import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="card w-full h-screen flex justify-center items-center bg-[#F9FAFB]">
            <div className="h-[70vh] w-[35vw] bg-[#5DB1FF]">
                <div className="h-[70vh] w-[30vw] bg-white rounded-r-full flex flex-col p-[5vw] items-center">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 16 16"><g fill="none"><path fill="url(#fluentColorPeopleCommunity160)" d="M10.99 7.714a1.5 1.5 0 0 0-1.838 1.061l-.388 1.449a3 3 0 1 0 5.796 1.553l.388-1.45a1.5 1.5 0 0 0-1.06-1.836z"></path><path fill="url(#fluentColorPeopleCommunity161)" d="M5.01 7.714a1.5 1.5 0 0 1 1.837 1.061l.388 1.449a3 3 0 1 1-5.795 1.553l-.389-1.45a1.5 1.5 0 0 1 1.061-1.836z"></path><path fill="url(#fluentColorPeopleCommunity162)" d="M6.5 7A1.5 1.5 0 0 0 5 8.5V11a3 3 0 1 0 6 0V8.5A1.5 1.5 0 0 0 9.5 7z"></path><path fill="url(#fluentColorPeopleCommunity163)" d="M8 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></path><path fill="url(#fluentColorPeopleCommunity164)" d="M3 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path><path fill="url(#fluentColorPeopleCommunity165)" d="M13 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path><defs><radialGradient id="fluentColorPeopleCommunity160" cx={0} cy={0} r={1} gradientTransform="rotate(78.837 -.336 11.297)scale(4.64914)" gradientUnits="userSpaceOnUse"><stop stopColor="#0078d4"></stop><stop offset={1} stopColor="#004695"></stop></radialGradient><radialGradient id="fluentColorPeopleCommunity161" cx={0} cy={0} r={1} gradientTransform="matrix(3.34115 6.04144 -4.34865 2.40497 2.553 7.96)" gradientUnits="userSpaceOnUse"><stop stopColor="#008ce2"></stop><stop offset={1} stopColor="#0068c6"></stop></radialGradient><radialGradient id="fluentColorPeopleCommunity162" cx={0} cy={0} r={1} gradientTransform="rotate(63.608 -3.915 10.713)scale(4.22417 3.87907)" gradientUnits="userSpaceOnUse"><stop offset={0.339} stopColor="#3dcbff"></stop><stop offset={1} stopColor="#14b1ff"></stop></radialGradient><radialGradient id="fluentColorPeopleCommunity163" cx={0} cy={0} r={1} gradientTransform="rotate(59.931 1.37 7.898)scale(3.12306)" gradientUnits="userSpaceOnUse"><stop offset={0.339} stopColor="#3dcbff"></stop><stop offset={1} stopColor="#14b1ff"></stop></radialGradient><radialGradient id="fluentColorPeopleCommunity164" cx={0} cy={0} r={1} gradientTransform="rotate(47.573 -3.7 4.554)scale(3.27979)" gradientUnits="userSpaceOnUse"><stop stopColor="#008ce2"></stop><stop offset={1} stopColor="#0068c6"></stop></radialGradient><radialGradient id="fluentColorPeopleCommunity165" cx={0} cy={0} r={1} gradientTransform="rotate(78.837 3.672 9.578)scale(2.93403)" gradientUnits="userSpaceOnUse"><stop stopColor="#0078d4"></stop><stop offset={1} stopColor="#004695"></stop></radialGradient></defs></g></svg>
                        <p className='text-3xl'>Welocme</p>
                    </div>
                    <div className="mt-[2vw] flex flex-col w-full ">
                        <label htmlFor="name">User Name</label>
                            <input type="text" className='border-b' id='name' />
                    </div>
                    <div className="mt-[1vw] flex flex-col w-full">
                        <label htmlFor="name">Password</label>
                            <input type="text" className='border-b' id='name' />
                    </div>
                    <button className='mt-[2vw] bg-[#5DB1FF] p-[1vw] text-white rounded-full w-full'>Login</button>
                    <p className='m-[1vw]'>OR</p>
                    <div className="flex gap-[2vw]"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"></path><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"></path></svg>                       
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"></path></svg>
                    </div>
                    <div className="mt-[1.5vw]">Dont't have an account?</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;