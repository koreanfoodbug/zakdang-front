import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import IntroduceSectionCard from './IntroduceSectionCard';
import Br from '../500Br';

const Wrapper = styled.div`
    padding: 6rem 0;
`;

const StyledContainer = styled(Container)`
    p {
        padding-bottom: 3rem;
        font-size: 1.25rem;
        line-height: 1.875rem;
        font-wight: 400;
        color: #6B7280;
    }

    h1 {
        margin: 0;
        padding-bottom: 1.5rem;
        font-size: 2.5rem;
        line-height: 3.125rem;
        font-wight: 700;
        color: #111827;
    }
`;

const IntroduceSection = () => {
    return (
        <Wrapper>
            <StyledContainer>
                <h1>말이 통하는 변호사들</h1>
                <p>답을 도출하는 변호사는 많습니다. 그러나 혁신적인 당신에게 맞는 혁신적인 대안을 제시하는 변호사는
                    <Br />
                    오직 법률사무소 사유에만 있습니다.
                </p>
                <Row>
                    <Col>
                        <IntroduceSectionCard text={<span>최고의 법률 전문가가 <br/> 분야별로 책임집니다</span>} imgSrc="/image/intro-1.jpg" />
                    </Col>
                    <Col>
                        <IntroduceSectionCard text={<span>고객의 니즈를 정확히 파악하고 <Br/> 가장 적합한 해결책을 제시합니다</span>} imgSrc="/image/intro-2.jpg" />
                    </Col>
                </Row>
                <div style={{ marginTop: '1.5rem' }} />
                <Row>
                    <Col>
                        <IntroduceSectionCard text={<span>당신의 아픔을 이해하는 <br/> 든든한 조력자가 되겠습니다</span>} imgSrc="/image/intro-3.jpg" />
                    </Col>
                    <Col>
                        <IntroduceSectionCard text={<span>최고 수준의 <br/> IT 전문가들이 함께합니다</span>} imgSrc="/image/intro-4.jpg" />
                    </Col>
                </Row>
            </StyledContainer>
        </Wrapper>
    );
};

export default IntroduceSection;