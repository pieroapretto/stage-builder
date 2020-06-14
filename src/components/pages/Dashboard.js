import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { startLogout } from '../../actions/user';
import Sidebar from '../sidebar/Sidebar';

const DashboardPage = ({ name, startLogout }) => (
    <Container fluid>
        <Row>
            <Col xs={2} id="sidebar-wrapper">      
                <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
                <div>
                    <p>Logged in as {name}!</p>
                    <button onClick={startLogout}>Logout</button>
                </div>
            </Col>
        </Row>
    </Container>
);

const mapStateToProps = state => ({
    name: state.user.name
});

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);