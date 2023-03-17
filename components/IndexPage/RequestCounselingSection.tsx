import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from '../Header';

const Wrapper = styled.div`
    position: relative;
    height: 45rem;

    p {
        padding-top: 15.5rem;
        padding-bottom: 3rem;
        font-size: 3rem;
        line-height: 3.5rem;
        font-wight: 700;
        color: #111827;
    }

    img {
        z-index: -1;
    }
`;

const RequestCounselingSection = () => {
    return (
        <Wrapper>
            <Header />
            <Image
                alt="상담 신청 배경 사진"
                src="/image/requestCounselingSectionBackground.jpg"
                fill
                style={{ objectFit: 'cover' }}
            />
            <Container>
                <p>탄탄한 전문성을 바탕으로<br /> 명쾌한 해결책을 제시합니다.</p>
                <Button size="lg" variant="primary">상담 신청하기</Button>
            </Container>
        </Wrapper>
    );
};

export default RequestCounselingSection;