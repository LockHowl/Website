import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //make obsolete
import { FlexCol, FlexRow, Navbar, NameTag, NavList, NavItem, Bar, AvatarImg, ThumbImg, Wrapper, TagText, SuperText, SubText, Logo, SubTitle, FootTag } from './styled-components.js';
import { HtmlP, ReactP, ProfP } from './DataSet.js';
import { SiFreecodecamp } from 'react-icons/si';
import { AiOutlineCodepen, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import Avatar from './imgs/Me.jpg';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

function Page() {
  const [active, setActive] = React.useState(1);

  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <About />;
      case 2:
        return <Projects />;
      case 3: 
      return <Resume />;
      default:
        return ;
    }
  };

    return(
    <div>
      <Nav viewChange={SetView} />
      <FlexCol>
        <AvatarImg src={Avatar} />
        <TagText>Web Developer / Front End</TagText>
        <SuperText>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/omid-mansour-4bbb38179/'><AiFillLinkedin/></a>
          <a target="_blank" rel="noreferrer" href='https://www.freecodecamp.org/opeth'><SiFreecodecamp/></a>
          <a target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        </SuperText>
        
        <div id="content">
          {ActiveView()}
        </div>
      
        <FootTag>© 2022 Omid Mansour</FootTag>
      </FlexCol>
    </div>
  );
}

function Nav(props) {
  return (
    <div>
      <Navbar>
        <NameTag>Omid Mansour</NameTag>
        <NavList>
          <NavItem><Bar/><Bar/><Bar/></NavItem>
          <NavItem><a onClick={() => props.viewChange(1)}>About</a></NavItem>
          <NavItem><a onClick={() => props.viewChange(2)}>Projects</a></NavItem>
          <NavItem><a onClick={() => props.viewChange(3)}>Résumé</a></NavItem>
        </NavList>
      </Navbar>
    </div>
  );
}

function Projects() {
  return (
    <FlexCol>
      <SubTitle><em>{"HTML5 & CSS3"}</em></SubTitle>
      <FlexRow>
        {HtmlP.map((e) => {
          return (<Thumbnail data={e}/>)
        })}
      </FlexRow>

      <SubTitle><em>React.js</em></SubTitle>
      <FlexRow>
        {ReactP.map((e) => {
          return (<Thumbnail data={e}/>);
        })}
      </FlexRow>

      <SubTitle><em>{"Unity & C#"}</em></SubTitle>
      <FlexRow>
        {ProfP.map((e) => {
          return (<Thumbnail data={e}/>);
        })}
      </FlexRow>

    </FlexCol>
  );
}

function Thumbnail(props) {
  return(
    <FlexCol>
      <a target="_blank" rel="noreferrer" href={props.data.link}><ThumbImg src={props.data.img}/></a>
      <p>{props.data.description}</p>
      
      <div style={{display: "inline"}}>
        {(props.data.codepen) && <a target="_blank" rel="noreferrer" style={{color: "inherit", textDecoration: "inherit"}} href={props.data.codepen}><AiOutlineCodepen style={{fontSize: "25px"}} /></a>}
        {(props.data.github) && <a target="_blank" rel="noreferrer" style={{color: "inherit", textDecoration: "inherit"}} href={props.data.github}><AiOutlineGithub style={{fontSize: "25px"}} /></a>}
        {(props.data.article) && <a target="_blank" rel="noreferrer" style={{color: "inherit", textDecoration: "inherit"}} href={props.data.article}><BiNews style={{fontSize: "25px"}} /></a>}
      </div>

    </FlexCol>
  );
}

function About() {
  return (
    <Wrapper>
      <FlexCol>
      <SuperText>About Me</SuperText>
      <SubText>
        Hello! I am Omid, a web developer. I write in JavaScript mostly, but other languages I have been exposed to include C#, C++, Java, NASM, SQL and a few others.
        My fascination with coding started with an old Arduino I played around with in highschool. 
        I am based in Canada but have a strong desire to broaden my horizons further as I have always been in multicultured settings.
      </SubText>
      <p/>
      <SubText>  
        My journey began with a degree in Mathematics but I had a yearning for creation versus discovery and found programming was the highlight of my experience with my BSc.
        I focused my ambition on the appreciation I had for the software side of technology and pursued a Computer Science MSc. 
        I had written my thesis discussing the impact of 'Serious Games', whilst implementing one using C# and Unity. 
        I continued with Unity and C# professionally, working on a small project for Exeter University. 
      </SubText>
      <p/>
      <SubText>
        The most enjoyable work during my MSc was with web development. I decided I wanted to delve deeper with it and have since a worked with a variety of tools and frameworks
        such as Bootstrap, jQuery, SASS, React, Styled-Components, Redux and TypeScript. I have also acquired FreeCodeCamp's certificates on front end development.
      </SubText>
      </FlexCol>
    </Wrapper>
  );
}

function Resume() {
  return (
    <div>

    </div>
  );
}
reportWebVitals();
