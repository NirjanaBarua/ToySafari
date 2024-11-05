import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import SubCategory from '../SubCategory/SubCategory';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Slide } from 'react-awesome-reveal';

const Categories = () => {
    const [subtoys, setSubToys] = useState([]);

    
    useEffect(() => {
        fetch('categoriesData.json') 
            .then((res) => res.json())
            .then((data) => setSubToys(data));
    }, []);

    return (
        <div>
            <Slide direction='up'>
            <h1 className='anton-sc-regular text-3xl font-bold text-center mb-6'>Shop by Category</h1>
            </Slide>
            <Tabs className="lg:px-32 sm:w-full">
               
                <TabList>
                    {subtoys.map((subtoy) => (
                        <Tab
                            key={subtoy.id}
                        >
                           <h1 className='font-bold text-xl'>{subtoy.categoryName}</h1> 
                        </Tab>
                    ))}
                </TabList>

               
                {subtoys.map((subtoy) => (
                    <TabPanel key={subtoy.id} >
                        <div>
                           
                            {subtoy.toys.map((toy) => (
                                <SubCategory
                                    key={toy.name}
                                    toy={toy}
                                >
                                </SubCategory>

                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Categories;
