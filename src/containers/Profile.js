import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Achievements from '../components/Achievements';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Aggs from '../components/Aggs';
import { fetchAchievements } from '../services/achievement';
import { getAverage, getTotal } from '../services/session';
import { fetchUser } from '../services/user';
import User from '../components/User';

const Profile = () => {
  const { user } = useAuth0();
  const [achieves, setAchieves] = useState([]);
  const [total, setTotal] = useState({});
  const [average, setAverage] = useState({});
  const [streak, setStreak] = useState(0);
  const loading = !user;
  useEffect(() => {
    fetchAchievements(user.sub)
      .then(list => setAchieves(list));

    fetchUser(user.sub)
      .then(([user]) => setStreak(user.currentStreak));

    getTotal(user.sub)
      .then(([total]) => {
        const rounded = makeTimer(total.totalTime);
        setTotal(rounded);
      });

    getAverage(user.sub)
      .then(([average]) => {
        const rounded = makeTimer(average.averageTime);
        setAverage(rounded);
      });
    return;
  }, []);
  
  return (
    <>
      <Loading loading={loading} />
      <NavBar />
      {!loading &&
        <section>
          <User picture={user.picture} userName={user.name} />
          <div>
            <Aggs average={average} total={total} streak={streak}/>
            <Achievements achieves={achieves} />
          </div>
        </section>
      }
    </>
  );
};

const makeTimer = (num) => {
  const timeObj = {
    time: 0,
    type: 'minutes'
  };
  const hours = Math.ceil((num / 60 / 60) * 10) / 10;
  const minutes = Math.ceil((num / 60) * 10) / 10;
  if(hours < 1) {
    timeObj.time = minutes;
  } else {
    timeObj.time = hours;
    timeObj.type = 'hours';
  }
  return timeObj;
};

export default Profile;
