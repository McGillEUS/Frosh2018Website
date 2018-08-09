import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderLeaders from '../components/HeaderLeaders'
import leader from '../assets/images/leaders/one1.png';
import {Column, Row} from 'simple-flexbox';


//coords
import AlexH from '../assets/images/coords/CoordBio_Alex.jpg';
import AnnaB from '../assets/images/coords/CoordBio_AnnaB.png';
import AnnaH from '../assets/images/coords/CoordBio_AnnaH.png';
import Canon from '../assets/images/coords/CoordBio_Canon.png';
import David from '../assets/images/coords/CoordBio_David.png';
import Ece from '../assets/images/coords/CoordBio_Ece.png';
import Ella from '../assets/images/coords/CoordBio_Ella.png';
import Kevin from '../assets/images/coords/CoordBio_Kevin.png';
import Laurent from '../assets/images/coords/CoordBio_Laurent.png';
import Nick from '../assets/images/coords/CoordBio_Nick.png';
import Thomas from '../assets/images/coords/CoordBio_Thomas.png';
import Tristan from '../assets/images/coords/CoordBio_Tristan.png';




const LeaderPage = (props) => (


  <div>
    <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

   
    <div id="main">
      <section id="content" className="main">
        
      <div id = "row">




          <div id = "group">
          <h2> Coordinators </h2> 
          </div>

        
          <div id = "coord">
            <div id = "item">
            <img src={AlexH} style={{  }} alt="" />     
            <span id="caption">Alex Hale</span> 
            </div>

            <div id = "item">
            <img src={AnnaH} style={{  }} alt="" />     
            <span id="caption">Anna H</span>
            </div> 

            <div id = "item">
            <img src={AnnaB} style={{  }} alt="" />     
            <span id="caption">Anna Bieber</span>
            </div> 

            <div id = "item">
            <img src={Canon} style={{  }} alt="" />     
            <span id="caption">Canon</span>
            </div> 

            <div id = "item">
            <img src={David} style={{  }} alt="" />     
            <span id="caption">David</span> 
            </div>

            <div id = "item">
            <img src={Ece} style={{  }} alt="" />     
            <span id="caption">Ece Pidik</span>
            </div> 

            <div id = "item">
            <img src={Ella} style={{  }} alt="" />     
            <span id="caption">Ella</span>
            </div> 

            <div id = "item">
            <img src={Kevin} style={{  }} alt="" />     
            <span id="caption">Kevin</span>
            </div> 

            <div id = "item">
            <img src={Laurent} style={{  }} alt="" />     
            <span id="caption">Laurent</span> 
            </div>

            <div id = "item">
            <img src={Nick} style={{  }} alt="" />     
            <span id="caption">Nick</span>
            </div> 

            <div id = "item">
            <img src={Thomas} style={{  }} alt="" />     
            <span id="caption">Thomas Hillyer</span>
            </div> 

            <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">Tristan</span>
            </div> 

          </div>

            
          
          



          <div id = "group">
          <h2> Group 1 </h2> 
          </div>

        
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />    
            <span id ="name">Tristan</span> 
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" /> 
            <span id ="name">Tristan</span>    
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" /> 
            <span id ="name">Lee Chong Wei</span>    
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Tristan</span>   
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
        


          
            <h2> Group 2 </h2>
          

          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 

          <div id = "group">
            <h2> Group 3 </h2>
          </div>

          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "group">
            <h2> Group 4 </h2>
          </div>


          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 

          <div id = "group">
            <h2> Group 5 </h2>
          </div>

          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />     
            <span id ="name">Tristan</span>
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />   
            <span id ="name">Tristan</span>  
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Tristan</span>   
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Tristan</span>   
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 

          <div id = "group">
            <h2> Group 6 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 7 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 8 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 9 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 10 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 11</h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 12 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 13 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 14 </h2>
          </div>


          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 15 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 16 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 17 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 18 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 19 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 20 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 21 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 22 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 23 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 24 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 25 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 26 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 27 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 28 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 29 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 30 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>

          <div id = "group">
            <h2> Group 1 </h2>
          </div>

          <div id = "column">
            <img src={leader} style={{ }} alt="" />            
            <img src={leader} style={{ }} alt="" />          
            <img src={leader} style={{ }} alt="" />
            <img src={leader} style={{ }} alt="" />
          </div>



            
          </div>
    
        </section>

      </div>
    </div>
          
)

export default LeaderPage







        

    
    
        
          


          

        
      

    
  


