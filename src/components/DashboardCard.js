import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const DashBoardCard = ({text}) => {
    return (
        <Card>
            <Typography gutterBottom>
            {text}
          </Typography>
      </Card>
    );
};

export default DashBoardCard;