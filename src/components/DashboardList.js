import React from 'react';
import DashBoardCard from './DashboardCard';
import DashboardCard from './DashboardCard';

const DashboardList = ({title}) => {
    return(
        <div style={styles.containers}>
            <h4>{title}</h4>
            <DashBoardCard/>
        </div>
    )   
};

const styles = { 
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8

    }
    
};

export default DashboardList;