import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "Style/Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">바연 사전</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">메인</Nav.Link>
            <NavDropdown
              title="가이드"
              id="collasible-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Information">게임정보</NavDropdown.Item>
              <NavDropdown.Item href="/Quest">퀘스트정보</NavDropdown.Item>
              <NavDropdown.Item href="/profession">직업소개</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">이벤트</Nav.Link>
            <Nav.Link href="#pricing">자유게시판</Nav.Link>
            <Nav.Link href="#pricing">스크린샷</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link href="/join">회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
