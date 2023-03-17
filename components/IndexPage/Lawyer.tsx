import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'

const Article = styled.article`
    position: relative;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    aspect-ratio: 1 / 1;

    @media (min-width: 500px) {
        padding: 2.5rem;
    }

    span:nth-child(2) {
        font-size: 1rem;
        line-height: 1.5rem;
        font-wight: 400;
        color: #6B7280;
        padding-bottom: 0.25rem;
    }

    span:nth-child(3) {
        font-size: 1.5rem;
        line-height: 2rem;
        font-wight: 700;
        color: #111827;
    }

    span:last-child {
        margin-top: auto;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-wight: 500;
        color: #111827;
        cursor: pointer;
    }

    img {
        z-index: -1;
    }
`;

interface Props {
    name: string;
    imgSrc: string;
    link: string;
}

const Lawyer: React.FC<Props> = ({ name, imgSrc, link }) => {
    return (
        <Article>
            <Image
                alt={`${name} 변호사`}
                src={imgSrc}
                fill
            />
            <span>
                대표변호사
            </span>
            <span>
                {name}
            </span>

            <Link href={link}>
                <span>
                    자세히 보기
                </span>
            </Link>
        </Article>
    );
};

export default Lawyer;