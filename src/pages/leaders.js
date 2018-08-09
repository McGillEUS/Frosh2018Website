import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderLeaders from '../components/HeaderLeaders'
import leader from '../assets/images/leaders/one.png';
import {Column, Row} from 'simple-flexbox';

class Leaders extends React.Component {
  render() {

    return (


      <div>


        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderLeaders />
        <div id="main">
          <Column flexGrow = {4}>



          <Row horizontal = 'center'>
            <h1> Group 1 </h1>
            
            
          </Row>

          <Row vertical ='center'>

            <Column flexGrow ={1} horizontal='center'>
               <img src={leader} style={{ maxWidth: 100 }} alt=""/>
                <p> Alexander Graham</p>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <p>Vladimir Poutine</p>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <p>gertrude </p>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <p>yeetter thompson</p>
            </Column>


          </Row>


          <Row horizontal = 'center'>
            <h1> Group 2 </h1>
          </Row>


          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>


          <Row horizontal = 'center'>
            <h1> Group 3 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 4 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>


          <Row horizontal = 'center'>
            <h1> Group 5 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 6 </h1>
          </Row>


          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 7 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 8 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 9 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 10 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 11 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 12 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 13 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 14 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 15 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 15 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 16 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 17 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 18 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 19 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 20 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 21 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 22 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 23 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 24 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 25 </h1>
          </Row>


          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 26 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 27 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 28 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 29 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

          <Row horizontal = 'center'>
            <h1> Group 30 </h1>
          </Row>

          <Row vertical ='center'>

           <Column flexGrow ={1} horizontal='center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>atric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

            <Column flexGrow = {1} horizontal = 'center'>
              <img src={leader} style={{ maxWidth: 100 }} alt=""/>
              <span>aric</span>
            </Column>

          </Row>

      







        </Column>
        </div>

      </div>
    
        
          


          

        
      

    )
  }
}

export default Leaders

export const pageQuery = graphql`
  query LeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
