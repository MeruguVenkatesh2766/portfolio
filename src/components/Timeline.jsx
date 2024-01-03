import React from 'react'

const Timeline = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-10 bg-backgroundColor">
            <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8">
                Timeline
            </h1>
            <ol class="relative">
                <li class="mt-3 bg-white p-6">
                    <span class="absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 pl-8 text-lg font-semibold text-gray-900">Software Engineer &nbsp;&nbsp;&nbsp;&nbsp;2022 - Present</h3>
                    <time class="block mb-2 pl-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Buildbot Technologies Pvt Ltd</time>
                    <p class="text-base pl-8 font-normal text-gray-500 dark:text-gray-400">
                        Proficiently designed and implemented scalable, responsive web and mobile applications using React and React Native. Integrated React Redux for seamless data storage, ensuring uninterrupted user interactions in offline environments. Developed and deployed RESTful APIs, employing Node.js for backend functionality, and optimized database operations using PostgreSQL and TypeORM. Demonstrated cross-platform expertise with successful task management applications in React Native and Kotlin for wear OS.</p>
                </li>
                <li class="mt-3 bg-white p-6">
                    <span class="absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 pl-8 text-lg font-semibold text-gray-900">Bachelor of Technology &nbsp;&nbsp;&nbsp;&nbsp;2018 - 2022</h3>
                    <time class="block mb-2 pl-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">National Institute of Technology, Warangal</time>
                    <p class="mb-4 pl-8 text-base font-normal text-gray-500 dark:text-gray-400">Earned a degree in Electronics and Communication Engineering, yet my passion lies in coding and development within the realm of Computer Science and Engineering</p>
                    {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg> Download ZIP</a> */}
                </li>
                <li class="mt-3 bg-white p-6">
                    <span class="absolute flex items-center justify-center mt-2 w-3 h-3 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg pl-8 font-semibold text-gray-900">Primary and Higher Education</h3>
                    {/* <time class="block mb-2 pl-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Narayana Junior College</time> */}
                    <p class="text-base pl-8 font-normal text-gray-500 dark:text-gray-400">I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 96 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
                </li>
            </ol>
        </div>
    )
}

export default Timeline
