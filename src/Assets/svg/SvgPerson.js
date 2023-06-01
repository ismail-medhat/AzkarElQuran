import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgPerson = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={17}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M8.06.87a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2.26a3.08 3.08 0 1 1 .02 6.16 3.08 3.08 0 0 1-.02-6.16Zm4.45 10.72a.61.61 0 0 1-.85-.18 4.32 4.32 0 0 0-7.33.23.6.6 0 0 1-.53.31.68.68 0 0 1-.31-.08.62.62 0 0 1-.23-.84 5.55 5.55 0 0 1 9.42-.3.62.62 0 0 1-.17.86Z"
        />
    </Svg>
)
export default SvgPerson
