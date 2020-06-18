import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from "react-icons";


const Icon = ({textColor}) => {

    return (
      <IconContext.Provider value={{ className: textColor, style: { fontSize: '20px' }}} >
        <div>
            <IoIosArrowForward />
        </div>
      </IconContext.Provider>
    );
}

export default Icon;