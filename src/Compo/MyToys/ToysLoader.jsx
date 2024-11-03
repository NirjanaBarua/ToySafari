import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToys from './MyToys';

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

    return (
        <div className="mt-6">
            {myToys.length === 0 && <p className="font-bold text-center">No toys found for this user.</p>}
            {
                myToys.map(myToy => (
                    <MyToys
                        key={myToy._id}
                        myToy={myToy}
                    />
                ))
            }
        </div>
    );
};

export default ToysLoader;
