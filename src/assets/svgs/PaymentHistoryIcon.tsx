import React from 'react';

interface PaymentHistoryIconProps {
    width?: number; 
    height?: number;
}

const PaymentHistoryIcon: React.FC<PaymentHistoryIconProps> = ({ width = 47, height = 40 , ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 47 40" fill="none">
<path d="M5.72588 0.963867H15.1087L20.0091 5.86432H45.4843V34.2156C44.9773 35.4836 42.9742 38.0957 39.0181 38.4C35.062 38.7043 12.3902 38.5268 1.54882 38.4V5.86432H12.2L17.5256 11.0113H39.0181V31.1724" stroke="black" stroke-width="1.5"/>
</svg>
    );
};

export default PaymentHistoryIcon;
