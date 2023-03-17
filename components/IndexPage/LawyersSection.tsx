import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lawyer from './Lawyer';

const StyledContainer = styled(Container)`
    padding-bottom: 6rem;

    p:first-child {
        padding-top: 6rem;
        padding-bottom: 1.5rem;
        font-size: 2.5rem;
        line-height: 3.125rem;
        font-wight: 700;
        color: #111827;
    }

    p:nth-child(2) {
        padding-bottom: 3rem;
        font-size: 1.25rem;
        line-height: 1.875rem;
        font-wight: 400;
        color: #6B7280;
    }
`;

const Lawyers = () => {
    return (
        <StyledContainer>
            <p>혁신적인 당신을 위한 혁신적인 전문가</p>
            <p>
                문제에 대한 답을 도출하는 것은 쉽습니다. 
                <br />
                그러나 정확하며 효율적인 답을 내기 위해서는 당면한 문제를 심층적으로 파악해야 합니다.
            </p>
            <Row>
                <Col>
                    <Lawyer name="송지원" imgSrc="/image/lawyer-jiwon.jpg" />
                </Col>
                <Col>
                    <Lawyer name="최지현" imgSrc="/image/lawyer-jihyun.jpg" />
                </Col>
                <Col>
                    <Lawyer name="이상호" imgSrc="/image/lawyer-sangho.jpg" />
                </Col>
            </Row>
        </StyledContainer>
    );
};

export default Lawyers;