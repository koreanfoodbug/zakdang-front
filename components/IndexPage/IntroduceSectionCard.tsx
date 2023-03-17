import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.section`
    height: 18.75rem;

    @media (min-width: 500px) {
        height: 23.75rem;
    }

    border-radius: 16px;
    position: relative;
    z-index: -1;
    padding: 1.5rem;

    @media (min-width: 500px) {
        padding: 2.5rem;
    }

    span {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
        color: #111827;
        z-index: 0;
        position: relative;
    }
`;

interface Props {
    text: React.ReactNode;
    imgSrc: string;
}

const IntroduceSectionCard: React.FC<Props> = ({ text, imgSrc }) => {
    return (
        <Wrapper>
            <Image
                alt="intro 이미지"
                src={imgSrc}
                fill
            />
            {text}
        </Wrapper>
    );
};

export default IntroduceSectionCard;