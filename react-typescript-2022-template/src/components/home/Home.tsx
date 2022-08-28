import React,{ useContext} from 'react';
import context from '../../context/Context';

const Home = () => {
    const ctx = useContext(context);

    return <div className='home'>{ctx}</div>;
};

export default Home;
