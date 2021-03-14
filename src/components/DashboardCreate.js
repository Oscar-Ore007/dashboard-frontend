import React from "react";
import Icon from "@material-ui/core/Icon";
import DashboardButton from "./DashboardButton";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import styled from "styled-components";
import DashboardForm from "./DashboardForm";
import DashboardOpenForm from "./DashboardOpenForm";

class DashboardCreate extends React.PureComponent {
    state = {
        formOpen: false,
        text: ""
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false 
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value 
        });
    };

    handleAddList = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listID, text));
        }
    };

    handleAddCard = () => {
        const { dispatch, listID} = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listID, text));
        }
    };

    renderOpenForm = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";

        const OpenFormButton = styled.div`
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 3px;
        height: 36px;
        margin-left: 8px;
        width: 300px;
        padding-left: 10px;
        padding-right: 10px;
        opacity: ${buttonTextOpacity};
        color: ${buttonTextColor};
        background-color: ${buttonTextBackground};
        `;

        return ( 
            <OpenFormButton onClick={this.openForm}>
                <Icon>add</Icon>
                <p style={{ flexShrink: 0}}>{buttonText}</p>
            </OpenFormButton>
        );
    };

    render() {
        const { text } = this.state;
        const { list } = this.props;
        return this.state.formOpen ? (
            <DashboardForm
            text={text}
            onChange={this.handleInputChange}
            closeForm={this.closeForm}
            >
                <DashboardButton onClick={list ? this.handleAddList : this.handleAddCard}>
                    {list ? "Add List" : "Add Card"}
                </DashboardButton>
            </DashboardForm> 
        ) : (
            <DashboardOpenForm list={list} onClick={this.openForm}>
                {list ? "Add another list" : "Add another card"}
            </DashboardOpenForm>
        );
    }
}

export default connect()(DashboardCreate);