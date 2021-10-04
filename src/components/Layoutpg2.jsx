import React from 'react'
import Grid from "@material-ui/core/Grid"
import "../App.css"
import MoreInfo from './MoreInfo'
const Layoutpg2 = () => {
    return (
        <div>
            <center>

                <div className="outerPart">
                    <Grid container spacing={1}>

                        <Grid container item justifyContent="center" alignItems="center" sm={10} md={8} >
                        <MoreInfo/>
                        </Grid>
                        <Grid container item justifyContent="center" alignItems="center" xs className="tree2">
                      
                        </Grid>
                    </Grid>
                </div>
            </center>
        </div>
    )
}

export default Layoutpg2
