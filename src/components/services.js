import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
//import Icon1 from '../../images/svg-1.svg';
//import Icon2 from '../../images/svg-3.svg';
//import Icon3 from '../../images/svg-5.svg';


const Services = () => {
  return (
      <ServicesContainer id="services">
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon /*src={Icon1}*//>
                  <ServicesH2>Contact Us</ServicesH2>
                  <ServicesP>Email us at ArizonaStu@email.arizona.edu.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon /*src={Icon2}*//>
                  <ServicesH2>Call Us</ServicesH2>
                  <ServicesP>Call us at (847)-256-8729</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon /*src={Icon3}*//>
                  <ServicesH2>Virtual Offices</ServicesH2>
                  <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
    )
  }

  export default Services