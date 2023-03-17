import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  &:not(:last-child) {
    padding-right: 3rem;
  }

  min-width: 8rem;

  span {
    font-size: 1rem;
    line-height: 1.5rem;
    font-wight: 700;
    color: #111827;
    padding-bottom: 0.75rem;
    display: inline-block;
  }

  li {
    font-size: 1rem;
    line-height: 1.5rem;
    font-wight: 400;
    color: #6B7280;
    padding-bottom: 0.25rem;
    list-style: none;
  }
`;

interface Props {
    menuHeader: string;
    menus: Array<string>;
}

const FooterContent: React.FC<Props> = ({ menuHeader, menus }) => {
    return (
        <Ul>
            <span>
                {menuHeader}
            </span>
            {
                menus.map((menu, index) => {
                    return (
                        <li key={index}>{menu}</li>
                    )
                })
            }
        </Ul>
    );
};

export default FooterContent;