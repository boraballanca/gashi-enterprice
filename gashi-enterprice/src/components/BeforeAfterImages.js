
import ReactCompareImage from "react-compare-image";
import Before from "../assets/bathroom-01.jpg";
import After from "../assets/bathroom-02.jpg";

const BeforeAfterImages = (className, before,after) => {
    return (
        <>
            <ReactCompareImage
                hover={false}
                vertical={false}
                leftImage={before}
                rightImage={after}
            />
        </>
    )

}
export default BeforeAfterImages


//