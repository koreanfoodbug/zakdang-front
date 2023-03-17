import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Image from 'next/image';
import FooterContent from './FooterContent';

const Row = styled.div`
    display: flex;
`;

const SNSWrapper = styled.div`
    position: absolute;
    top: 3rem;
    right: 0;

    div {
        margin-right: 1.5rem;
    }
    
    display: none;

    @media (min-width: 500px) {
        display: flex;
    }
`;

const StyledContainer = styled(Container)`
    padding: 3rem 0;
    position: relative;
`;

const SNSIconWrapper = styled.div`
    width: 1.5rem;
    aspect-ratio: 1 / 1;
    position: relative;
`;

const Footer = () => {
    return (
        <StyledContainer>
            <SNSWrapper>
                <SNSIconWrapper>
                    <Image
                        alt="인스타"
                        src="/svg/instagram.svg"
                        fill
                    />
                </SNSIconWrapper>
                <SNSIconWrapper>
                    <Image
                        alt="페이스북"
                        src="/svg/facebook.svg"
                        fill
                    />
                </SNSIconWrapper>
                <SNSIconWrapper>
                    <Image
                        alt="트위터"
                        src="/svg/twitter.svg"
                        fill
                    />
                </SNSIconWrapper>
            </SNSWrapper>
            <Row>
                <FooterContent
                    menuHeader='고객센터'
                    menus={[
                        '대표전화: 02)6956-4662',
                        '팩스: 02)6956-4663',
                        '이메일: jhchoi@sayulaw.com,',
                        'jwsong@sayulaw.com',
                    ]}
                />
            </Row>
            <div style={{ paddingTop: '3rem'}} />
            <FooterContent
                menuHeader='법률사무소 사유'
                menus={[
                    '사업자등록번호: 168-27-01317',
                    '대표변호사: 최지현, 송지원, 이상호 | 광고책임변호사: 최지현, 송지원, 이상호',
                    '서울 서초구 강남대로 210, 9층(양재동, 행복빌딩)',
                ]}
            />
        </StyledContainer>
    );
};

export default Footer;