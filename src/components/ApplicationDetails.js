import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApplicationSteps from './ApplicationSteps';

const ApplicationDetails = () => {
  const [progresBar, setProgresBar] = useState(0)
  const params = useParams();
  const { applicationNumber, applicationCategory } = params;

  useEffect(()=>{
    
  }, [progresBar])

  const handleDownload = (reportType) => {
    alert(`Downloading ${reportType} report for application Number: ${applicationNumber}`);
    console.log(`Downloading ${reportType} report for application Number: ${applicationNumber}`);
  };

  return (
    <Fragment>
      
        <div className='flex flex-col'>
            <div className='bg-amber-100 flex flex-col justify-between items-center p-2 sm:flex-row rounded'>
                <h2 className=' text-2xl m-2'>{applicationCategory} Ongoing Application</h2>
                <h2 className=' text-2xl m-2'>Application Number: Eik/{applicationCategory}/{applicationNumber}</h2>
            
                <div className='text-center sm:text-left'>
                    <span className="block sm:inline">Compliance Type: {applicationCategory}</span>
                    <div className="w-full sm:w-52 h-5 bg-gray-300 rounded-full m-2">
                    <div
                        className="h-full bg-green-500 rounded-full "
                        style={{ width: `${progresBar}%` }}
                    >
                        <span className='p-2 m-2'>{progresBar.toFixed(2)}%</span>
                    </div>
                    </div>
                </div>
            </div>
            <div className='m-2'>
                <h2 className='text-center m-2'>Steps To Be Completed</h2>
                <ApplicationSteps  setProgresBar={setProgresBar}/>
            </div>

            <div className='flex flex-col items-center justify-center h-full sm:flex-row p-6 bg-slate-100 '>
            <button
                className={`p-4 m-2 sm:my-0 sm:mr-2 bg-blue-500 text-white rounded hover:bg-blue-700
                `}
                onClick={() => handleDownload('progress')}
            >
                Download Report
            </button>
            <button
                className={`p-4 m-2 sm:my-0 sm:mr-2 bg-green-500 text-white rounded hover:bg-green-700
                    ${progresBar >= 100 ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}
                `}
                onClick={() => handleDownload('test Reports')}
                disabled={ progresBar < 100}
                >
                Download Test Report
                </button>

            <button
                className={`p-4 m-2 sm:my-0 sm:mr-2 bg-purple-500 text-white rounded hover:bg-purple-700
                ${progresBar >= 100 ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}
                `}
                onClick={() => handleDownload('Certificate')}
                disabled={ progresBar < 100}
            >
                Download Certificate
            </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ApplicationDetails;
