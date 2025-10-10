import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function FollowFollower() {

    const [ followers, setFollowers ] = useState([]);
    const [ followings, setFollowings ] = useState([]);

    const userID = useParams();



    useEffect(()=> {
        async function fetchData(id) {
            const response = await fetch(`http://localhost:7000/user/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type" : "aplication/json"
                }  
            })

            const result = await response.json();
            console.log(result);
            setFollowers(result.followers);
            setFollowings(result.following);
        }

        if (userID) {
            fetchData(userID.id);
            console.log(followers);
            console.log(followings);
        }
    }, []);

    return (
        <>
            <h1>Following and Follower Names</h1>

            {/* Followers section */}
            <div className='followers-div'>
                <h2>Your followers</h2>
                {
                    followers.length > 0  ?

                    followers.map((follower, i)=> {
                        return (
                            <p key={i}>{follower.name}</p>
                        )
                    })
                    :
                    <p>No Followers</p>

                }
            </div>

            {/* Following section */}
            <div className='following-div'>
                <h2>You following</h2>
                {
                    followings.length > 0 ?
                    followings.map((following, i) => {
                        return (
                            <p key={i}>{following.name}</p>
                        )
                    })
                    :
                    <p>You are not following anybody.</p>
                }
            </div>

        </>
    )
}

export default FollowFollower;