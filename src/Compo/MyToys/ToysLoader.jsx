import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToys from './MyToys';
import { Slide } from "react-awesome-reveal"
const ToysLoader = () => {
    const { user, loading } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        if (!loading && user) {

            fetch(`http://localhost:5000/mytoys/${user.uid}`)
                .then((response) => response.json())
                .then((data) => {
                    setMyToys(data);
                    console.log('Fetched myToys:', data);
                })

        }
    }, [user, loading]);

    const handleDeleteToy = (_id) => {
        setMyToys(prevToys => prevToys.filter(toy => toy._id !== _id));
    };

    return (
        <div className="mt-4">
            <hr className="hr-gradient"/>
            <Slide direction='up'><h1 className='anton-sc-regular text-center text-purple-400 mb-2'>My Toys</h1></Slide>

            {myToys.length === 0 && <p className="font-bold text-center">No toys found for this user.</p>}
            <Slide direction="up">
                {
                    myToys.map(myToy => (
                        <MyToys
                            key={myToy._id}
                            myToy={myToy}
                            onDelete={handleDeleteToy}
                        />
                    ))
                }
            </Slide>
        </div>
    );
};

export default ToysLoader;
