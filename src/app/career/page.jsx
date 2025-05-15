// "use client"
export const dynamic = 'force-dynamic'

import PageIttle from '@/components/PageItile/PageIttle';
import React from 'react';
import CareerModal from '@/components/Modals/CareerModal';
import axios from 'axios';
export const metadata = {
    title: "CAREER | ByteOnSoft",
    description: "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
};

const page = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}//api/get-all-careers`, {
        headers: {
            'cache-control': 'no-cache',
        }
    })
    const jobs = await res.data


    return (
        <div className='w-full'>
            <PageIttle pageTitle={'Career'} pageSubTitle={'Career'}></PageIttle>
            <div className='w-11/12 md:w-4/5 mx-auto flex flex-col justify-center items-center mt-8 md:mt-10 space-y-8'>
                {
                    jobs.map(job => (<CareerModal
                        key={job._id}
                        title={job.title}
                        description={job.description}
                        keyResponsibilities={job.key_responsibilities}
                        requirements={job.requirements}
                        submitResume={job.submit_resume}
                        jobType={job.job_type}
                        location={job.location}
                        jobCategory={job.job_category}
                        salary={job.salary}
                        additionalNote={job.additional_note}
                    />))
                }

            </div>
        </div>
    );
};

export default page;