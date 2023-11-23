
import { Suspense } from "react";

import { App } from "./HorizontalTiles";






const Tiles = ({ detail_img }) => {
  return (
    <>
      <Suspense fallback={null}>
        <App detail_img={detail_img} />
      </Suspense>
     
  
    </>
  );
};

export default Tiles;
