import { Result } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotExist = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<NavLink to="/" type="primary">Back Home</NavLink>}
        />
    );
}

export default PageNotExist;
