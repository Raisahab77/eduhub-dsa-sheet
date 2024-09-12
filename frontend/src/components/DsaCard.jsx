import { useState, useEffect } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import Tooltip from '@mui/material/Tooltip';

const DsaCard = ({ item }) => {
    const [selectedIds, setSelectedIds] = useState([]);
    // Load initial data from localStorage
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('selectedIds')) || [];
        setSelectedIds(storedData);
    }, []);

    const handleCheckboxChange = (id) => {
        // Retrieve the current list from localStorage
        let currentSelectedIds = [];
        try {
            const storedData = localStorage.getItem('selectedIds');
            if (storedData) {
                currentSelectedIds = JSON.parse(storedData);
            }
        } catch (error) {
            console.error('Error retrieving data from localStorage:', error);
        }

        // Determine if the ID is already in the list
        const isSelected = currentSelectedIds.includes(id);

        // Update the list based on whether the checkbox is checked or unchecked
        const updatedSelectedIds = isSelected
            ? currentSelectedIds.filter(selectedId => selectedId !== id)
            : [...currentSelectedIds, id];

        // Store the updated list back into localStorage
        try {
            localStorage.setItem('selectedIds', JSON.stringify(updatedSelectedIds));
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
        }

        // Update the state
        setSelectedIds(updatedSelectedIds);
    };


    return (
        <div className='text-white'>
            <h3 className='text-3xl font-bold mb-6 mt-10 text-[#efc88d]'>{item.topic}</h3>
            {
                item.problems.map((problem, index) =>
                    <div key={index} className='bg-[#1a1b26] hover:bg-[#141622] px-5 py-3 my-4 flex justify-between items-center cursor-pointer'>
                        <div className='flex gap-4'>
                            <div>
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    checked={selectedIds.includes(problem.id)}
                                    onChange={() => handleCheckboxChange(problem.id)}
                                />
                            </div>
                            <div className='font-bold'>{problem.name}</div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <Tooltip title="Youtube">
                                    <a href={problem.youtube} target='blank'>
                                        <YouTubeIcon className='text-red-500' fontSize='large' />
                                    </a>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip title="Leetcode">
                                    <a href={problem.leetcode} target='blank'>
                                        <CodeIcon className='text-white' fontSize='large' />
                                    </a>
                                </Tooltip>

                            </div>
                            <div>
                                <Tooltip title="Artical">
                                    <a href={problem.article} target='blank'>
                                        <ArticleIcon className='text-[#0073e6]' fontSize='large' />
                                    </a>
                                </Tooltip>

                            </div>
                            <div className='w-16 py-1 px-2 bg-[#efc88d] text-black text-sm font-semibold flex justify-center items-center'>{problem.difficulty}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DsaCard