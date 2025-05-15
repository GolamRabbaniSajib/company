'use client'
import { HiOutlineBriefcase } from 'react-icons/hi';
import { Button, Modal, ModalAction, ModalContent, ModalFooter, ModalHeader, ModalTitle } from 'keep-react';
import Apply from '../Apply/Apply';

const CareerModal = ({
    title,
    description,
    keyResponsibilities,
    requirements,
    submitResume,
    jobType,
    location,
    jobCategory,
    salary,
    additionalNote
}) => {
    return (
        <Modal>
            {/* Modal Trigger (Card) */}
            <ModalAction asChild>
                <div className="p-4 md:p-6 bg-white text-gray-700 font-rubik rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-full flex flex-col cursor-pointer">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-200 p-3 rounded-lg">
                                <HiOutlineBriefcase className="w-6 h-6 text-gray-700" />
                            </div>
                            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="border-2 border-primary rounded-full py-1 px-3 font-semibold text-primary">
                                ৳
                            </div>
                            <h2 className="font-semibold text-lg text-gray-900">{salary}</h2>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-4">
                            <div className="bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-700">{jobType}</div>
                            <div className="bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-700">{jobCategory}</div>
                            <div className="bg-gray-100 p-3 rounded-lg text-sm font-semibold text-gray-700">{location}</div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Apply jobTitle={title} id={1} />
                        </div>
                    </div>
                </div>
            </ModalAction>

            {/* Modal Content */}
            <ModalContent className="w-full md:w-4/5 p-6 bg-white rounded-lg shadow-xl">
                <ModalHeader className="mb-6 space-y-4">
                    <ModalTitle className="text-2xl font-semibold text-gray-800">{title}</ModalTitle>
                    <div className="font-rubik text-gray-700 space-y-2">
                        <p className="text-lg font-semibold">Job Type:</p>
                        <p>{jobType}</p>

                        <p className="text-lg font-semibold">Description:</p>
                        <p>{description}</p>

                        <p className="text-lg font-semibold">Key Responsibilities:</p>
                        <ul className="pl-6 list-decimal space-y-2">
                            {keyResponsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>

                        <p className="text-lg font-semibold">Requirements:</p>
                        <ul className="pl-6 list-decimal space-y-2">
                            {requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>

                        <p className="text-lg font-semibold">Location:</p>
                        <p>{location}</p>

                        <p className="text-lg font-semibold">Submit Resume:</p>
                        <p>{submitResume.email}</p>

                        <p className="text-lg font-semibold">{additionalNote}</p>
                    </div>
                </ModalHeader>

                {/* Modal Footer */}
                <ModalFooter className="flex justify-between items-center space-x-3">
                    <ModalAction asChild>
                        <Button variant="outline" className="px-6 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-all duration-300">
                            Cancel
                        </Button>
                    </ModalAction>
                    <ModalAction asChild={false}>
                        <Apply />
                    </ModalAction>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CareerModal;
