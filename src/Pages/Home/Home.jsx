

import { useLoaderData } from 'react-router-dom';
import GetsbyStars from './GetsbyStars';
import Slider from './Slider';
import Scroller from './Scroller';
import AboutUs from './AboutUs';
import WorkFlow from './WorkFlow';
import Services from './Services';
import { Helmet } from 'react-helmet';


const Home = () => {

  const events = useLoaderData()



    return (
      <div>
        <Helmet>
          <title>Photoberry | Home</title>
        
        </Helmet>
        <GetsbyStars></GetsbyStars>
        <AboutUs></AboutUs>

        <WorkFlow ev={events}></WorkFlow>
        <Services ev={events}></Services>
        <Scroller></Scroller>
      </div>
    );
};

export default Home;