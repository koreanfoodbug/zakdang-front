import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    background-color: #F3F4F6;
    padding: 3rem 0;
`;

const Content = styled.div`
    padding-left: 3rem;

    p {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-wight: 400;
        color: #111827;
    }

    span {
        padding-top: 0.75rem;
        font-size: 1rem;
        line-height: 2rem;
        font-wight: 400;
        color: #6B7280;
    }
`;

const ImageWrapper = styled.div`
    width: 6rem;
    aspect-ratio: 1 / 1;
    position: relative;
`;

const Carousel = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image
                    alt="송지원 변호사"
                    src="/image/songji.png"
                    fill
                />
            </ImageWrapper>
            <Content>
                <p>“단순한 법 해석을 넘어 당신의 사업과 기술을 정확히 이해하고,
                    <br />
                    상황에 맞는 가장 적합한 해결책을 제시합니다.”
                </p>
                <span>송지원 대표변호사</span>
            </Content>
        </Wrapper>
    );
};

export default Carousel;