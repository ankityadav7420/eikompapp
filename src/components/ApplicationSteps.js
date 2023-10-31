import React, { Fragment, useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import {dataArray} from '../constant/data'
const ApplicationSteps = ({ setProgresBar }) => {
    const dataArray = [
        "Portal registration",
        "AIR Registration",
        "Foreign OEM Registration",
        "Application Payment",
        "Final Submission",
        "Insurance Certificate"
      ];

  const [completedItems, setCompletedItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    return () => setModalOpen(false);
  }, []);

  const handleIncompleteClick = (index) => {
    if (!completedItems.includes(index)) {
      setModalOpen(true);
      setSelectedItem(index);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleComplete = () => {
    const isPreviousCompleted = selectedItem === 0 || completedItems.includes(selectedItem - 1);

    if (isPreviousCompleted) {
      setCompletedItems([...completedItems, selectedItem]);
      setProgresBar((prev) => prev + (100 / dataArray.length));
    }
    handleCloseModal();
  };

  const isItemComplete = (index) => completedItems.includes(index);

  return (
    <Fragment>
      <div className='flex flex-wrap justify-center'>
  {dataArray &&
    dataArray.map((item, index) => (
      <div
        key={index}
        className={`relative m-4 p-2 sm:m-4 sm:p-4 border border-gray-100 bg-gray-100  rounded-md w-full sm:w-1/2 md:w-1/3 lg:w-1/5 ${
          isItemComplete(index) ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
        }`}
        onClick={() => handleIncompleteClick(index)}
      >
        <div className='absolute top-1 right-0 flex p-1'>
          {isItemComplete(index) ? (
            <FaCheckCircle className="w-9 h-9 text-green-500" />
          ) : (
            <FaTimesCircle className="w-6 h-6 text-red-500" />
          )}
        </div>
        <div className='flex'>
          <img
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            alt="Icon"
            className="w-full h-32 object-cover rounded"
          />
        </div>
        <div className='flex flex-col md:flex-row md:items-center w-full'>
          <p className="text-sm mt-2 md:mr-2">{item}</p>
        </div>
      </div>
    ))}
</div>


      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md m-4">
            <p>Complete the section:</p>
            <button
              className={`bg-green-500 text-white px-4 py-2 m-4 rounded ${isItemComplete(selectedItem - 1) || selectedItem === 0 ? '' : 'opacity-50 cursor-not-allowed'}`}
              onClick={handleComplete}
              disabled={!isItemComplete(selectedItem - 1) && selectedItem !== 0}
            >
              Complete
            </button>
            <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded ml-2" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ApplicationSteps;
