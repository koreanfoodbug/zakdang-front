import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Link from 'next/link'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 1.313rem;

    & > div:nth-child(2) {
        display: flex;
        align-items: center;

        & > span:not(:last-child) {
            margin-right: 25px;
        }
    }

    span {
        cursor: pointer;
        display: inline-block;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-wight: 400;
        color: #111827;
    }
`;

const Header = () => {
    const w = window as unknown as { ChannelIO: (arg: string) => void };
    return (
        <Container>
            <Wrapper>
                <div>
                    테스트
                </div>
                <div>
                    <Link 
                    style={{ marginRight: '10px', color: 'black'}}
                    href="http://www.sayulaw.com/startup">
                        업무영역
                    </Link>
                    <Link 
                    style={{ marginRight: '10px', color: 'black'}}
                    href="/landing">
                        불륜피해대응
                    </Link>
                    <Link 
                    style={{ marginRight: '10px', color: 'black'}}
                    href="http://www.sayulaw.com/INSIGHTS">
                        성공사례
                    </Link>
                    <Button size="sm" variant="primary" style={{ marginLeft: '5px'}} onClick={() => { w.ChannelIO("showMessenger") }}>
                        상담 신청하기
                    </Button>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Header;