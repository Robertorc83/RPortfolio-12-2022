/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "~/hooks/useMediaQuery";

export default function getMediaQuery(){
    const isXSmall = useMediaQuery('(min-width: 300px)');
    const isSmall = useMediaQuery('(min-width: 480px)');
    const isMedium =  useMediaQuery('(min-width: 768px)');

    let motionOptions = {}
    if(isXSmall){
        motionOptions = {
            animate: {
                x: 10,
            },    
        }
    }

    if(isMedium){
        motionOptions = {
            animate: {
                x: 100,
            },    
        }
    }
    console.log("motionOptions", motionOptions)
    return motionOptions

}