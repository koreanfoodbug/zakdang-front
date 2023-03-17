import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

const Section = styled.section`
    width: 100%;
    height: 29.5rem;
    position: relative;

    img {
        z-index: -1;
    }
`;

const StyledContainer = styled(Container)`
    text-align: center;

    p:first-child {
        padding-top: 7.188rem;
        padding-bottom: 1.5rem;
        font-size: 2.5rem;
        line-height: 3.125rem;
        font-wight: 700;
        color: white;
    }

    p:nth-child(2) {
        padding-bottom: 1.5rem;
        font-size: 1.25rem;
        line-height: 1.875rem;
        font-wight: 400;
        color: white;
    }
`;

const MakeNewHistorySection = () => {
    return (
        <Section>
            <Image
                alt="새로운 역사를 만드는 중"
                src="/image/make-new.jpg"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
            <StyledContainer>
                <p>
                    지금도 새로운 역사를
                    <br />
                    만들고 있습니다
                </p>
                <p>
                    100+ 고객사의 더 큰 만족을 위해 노력하겠습니다.
                </p>
                <Button variant="primary" size="lg">
                    상담 신청하기
                </Button>
            </StyledContainer>
        </Section>
    );
};

export default MakeNewHistorySection;