import React from "react";

class DashboardActionButton extends React.Component {

    renderAddButton = () => {
        const {list} = this.props;
        
        const buttonText = list ? "Add another list" : "Add another card"
        return (
            <div>
                <Icon>add</Icon>
                <p>Add another card</p>
            </div>
        )
    }


    render() {
        return null
    }
}

export default DashboardActionButton;