import React from "react";
import styled from "styled-components";
import Button form "@material-ui/core/Button";

const StyledButton = styled(Button)`
&& {
    color: white;
    background: #5aac44;
}
`;

const DashboardButton = ({ children, onClick }) => {
    return(
        <StyledButton variant="contained" onMouseDown={onClick}>
        {children}
        </StyledButton>
    );
};

export default DashboardButton; 