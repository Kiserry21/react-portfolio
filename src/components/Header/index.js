import React from 'react';
import Navigation from "../Navigation";import { Button, DatePicker, Space, version } from 'antd';
import "antd/dist/reset.css";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div className="name">
                <h2>Kiseri Habte</h2>
            </div>
            <div>
                <Navigation
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
            </div>
           
        </header>
    );
}

export default Header;