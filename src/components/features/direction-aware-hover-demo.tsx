import React from "react";
import DirectionAwareHover from "../ui/direction-aware-hover";
export const DirectionDemo = ({text1, text2, value}) => {

    return (
        <div className="h-[40rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={value}>
                <p className="font-bold text-xl">{text1}</p>
                <p className="font-normal text-sm">{text2}</p>
            </DirectionAwareHover>
        </div>
    );
}

export default DirectionDemo;
