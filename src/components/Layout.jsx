import React,{lazy,Suspense} from 'react'
import Grid from "@material-ui/core/Grid"
// import Signup from './Signup'
import "../App.css"
import CenterData from './CenterData'
import { CircularProgress } from '@material-ui/core'
const Signup=lazy(()=>import('./Signup'))
const Layout = () => {

  
    return (
        <center>

        <Suspense fallback={<div className='loading'>
        <span style={{fontSize:'5rem',fontWeight:'900'}}>loading..</span>
        <CircularProgress/>
        <CircularProgress/>
        <CircularProgress/>
        </div>}>
        <div className="outerPart">
            <Grid container spacing={1}>
                <Grid container item justifyContent="center" alignItems="center" lg sm className="tree" xs>
                    
                </Grid>
                <Grid container item justifyContent="center" alignItems="center" lg sm xs={12}>
                 <CenterData></CenterData>
                </Grid>
                <Grid  container item justifyContent="center" alignItems="center" lg={6} sm={8} xs={12} className="signIn">
                    <Signup />

                </Grid>
            </Grid>
        </div>
            </Suspense>
        </center>
    )
}

export default Layout
