import React from "react";
import { Nav } from "react-bootstrap";

const SideBar = (props) => { 
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action bg-light">Templates</a>
                <a className="list-group-item list-group-item-action bg-light">Props</a>
                <a className="list-group-item list-group-item-action bg-light">Lighting</a>
                <a className="list-group-item list-group-item-action bg-light">Documents</a>
            </div>
        </Nav>
    );
};

export default SideBar;