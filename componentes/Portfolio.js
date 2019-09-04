import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import {Textocards, Palavracor} from './Texts';


const MolduraPort = styled.div`
width: 85%;
height: 20vh;
border-radius: 5px;
background: ${({ theme }) => theme.colors.white};
overflow: hidden;
margin-top: ${props => props.margintop};
margin-left: ${props => props.marginleft};
img {
    width: auto;
    height: ${props => props.heightimg};
    margin-left: ${props => props.marginleftimg};
    margin-top: ${props => props.topimg};
}
:hover {
    box-shadow: 0px 0px 5px 1px ${({theme}) => theme.colors.boxshadowescuro};
}
@media (max-width: 768px) {
    height: 150px;
    z-index: 3;
    margin-top: ${props => props.margintoptablet};
    img {
    width: auto;
    height: ${props => props.heighttabletimg};
    margin-left: ${props => props.marginleftimgtablet};
    margin-top: ${props => props.topimgtablet};
    }
}
@media (max-width: 568px) {
    width: 100%;
    height: 200px;
    z-index: 3;
    margin-top: ${props => props.heightmobile};
    background: ${({theme}) => theme.colors.purple};
    margin-left: 20%;
    img {
    width: auto;
    height: ${props => props.heightmobileimg};
    margin-left: ${props => props.marginleftimgmobile};
    margin-top: 0%;
    }
}
`
const Carouselcard = styled.div`
width: 90%;
height: 60vh;
margin-top: 10%;
margin-left: 10%;
border-radius: 10px;
overflow: hidden;
img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
}
@media (max-width: 768px) {
    margin-top: 0;
    width: 90%;
    height: 300px;
    margin-left: 12.5%;
    img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
    }
}
@media (max-width: 568px) {
    display: none;
}
`
const Links =styled.h2`
padding-left: 10%;
padding-top: 2.5%;
font-size: 1.5vw;
color: ${({theme}) => theme.colors.yellow};
a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.yellow};
}
@media (max-width: 568px) {
    display: none;
}
`
const Base = "../static/Cantinhodasflores.png"

const Github = "https://github.com/jenifferazevedo"

export function Portfolio(props) {
    const [photo, setPhoto] = useState("")
    const [link, setLink] = useState("")

    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col lg={12} md={21} sm={21} xs={21}>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={20}>
                                <MolduraPort marginleft="30%" margintop="25%" marginleftimg="0%" heightimg="100%" margintoptablet="15%" marginleftimgtablet="-10%" heighttabletimg="100%" heightmobile="10%" heightmobileimg="100%"
                                  onClick={() => setPhoto("../static/Cantinhodasflores.png") & setLink("https://youthful-ptolemy-a12c07.netlify.com/")} >
                                    <img src="..\static\Cantinhodasflores.png" />
                                </MolduraPort>
                                <Textocards paddingTop="4%" fontsize="0.8vw" tablettextsize="1.5vw" paddingleft="30%" linksite="https://youthful-ptolemy-a12c07.netlify.com/" textp1="Site responsivo desenvolvida com o Bootstrap!"/>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={20}>
                                <MolduraPort marginleft="20%" margintop="25%" marginleftimg="0%" heightimg="100%" margintoptablet="15%" marginleftimgtablet="-5%" heighttabletimg="100%" heightmobile="5%" heightmobileimg="100%"
                                onClick={() => setPhoto("../static/Pokedex.png") & setLink("https://pokedexjeniffer.herokuapp.com/")}>
                                    <img src="..\static\Pokedex.png" />
                                </MolduraPort>
                                <Textocards paddingTop="4%" fontsize="0.8vw" tablettextsize="1.5vw" paddingleft="20%" linksite="https://pokedexjeniffer.herokuapp.com/" textp1="Pokedex desenvolvida em React/Next.js com animação em css e uso de Api com Axios."/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={20}>
                                <MolduraPort marginleft="30%" margintop="0%" marginleftimg="0%" heightimg="100%" margintoptablet="0%" marginleftimgtablet="-5%" heighttabletimg="100%" heightmobile="5%" heightmobileimg="100%"
                                onClick={() => setPhoto("../static/Dashboard.jpg") & setLink("https://github.com/jenifferazevedo/Dashboard_Ui")}>
                                    <img src="..\static\Dashboard.jpg" />
                                </MolduraPort>
                                <Textocards paddingTop="4%" fontsize="0.8vw" tablettextsize="1.5vw" paddingleft="30%" padtoptablet="0" linksite="https://github.com/jenifferazevedo/Dashboard_Ui" textp1="Projecto de Estudo Dashboard em Bootstrap, design original de 'Rajkishore Verma'"/>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={20}>
                                <MolduraPort marginleft="20%" margintop="0%" marginleftimg="0%" heightimg="150%" margintoptablet="0%" marginleftimgtablet="0%" topimg="-21%" heighttabletimg="150%" topimgtablet="-20%" heightmobile="5%" heightmobileimg="110%"
                                onClick={() => setPhoto("../static/Graphic.jpg") & setLink("https://www.behance.net/jenifferazevedo")}>
                                    <img src="..\static\Graphic.jpg" />
                                </MolduraPort>
                                <Textocards paddingTop="4%" fontsize="0.8vw" tablettextsize="1.5vw" paddingleft="20%" padtoptablet="0" linksite="https://www.behance.net/jenifferazevedo" textp1="Design de Produto em 3ds Max e tratamento final feita do Photoshop!"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} md={22} sm={21} xs={21}>
                        <Carouselcard >
                            <img src={photo || Base}/>
                        </Carouselcard>
                        <Links><a href={link || Github} target="_blank">Veja o projeto! Clique aqui.</a></Links>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}