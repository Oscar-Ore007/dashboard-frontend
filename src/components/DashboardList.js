import React from 'react';
import DashboardCard from './DashboardCard';

const DashboardList = ({title, cards}) => {
    return(
        <div style={styles.containers}>
            <h4>{title}</h4>
            {cards.map(card => <DashboardCard text={card.text} />)}
        </div>
    )   
};

const styles = { 
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
    
};

export default DashboardList;