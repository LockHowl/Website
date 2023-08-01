import styled, { keyframes } from 'styled-components';

const NavMargin = "50px";

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 95vw;
    flex-wrap: wrap;
    overflow: hidden;
`;

const navbarShadow = keyframes`
    from {
        box-shadow: 0px 0px 0px white;
    }
    to {
        box-shadow: 0px 1px 8px gray;
    }
`;

export const Navbar = styled.nav`
    font-family: system-ui;
    background-color: whitesmoke;
    height: ${NavMargin};
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    position: fixed;
    top: 0;
    width: 100vw;

    &:hover {
        animation: ${navbarShadow} 0.2s linear forwards;
    }
`;

const navbarHighlight = keyframes`
    from {

    }
    to {
        color: #A7C7E7;
    }
`;

export const NameTag = styled.a`
    margin-left: 80px;
    font-size: 24px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        animation: ${navbarHighlight} 0.1s linear forwards;
    }

    @media (max-width: 768px) {
        margin-left: 25px;        
    }
`;

export const Bar = styled.div`
    width: 28px;
    height: 4px;
    background-color: black;
    margin: 2px auto;
    display: none;
    border-radius: 5px;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const NavList = styled.ul`
    display: flex;
    margin-right: 80px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-right: 0px;
        flex-direction: column;
        position: fixed;
        right: 0px;
        top: 0px;

        > *:nth-child(n+2) {
            display: none;
        }

        &:hover {
            > *:nth-child(n+2) {
                display: flex;
            }
        }
    }
`;

export const NavItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 16px;
    text-align: center;
    margin: 0 20px;

    &:hover {
        cursor: pointer;
        animation: ${navbarHighlight} 0.1s linear forwards;
    }

    @media (max-width: 768px) {
        margin: 0;
        height: ${NavMargin};
        width: 100px;
        background-color: whitesmoke;
    }
`;

export const AvatarImg = styled.img`
    margin-top: 75px;
    width: 100px;
    height: 100px;

    border: solid 6px;
    border-radius: 100%;
    border-color: whitesmoke;
`;

export const Wrapper = styled.div`
    width: 748px;

    @media (max-width: 768px) {
        width: 95vw;
    }
`;

const borderTran = keyframes`
    from {
        border-color: whitesmoke;
    }
    to {
        border-color: gray;
    }
`;

export const ThumbImg = styled.img`
    width: 324px;
    height: 180px;
    
    border: solid 6px;
    border-color: whitesmoke;
    border-radius: 6px;

    object-fit: cover;

    &:hover {
        animation: ${borderTran} 1s forwards;
    }
`;

const Typing = keyframes`
    from {
        width: 0px;
    }
    to {
        width: 180px;
    }
`;

export const TagText = styled.p`
    overflow: hidden;
    white-space: nowrap; 

    color: black;
    font-size: 15px;
    animation: ${Typing} 1.5s steps(24, end);
    
`;

export const SuperText = styled.h1`
    margin: 10px 0px;
    width: 260px;
    text-align: center;  
`;

export const SubText = styled.p`
    margin: 0;
    text-align: center;
`;

export const Logo = styled.h1`
    margin: 10px 0px;
    text-align: center;  
`;

export const SubTitle = styled.p`
    font-size: 18px;
    margin: 8px 0;
    width: 62vw;
    text-align: center;
    border-bottom: solid gray 2px;
`;

export const FootTag = styled.p`
    border-top: solid gray 2px;
    margin: 48px 0px 0px 0px;
    width: 748px;
    text-align: right;

    @media (max-width: 768px) {
        width: 90vw;
    }
`;

