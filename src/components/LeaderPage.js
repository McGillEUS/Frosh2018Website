import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderLeaders from '../components/HeaderLeaders'

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

//leaders

//group 1
import Lauriane from '../assets/images/leaders/group 1/Lauriane Cossette.jpg';
import AlexM from '../assets/images/leaders/group 1/Frosh_Pic - Alex Moreau.jpg';
import Spencer from '../assets/images/leaders/group 1/slog - Spencer Handfield.png';

//group 2
import SarahF from '../assets/images/leaders/group 2/IMG_3959 - Sarah Ford.jpeg';
import Nicolas from '../assets/images/leaders/group 2/IMG_4321 - nicolas siriwardhana.jpg';
import Kabir from '../assets/images/leaders/group 2/Kabir Sethi.jpg';
import Shaun from '../assets/images/leaders/group 2/Shaun Jiji.jpeg';

//group 3
import Jordan from '../assets/images/leaders/group 3/pic - Jordan Legendre.jpg';
import Lianne from '../assets/images/leaders/group 3/Lianne - Lianne Campbell.jpg';
import Mike from '../assets/images/leaders/group 3/Capture - Mike Chan (1).png';
import Ahmad from '../assets/images/leaders/group 3/Ahmad Masri.jpg';

//group 4 REDOWNLOAD BOYZ

//group 5
import BenjaminC from '../assets/images/leaders/group 5/Benjamin Carris.jpg';
import Emery from '../assets/images/leaders/group 5/Emery Mc S.jpg';
import MarchOlivier from '../assets/images/leaders/group 5/Marc-Olivier Van Dorpe.jpeg';
import BenjaminM from '../assets/images/leaders/group 5/photo - Benjamin Munt.jpg';

//group 6
import Stephanie from '../assets/images/leaders/group 6/frosh pic - Stephanie Malek.jpg';
import Olivier from '../assets/images/leaders/group 6/fullsizeoutput_40 - Olivier Fortier.jpeg';
import Xavier from '../assets/images/leaders/group 6/IMG_8461 - Xavier Pellemans.jpg';
import Rene from '../assets/images/leaders/group 6/ReneGagnonPicture - René Gagnon.jpg';
import Rebecca from '../assets/images/leaders/group 6/Rebecca Weill.png';

//group 7
import Andrea from '../assets/images/leaders/group 7/IMG_6893 - Andrea Huerta.jpg';
import Luc from '../assets/images/leaders/group 7/Luc Plamondon.jpg';
import Artsiom from '../assets/images/leaders/group 7/picture - Artsiom Skliar.png';
import Ethan from '../assets/images/leaders/group 7/square me - Ethan Lague.jpg';

//group 8
import Elijah from '../assets/images/leaders/group 8/Elijah Saragosa - Elijah Saragosa.jpg';
import Massy from '../assets/images/leaders/group 8/IMG_5968 - Massy M.jpg';
import Mathew from '../assets/images/leaders/group 8/Mathew Cauthon.jpg';
import Owen from '../assets/images/leaders/group 8/MEL_5964 - Owen Quinn.jpg';
import AlexSassano from '../assets/images/leaders/group 8/Alex Sassano.png';

//group 9
import Ameer from '../assets/images/leaders/group 9/Ameer Nizami.jpg';
import Brent from '../assets/images/leaders/group 9/Frosh - Brent Coutts.jpg';
import EmmaFerrabee from '../assets/images/leaders/group 9/IMG_0613 - Emma Ferrabee.jpg';
import MichaelLi from '../assets/images/leaders/group 9/IMG_3199 - Michael Li Fraine.jpg';
import Delwyn from '../assets/images/leaders/group 9/IMG_20180519_172219 - Delwyn Y.jpg';

//group 10
import Cedric from '../assets/images/leaders/group 10/Cedric Welt.png';
import Francois from '../assets/images/leaders/group 10/Francois Eliott - Francois-Eliott Rousseau.jpeg';
import Mat from '../assets/images/leaders/group 10/IMG_20180603_184017_Bokeh (2) - Mat Njoo.jpg';
import Laurence from '../assets/images/leaders/group 10/Laurence Peinturier.jpg';

//group 11
import Thierry from '../assets/images/leaders/group 11/IMG_3687 - Thierry Pichette.jpg';
import Maxence from '../assets/images/leaders/group 11/Maxence Frenette.jpg';
import MarieClaire from '../assets/images/leaders/group 11/photo2018 - Marie-Claire Hamel.jpg';
import TristanBouchard from '../assets/images/leaders/group 11/Tristan Bouchard.jpg';

//group 12
import AlexGruenwald from '../assets/images/leaders/group 12/Alex Gruenwald (1).jpg';
import Cheng from '../assets/images/leaders/group 12/Cheng Lin.jpg';
import Jonathan from '../assets/images/leaders/group 12/Jonathan Ong.jpg';
import K from '../assets/images/leaders/group 12/K Marshall.jpg';
import Preyansh from '../assets/images/leaders/group 12/Preyansh Kaushik.jpg';

//group 13
import Joel from '../assets/images/leaders/group 13/image - Joel.jpg';
import RyanZel from '../assets/images/leaders/group 13/IMG_9717 - Ryan Zelnicker.jpg';
import Tal from '../assets/images/leaders/group 13/IMG-1463 - Tal Abravanel.jpg';
import Michel from '../assets/images/leaders/group 13/photo bam event - Michel Abdel Nour.jpg';

//group 14
import eleri from '../assets/images/leaders/group 14/eleri m.jpg';
import AlexScheffel from '../assets/images/leaders/group 14/FroshPhoto - Alex Scheffel.jpg';
import Ian from '../assets/images/leaders/group 14/ixgauth1.jpg';
//import Michel from '../assets/images/leaders/group 12/photo bam event - Michel Abdel Nour.jpg';

//group 15
import annejulie from '../assets/images/leaders/group 15/anne-julie c.jpg';
import Emeric from '../assets/images/leaders/group 15/ic-1682 - Emeric Bernier.jpg';
import Lara from '../assets/images/leaders/group 15/Lara Ghanem.jpg';
import Vassil from '../assets/images/leaders/group 15/Pic Vassil - Vassil Kroumov.png';
import Mario from '../assets/images/leaders/group 15/pic - Mario Lipari.jpg';

//group 16
import Hugo from '../assets/images/leaders/group 16/20180508_185731 - hugo bernard.jpg';
import Isabelle from '../assets/images/leaders/group 16/image-2018-07-31 - Isabelle del Mundo.jpg';
import Reda from '../assets/images/leaders/group 16/IMG_0848 - Reda El Khili.jpg';
import Oliver from '../assets/images/leaders/group 16/IMG_1992 - Oliver Verzani.jpg';
import Nima from '../assets/images/leaders/group 16/Nima Chatlani.jpg';

//group 17
import Christos from '../assets/images/leaders/group 17/Christos Cunning.jpg';
import Cara from '../assets/images/leaders/group 17/fullsizeoutput_d3d - Zhang Cara.jpeg';
import Kelly from '../assets/images/leaders/group 17/Kelly Ma.jpg';
//import Oliver from '../assets/images/leaders/group 16/IMG_1992 - Oliver Verzani.jpg';

//group 18
import AndiCamille from '../assets/images/leaders/group 18/frosh picture (square) - Andi-Camille Batie.jpg';
import AlexanderTorabi from '../assets/images/leaders/group 18/IMG_3071 - Alexander Torabi.jpg';
import RosalieGuay from '../assets/images/leaders/group 18/Rosalie Guay.png';
//import Oliver from '../assets/images/leaders/group 16/IMG_1992 - Oliver Verzani.jpg';

//group 19
import Amanda from '../assets/images/leaders/group 19/IMG_1766 - Amanda Forsans.jpg';
import KevinCole from '../assets/images/leaders/group 19/Kevin Cole.png';
import Nicole from '../assets/images/leaders/group 19/Nicole Thoma.jpg';
import Will from '../assets/images/leaders/group 19/will_connors.jpg';

//group 20
import NicolasBieber from '../assets/images/leaders/group 20/frosh - nicolas Bieber.jpg';
import Alice from '../assets/images/leaders/group 20/IMG_6682 - Alice Lemay.jpg';
import JuliaR from '../assets/images/leaders/group 20/IMG_7500 (2) - Julia R..jpg';
import Sydney from '../assets/images/leaders/group 20/Sydney Netto.png';

//group 21
import Denise from '../assets/images/leaders/group 21/IMG_8257-1 - Denise Bridges.jpg';
import RyanWong from '../assets/images/leaders/group 21/Ryan Wong - Frosh Leader Bio Picture 2018 - Ryan Wong.jpg';
import Traven from '../assets/images/leaders/group 21/TravenPhoto - Traven Blaney.jpg';
import Julia from '../assets/images/leaders/group 21/USLS Conference Photo (2) - Julia Elson.jpg';

//group 22
import Danny from '../assets/images/leaders/group 22/DSC02721 - Danny Amon.jpg';
import SarahJ from '../assets/images/leaders/group 22/Frosh pic - Sarah J.jpg';
import Amy from '../assets/images/leaders/group 22/froshphoto - Amy Hayes.jpg';
import Khalis from '../assets/images/leaders/group 22/Snowball - Khalis Khaleel.jpeg';

//group 23
import SamBaker from '../assets/images/leaders/group 23/Frosh Leader Bio - Sam Baker.jpg';
import Donya from '../assets/images/leaders/group 23/fullsizeoutput_abb - Donya Hojabr.jpeg';
import Jenny from '../assets/images/leaders/group 23/IMG_9068 - Sam Cattani.jpg';
import SamCattani from '../assets/images/leaders/group 23/Jenny Li.png';

//group 24
import Andre from '../assets/images/leaders/group 24/Andre Lee.jpg';
import DavidDesmangles from '../assets/images/leaders/group 24/FL - David Desmangles.jpg';
import Shane from '../assets/images/leaders/group 24/IMG_7711 - ShaneRankin9.jpg';
import Noam from '../assets/images/leaders/group 24/noam rabbani - Noam Rabbani.jpg';
import AnnaSymon from '../assets/images/leaders/group 24/pic - Anna Symon.png';

//group 25
import Aidan from '../assets/images/leaders/group 25/frosh_picture2018_proper - Aidan Sullivan.jpg';
import Paul from '../assets/images/leaders/group 25/index - Paul Fournier.png';
import Marine from '../assets/images/leaders/group 25/Marine F-Mouras.jpg';
import Pedro from '../assets/images/leaders/group 25/Pedro Leite.jpg';
import Zoheir from '../assets/images/leaders/group 25/Zoheir Seddiki.jpg';

//group 26
import floflo from '../assets/images/leaders/group 26/floflo - Florence Diep.jpg';
import Julian from '../assets/images/leaders/group 26/IMG_2406 - Julian Pucella.jpg';
import Ousmane from '../assets/images/leaders/group 26/Ousmane - Ousmane Baricisse.jpg';
import Vignesh from '../assets/images/leaders/group 26/Vignesh Pushparaj.jpg';


const LeaderPage = (props) => (


  <div>
    <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

   
    <div id="main">
      <section id="content" className="main">
        
      <div id = "row">



          //coords
          <div id = "group">
          <h2> Coordinators </h2> 
          </div>

        
          <div id = "coord">
            <div id = "item4">
            <img src={AlexH} style={{  }} alt="" />     
            <span id="name">Alex Hale</span> 
            </div>

            <div id = "item4">
            <img src={AnnaH} style={{  }} alt="" />     
            <span id="name">Anna H</span>
            </div> 

            <div id = "item4">
            <img src={AnnaB} style={{  }} alt="" />     
            <span id="name">Anna Bieber</span>
            </div> 

            <div id = "item4">
            <img src={Canon} style={{  }} alt="" />     
            <span id="name">Canon</span>
            </div> 

            <div id = "item4">
            <img src={David} style={{  }} alt="" />     
            <span id="name">David</span> 
            </div>

            <div id = "item4">
            <img src={Ece} style={{  }} alt="" />     
            <span id="name">Ece Pidik</span>
            </div> 

            <div id = "item4">
            <img src={Ella} style={{  }} alt="" />     
            <span id="name">Ella</span>
            </div> 

            <div id = "item4">
            <img src={Kevin} style={{  }} alt="" />     
            <span id="name">Kevin</span>
            </div> 

            <div id = "item4">
            <img src={Laurent} style={{  }} alt="" />     
            <span id="name">Laurent</span> 
            </div>

            <div id = "item4">
            <img src={Nick} style={{  }} alt="" />     
            <span id="name">Nick</span>
            </div> 

            <div id = "item4">
            <img src={Thomas} style={{  }} alt="" />     
            <span id="name">Thomas Hillyer</span>
            </div> 

            <div id = "item4">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="name">Tristan</span>
            </div> 

          </div>

        
          
          



          <div id = "group">
          <h2> Group 1 </h2> 
          </div>

        
          <div id = "item4">
            <img src={AlexM} style={{  }} alt="" />    
            <span id ="name">Alex Moreau </span>
            <span id = "homeyear">Hometown: Montreal</span>
            <span id = "homeyear">Year: U2 ECSE</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A hockey stick, a puck and whole lot of cheeeeeeese</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I'm looking forward to meeting our group and showing them what is so great about being a McGill Engineering student. Nothing beats the people you meet during Frosh, no matter the awesome event you are at!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">I know the ins and outs of Montreal and I know how to have a good time! </span>
          </div> 
          <div id = "item4">
            <img src={Lauriane} style={{  }} alt="" /> 
            <span id ="name">Lauriane C. Cossette</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunglasses, sunscreen, and a sunhat</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting all the new faces in the engineering family</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">My fanny pack runs deep</span>
          </div> 
          <div id = "item4">
            <img src={Spencer} style={{  }} alt="" /> 
            <span id ="name">Spencer Handfield</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunglasses, sunscreen, and a sunhat</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting all the new faces in the engineering family</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">My fanny pack runs deep</span>
          </div> 
          <div id = "item4">
            <img src={Shaun} style={{  }} alt="" />  
            <span id ="name">Fiona Hamilton</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunglasses, sunscreen, and a sunhat</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting all the new faces in the engineering family</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">My fanny pack runs deep</span>
          </div> 
          


          <div id = "group">
          <h2> Group 2 </h2>
          </div>

          <div id = "item4">
            <img src={Kabir} style={{  }} alt="" />    
            <span id ="name">Kabir Sethi</span> 
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item4">
            <img src={SarahF} style={{  }} alt="" /> 
            <span id ="name">Sarah Ford</span>    
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item4">
            <img src={Shaun} style={{  }} alt="" /> 
            <span id ="name">Shaun Jiji</span>    
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item4">
            <img src={Nicolas} style={{  }} alt="" />  
            <span id ="name">Nicolas Siriwardhana</span>   
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 

          <div id = "group">
          <h2> Group 3 </h2>
          </div>

          <div id = "item4">
            <img src={Lianne} style={{  }} alt="" />    
            <span id ="name">Lianne Campbell</span> 
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item4">
            <img src={Jordan} style={{  }} alt="" /> 
            <span id ="name">Jordan Legendre</span>    
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item4">
            <img src={Ahmad} style={{  }} alt="" /> 
            <span id ="name">Ahmad (AJ) Masri</span>    
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 
          <div id = "item4">
            <img src={Mike} style={{  }} alt="" />  
            <span id ="name">Mike Chan</span>   
            <span id="caption">sample bio showing that the text stays below the image so long as a word isnt way too long, but that problem most likely wont occur unless someone thinks theyre shakespeare</span>
          </div> 


          <div id = "group">
            <h2> Group 4 </h2>
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
            <span id ="name">Lee Chong Wei</span>    
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

          <div id = "group">
            <h2> Group 7 </h2>
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

          <div id = "group">
            <h2> Group 8 </h2>
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

          <div id = "group">
            <h2> Group 9 </h2>
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

          <div id = "group">
            <h2> Group 10 </h2>
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

          <div id = "group">
            <h2> Group 11</h2>
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

          <div id = "group">
            <h2> Group 12 </h2>
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

          <div id = "group">
            <h2> Group 13 </h2>
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

          <div id = "group">
            <h2> Group 14 </h2>
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

          <div id = "group">
            <h2> Group 15 </h2>
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

          <div id = "group">
            <h2> Group 16 </h2>
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

          <div id = "group">
            <h2> Group 17 </h2>
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

          <div id = "group">
            <h2> Group 18 </h2>
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

          <div id = "group">
            <h2> Group 19 </h2>
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

          <div id = "group">
            <h2> Group 20 </h2>
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

          <div id = "group">
            <h2> Group 21 </h2>
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

          <div id = "group">
            <h2> Group 22 </h2>
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

          <div id = "group">
            <h2> Group 23 </h2>
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

          <div id = "group">
            <h2> Group 24 </h2>
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

          <div id = "group">
            <h2> Group 25 </h2>
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

          <div id = "group">
            <h2> Group 26 </h2>
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



            
          </div>
    
        </section>

      </div>
    </div>
          
)

export default LeaderPage







        

    
    
        
          


          

        
      

    
  


