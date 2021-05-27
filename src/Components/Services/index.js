import React from 'react';
import {ServicesContainer, ServicesCard, ServicesWrapper, ServicesIcon, ServicesH1, ServicesH2, ServicesP} from './ServicesElements';
import Icon1 from '../../Images/svg-1.svg';
import Icon2 from '../../Images/svg-2.svg';
import Icon3 from '../../Images/svg-3.svg';

const Services = () => {
    return (
        <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Member</ServicesH2>
                <ServicesP>You can avail to extraordinary offers if you are a premium member</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
