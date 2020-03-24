import React from 'react'
import Typography from '@material-ui/core/Typography';



function Summary({ summary }) {



    return (
        <div>
            
                <div>
                    <Typography id="range-slider" gutterBottom>
                        Thank You {summary.name}
                    </Typography>
                    <Typography id="range-slider" gutterBottom>
                        Your Election {summary.election}
                    </Typography>
                    <Typography id="range-slider" gutterBottom>
                        Your salary {summary.salary}
                    </Typography>
                    <Typography id="range-slider" gutterBottom>
                        Your expense {summary.expense}
                    </Typography>
                    <Typography id="range-slider" gutterBottom>
                        Your saving {summary.savings}
                    </Typography>
                </div>
            
        </div>
    )
}

export default Summary
