import './Product.css';
import { World, Product } from './world';
import { Services } from "./Services";
import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { Box } from '@mui/material';

type ProductProps = {
    prod: Product
    services: Services
};

export default function ProductComponent({ prod, services }: ProductProps) {
    //const [progress, setProgress] = useState(0);
    // const savedCallback = useRef(calcScore);

    // useEffect(() => savedCallback.current = calcScore)
    // useEffect(() => {
    //     let timer = setInterval(() => savedCallback.current(), 100)
    //     return function cleanup() {
    //         if (timer) clearInterval(timer)
    //     }
    // }, [])
    return (
            <div className="product">
                <div className="round"><img src={services.server + prod.logo}/> </div>
                  {/* <Box sx={{ width: '100%' }}>
                        <ProgressBar transitionDuration={"0.1s"} customLabel={" "}
                            completed={progress} />
                    </Box> */}
              <span>{prod.name}</span><br/>
              <span>{prod.cout}</span><br/>
              <span> {prod.croissance}</span>
              </div>
    )
}