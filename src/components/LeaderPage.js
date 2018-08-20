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

//group 4 
import Gareth from '../assets/images/leaders/group 4/IMG_20180731_003336_723 - Gareth Price.jpg';
import DavidMasson from '../assets/images/leaders/group 4/Frosh_picture - David Masson.jpg';
import LaurieZ from '../assets/images/leaders/group 4/SquareBioPhoto - Laurie Zaccarin.jpg';
import ElieElia from '../assets/images/leaders/group 4/McMUN-Elie (1 of 1)-2 - Elie Elia.jpg';

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
import Jenny from '../assets/images/leaders/group 23/Jenny Li.png';
import SamCattani from '../assets/images/leaders/group 23/IMG_9068 - Sam Cattani.jpg';

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

          <div id = "group">
          <h2> Coordinators </h2> 
          </div>

        
          <div id = "coord">
            <div id = "item4">
            <img src={Laurent} style={{  }} alt="" />     
            <span id="name">Laurent Chenet</span>
            <span id="name">VP Internal</span> 
            </div>

            <div id = "item4">
            <img src={AlexH} style={{  }} alt="" />     
            <span id="name">Alex Hale</span>
            <span id="name">Co-Chief</span> 
            </div>

            <div id = "item4">
            <img src={David} style={{  }} alt="" />     
            <span id="name">David Ritch</span>
            <span id="name">Co-Chief</span> 
            </div>

            <div id = "item4">
            <img src={AnnaH} style={{  }} alt="" />     
            <span id="name">Anna Henley</span>
            <span id="name">Day Events</span>
            </div> 

            <div id = "item4">
            <img src={AnnaB} style={{  }} alt="" />     
            <span id="name">Anna Bieber</span>
            <span id="name">Montreal Crawl</span>
            </div> 

            <div id = "item4">
            <img src={Canon} style={{  }} alt="" />     
            <span id="name">Canon Wan Chun Wah</span>
            <span id="name">Interfaculty Events</span>
            </div> 

            <div id = "item4">
            <img src={Ece} style={{  }} alt="" />     
            <span id="name">Ece Pidik</span>
            <span id="name">Night Events</span>
            </div> 

            <div id = "item4">
            <img src={Ella} style={{  }} alt="" />     
            <span id="name">Ella Reifsnyder</span>
            <span id="name">Equity & Sustainability</span>
            </div> 

            <div id = "item4">
            <img src={Kevin} style={{  }} alt="" />     
            <span id="name">Kevin Alforque</span>
            <span id="name">Merchandise</span>
            </div> 


            <div id = "item4">
            <img src={Nick} style={{  }} alt="" />     
            <span id="name">Nick Clarke</span>
            <span id="name">Sponsorship</span>
            </div> 

            <div id = "item4">
            <img src={Thomas} style={{  }} alt="" />     
            <span id="name">Thomas Hillyer</span>
            <span id="name">Communications</span>
            </div> 

            <div id = "item4">
            <img src={Tristan} style={{  }} alt="" />     
            <span id="name">Tristan Renondin</span>
            <span id="name">Leaders & Staff</span>
            </div> 

          </div>

        
          
          

          <hr></hr>
          <div id = "group">
          <h2> Leaders </h2> 
          </div>

          <div id = "group">
          <h4> Group 1 </h4> 
          </div>

        
          <div id = "item4">
            <img src={AlexM} style={{  }} alt="" />    
            <span id ="name">Alex Moreau </span>
            <span id = "homeyear">Montreal</span>
            <span id = "homeyear">U2 ECSE</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A hockey stick, a puck and whole lot of cheeeeeeese</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I'm looking forward to meeting our group and showing them what is so great about being a McGill Engineering student. Nothing beats the people you meet during Frosh, no matter the awesome event you are at!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">I know the ins and outs of Montreal and I know how to have a good time! </span>
          </div> 

          <div id = "item4">
            <img src={Lauriane} style={{  }} alt="" /> 
            <span id="name">Lauriane C. Cossette</span>
            <span id="homeyear">no idea (Signapore?)</span>
            <span id="homeyear">U1 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Frostbite ice cream, fanny pack and crocs</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Pub crawl!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Have you ever seen me in a bad mood?</span>
          </div> 

          <div id = "item4">
            <img src={Spencer} style={{  }} alt="" /> 
            <span id ="name">Spencer Handfield</span>
            <span id = "homeyear">Montreal</span>
            <span id = "homeyear">U2 ECSE</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Everywhere I go, I bring E.N.G. E-nough water to healthily stay hydrated! N-twisted teas!! my do-G!!!</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Reconnecting with friends I haven't seen during the summer, making new friends and memories through frosh, and properly ringing in a great new school year </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">As a Montreal native, I've made myself familiar with the ins and the outs of one of the most vibrant cities in the world and as a student this past year have gained an infectious school spirit to pass on and hopefully convince incoming students to get involved and get excited about the awesome next couple of years they'll have</span>
          </div> 


          <div id = "item4">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Fiona Hamilton</span>
            <span id = "Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunglasses, sunscreen, and a sunhat</span>
            <span id ="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting all the new faces in the engineering family</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id ="caption">My fanny pack runs deep</span>
          </div> 
          


          <div id = "group">
          <h4> Group 2 </h4>
          </div>

          <div id = "item4">
            <img src={Kabir} style={{  }} alt="" />    
            <span id ="name">Kabir Sethi</span> 
            <span id="homeyear">New Delhi, India</span>
            <span id="homeyear">U3 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunglasses, sunscreen, and a sunhat</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting all the new faces in the engineering family</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">My fanny pack runs deep</span>
          </div> 
          <div id = "item4">
            <img src={SarahF} style={{  }} alt="" /> 
            <span id ="name">Sarah Ford</span>    
            <span id="homeyear">Long Island, NJ</span>
            <span id="homeyear">U3 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">a volleyball,  a volleyball net, and a robot to play volleyball with me</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I just really love matching outfits</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I know all the lyrics to Despacito</span>
          </div> 
          <div id = "item4">
            <img src={Shaun} style={{  }} alt="" /> 
            <span id ="name">Shaun Jiji</span>    
            <span id="homeyear">Hong Kong</span>
            <span id="homeyear">U2 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A juul that never dies with one unlimited mango pod, and a bottle of fireball </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">To take my froshies to chef on call at 3 am </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">cause I always come through</span>
          </div> 
          <div id = "item4">
            <img src={Nicolas} style={{  }} alt="" />  
            <span id ="name">Nicolas Siriwardhana</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U1.5 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Salt, Lime, Tequila</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day every day, Beachday Everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a PhD in drunk Froshie studies </span>
          </div> 

          <div id = "group">
          <h4> Group 3 </h4>
          </div>

          <div id = "item4">
            <img src={Lianne} style={{  }} alt="" />    
            <span id ="name">Lianne Campbell</span> 
            <span id="homeyear">Vancouver, BC</span>
            <span id="homeyear">U1 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">
A disc(frisbee for those of you who don't know), a bike, and tea</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">
All the energy and fun throughout the week!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">
I'm laughing & smiling 99% of the time</span>
          </div> 
          <div id = "item4">
            <img src={Jordan} style={{  }} alt="" /> 
            <span id ="name">Jordan Legendre</span>    
            <span id="homeyear">Middletown, CT</span>
            <span id="homeyear">U1 Bioengineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">
A good squad, my dogs, and a fire mixtape</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">
To meet all the froshies!!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">
I have SO many puns and vine references </span>
          </div> 
          <div id = "item4">
            <img src={Ahmad} style={{  }} alt="" /> 
            <span id ="name">Ahmad (AJ) Masri</span>    
            <span id="homeyear">Nabulus, Palestine</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My blue eyes white dragon (incase I get ambushed and need to duel my way out),  spongebobs greatest hits album (incase I need to start a fire), a tub of frostbite ice cream (incase I need to put out said fire)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Inspiring the next generation of Eweek coords </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Im approachable, knowledgable and always happy to help people out!</span>
          </div> 
          <div id = "item4">
            <img src={Mike} style={{  }} alt="" />  
            <span id ="name">Mike Chan</span>   
            <span id="homeyear">Toronto, Ontario</span>
            <span id="homeyear">U4 Mining Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Jordan Legendre, Lianne Campbell, and AJ Masari</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">To facilitate new friendships and EUS involvement! Seeing my old froshies' successes make me so happy and I want to keep doing that. </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm as fond of Frosh as I am food so stick with me and I'll throw in a food adventure/night for free!</span>
          </div> 


          <div id = "group">
            <h4> Group 4 </h4>
          </div>


          <div id = "item4">
            <img src={DavidMasson} style={{  }} alt="" />    
            <span id ="name">David Masson</span> 
            <span id="homeyear">Quebec City</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A reusable Blues Pub cup, a MAME survival guide and an iPod Nano containing one (1) song that would be L'alcool c'est de l'eau.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">To meet all the new first years and have a lot of fun with my co-leaders and my Froshies :)</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I am a very kind and open minded person and I always want everyone to feel included and I make sure that they are having a great time.</span>
          </div> 
          <div id = "item4">
            <img src={LaurieZ} style={{  }} alt="" /> 
            <span id ="name">Laurie Zaccarin</span>    
            <span id="homeyear">Quebec City</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A hammock, a self-filling pitcher of sangria and my cat Picasso</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The scavenger hunt was my favorite activity during Frosh when I was a Froshie, so I'm super excited to see if my group can come up with as many original ideas this year to win!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I think I would be a great leader to have as a Froshie since I am really easy going and I like to have a good time. That being said, I'm also very attentive to others and like to make sure everyone feels welcome and included.</span>
          </div> 
          <div id = "item4">
            <img src={ElieElia} style={{  }} alt="" /> 
            <span id ="name">Elie Elia</span>    
            <span id="homeyear">Cyprus/Lebanon</span>
            <span id="homeyear">U1 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Endless supply of Chef on Call, My McGill hoodie, A book of engineering chants</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The most rewarding aspect of my orientation week were the individuals I met in my Frosh group. I'm therefore super excited to meet my Froshies and hope to create new friendships that will last a lifetime. I'm also looking forward to how unaware the Froshies are of how much fun is ahead of them during this orientation week.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">As a dynamic, welcoming and respectful leader, my goal is to ease the Froshies' transitions from high school to university. I always try to maintain a positive vibe and ensure an inclusive environment where the Froshies feel comfortable and welcomed. I would really like to get to know each of my Froshies individually, become their friend and someone whom they can rely on, not only through orientation week, but throughout their first year.</span>
          </div> 
          <div id = "item4">
            <img src={Gareth} style={{  }} alt="" />  
            <span id ="name">Gareth Price</span>   
            <span id="homeyear">Aurora, Ontario</span>
            <span id="homeyear">U1 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A big ol' pup, like a hundred (100) Summers bees, and a can-do attitude.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I'm excited to meet a whole bunch of new people and show them all the dope stuff that McGill and the EUS has to offer!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Who doesn't love a bunch of cute dogs videos? I got you covered, fam</span>
          </div> 

          <div id = "group">
            <h4> Group 5 </h4>
          </div>

          <div id = "item4">
            <img src={BenjaminC} style={{  }} alt="" />    
            <span id ="name">Benjamin Carris</span> 
            <span id="homeyear">Coquitlam</span>
            <span id="homeyear">U2 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">
wilson, sunglasses,  keg</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">
beach day of course</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'll hype up the whole group together</span>
          </div> 
          <div id = "item4">
            <img src={BenjaminM} style={{  }} alt="" /> 
            <span id ="name">Benjamin Munt</span>    
            <span id="homeyear">Vancouver, BC</span>
            <span id="homeyear">U1 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My two dogs and a copy of James Stewart calculus  </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">
Showing people why I love Mcgill. </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a good work life balance where I am involved with design teams but still find time to go out and pass class. (For now at least) 
To enable screen reader support, press Ctrl+Alt+Z To learn about keyboard shortcuts, press Ctrl+slash
</span>
          </div> 
          <div id = "item4">
            <img src={Emery} style={{  }} alt="" /> 
            <span id ="name">Emery McBride Savaria</span>    
            <span id="homeyear">Boucherville, QC</span>
            <span id="homeyear">U3 Mechnical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">a bathing suit, some fresh salsa and a hammock</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting the froshies and getting them hyped for starting university</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Fun, but seems to know what he's doing and is under control</span>
          </div> 
          <div id = "item4">
            <img src={MarchOlivier} style={{  }} alt="" />  
            <span id ="name">Marc-Olivier Van Dorpe</span>   
            <span id="homeyear">Chambly, QC</span>
            <span id="homeyear">U3 Mechnical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunscreen, umbrella and some shades</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting new people and creating new memories with current and future McGill students.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I know how to have fun responsibly and can provide insight as to how the McGill experience can be enriched through programs and events offered</span>
          </div> 


          <div id = "group">
            <h4> Group 6 </h4>
          </div>

          <div id = "item5">
            <img src={Rene} style={{  }} alt="" />    
            <span id ="name">René Gagnon</span> 
            <span id="homeyear">Rouyn-Noranda</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A bunch of fireworks, popcorn to enjoy the show and a Wilson volleyball ball for good company.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Just walk around in Montreal under a nice sun with my co-leaders and the froshies!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I know how to have fun and I think I can do a great job of introducing them to McGill and Montreal.</span>
          </div> 
          <div id = "item5">
            <img src={Xavier} style={{  }} alt="" /> 
            <span id ="name">Xavier Pellemans</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A camping chair, a pink inflatable flamingo and beer (never know if there is drinkable water)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The music. </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Frosh is a great way to discover the McGill lifestyle and I'm dedicated to make sure my Froshies experience it at its best!</span>
          </div> 
          <div id = "item5">
            <img src={Olivier} style={{  }} alt="" /> 
            <span id ="name">Olivier Fortier</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Duck Tape, sunscreen and my dog</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beachday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I can show them pictures of my dog</span>
          </div> 
          <div id = "item5">
            <img src={Rebecca} style={{  }} alt="" />  
            <span id ="name">Rebecca Weill</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My dog, ojs poutine </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meet new people in the eng community</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm fun and love to dance</span>
          </div> 
          <div id = "item5">
            <img src={Stephanie} style={{  }} alt="" />  
            <span id ="name">Stéphanie Abdel Malek</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A jar of Nutella, a dog and a can of Four Loko</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BEACH DAY</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'm the craziest? Seriously, I'm a nice person to be around, always positive and caring for others.</span>
          </div> 

          <div id = "group">
            <h4> Group 7 </h4>
          </div>

          <div id = "item5">
            <img src={Artsiom} style={{  }} alt="" />    
            <span id ="name">Artsiom Skliar</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A hammock, sunglasses, and a (few) bottle(s) of rum</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BEACH DAY EVERY DAY</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because you can't spell Party without Arty (and I'm a super responsible individual with lots of experience in emergency response and public relations)</span>
          </div> 
          <div id = "item5">
            <img src={Andrea} style={{  }} alt="" /> 
            <span id ="name">Andrea Huerta</span>    
            <span id="homeyear">Lima, Peru</span>
            <span id="homeyear">U3 Materials Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">speakers, my doggo, treats for my doggo </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">b e a c h   d a y</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I don't wanna brag but i'm like super fun, I also look 18 and I want to think that makes me approachable</span>
          </div> 
          <div id = "item5">
            <img src={Luc} style={{  }} alt="" /> 
            <span id ="name">Luc Plamondon</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Bugspray, a soccer ball and a grill.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Pub crawl !!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I will always have gum or mints on me</span>
          </div> 
          <div id = "item5">
            <img src={Ethan} style={{  }} alt="" />  
            <span id ="name">Ethan Lague</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 Eletrical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A speaker, an aux cord, and any device (with) Body by Loud Luxury on it.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Showing the froshies how fun Mcgill can be if they put themselves out there and make friends. And Beach Day.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm an experienced Montrealer so I can give tons of pointers on the best food spots, party spots, or whatever they're looking for. </span>
          </div> 
          <div id = "item5">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Sebastien Quinn</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U1.5 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Salt, Lime, Tequila</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day every day, Beachday Everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a PhD in drunk Froshie studies </span>
          </div> 

          <div id = "group">
            <h4> Group 8 </h4>
          </div>

          <div id = "item5">
            <img src={Mathew} style={{  }} alt="" />    
            <span id ="name">Mathew Kfouri</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A pineapple pizza, a magic lamp and a box of 1000 ball bearings </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">TOGA! TOGA!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have cheesy taste in music and know my way around the city </span>
          </div> 
          <div id = "item5">
            <img src={AlexSassano} style={{  }} alt="" /> 
            <span id ="name">Alex Sassano</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U4 Mining Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Anime body pillow,  grapefruit, rum ham</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">(blacking out at) beach day</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I always keep a shower kit in my fanny pack</span>
          </div> 
          <div id = "item5">
            <img src={Massy} style={{  }} alt="" /> 
            <span id ="name">Massy Mahamli</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">my camera, a transat and cheese</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Everything!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'm the plug in all things software and I'll make sure you have the time of your life, also i'll take mad cute pics of you :)</span>
          </div> 
          <div id = "item5">
            <img src={Elijah} style={{  }} alt="" />  
            <span id ="name">Elijah Saragosa</span>   
            <span id="homeyear">Saragosa</span>
            <span id="homeyear">U4 Mining Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Some of Smirnoff Ice (to prank the other castaways), A solar powered portable DVD player and the boxset of some very long TV show</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Day</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I try my best to ensure that everyone feels included and is having fun</span>
          </div> 
          <div id = "item5">
            <img src={Owen} style={{  }} alt="" />  
            <span id ="name">Owen Quinn</span>   
            <span id="homeyear">Ottawa, ON</span>
            <span id="homeyear">U1 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A giant inflatable duck (for lounging purposes only), a hammock, a speaker (for jamming purposes only)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Getting to hang more with rad engineers</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">"You are the single most entertaining person on this side of the planet" - my coworker sitting next to me</span>
          </div> 

          <div id = "group">
            <h4> Group 9 </h4>
          </div>

          <div id = "item5">
            <img src={Brent} style={{  }} alt="" />    
            <span id ="name">Brent Coutts</span> 
            <span id="homeyear">Vancouver, BC</span>
            <span id="homeyear">U4 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Bow, arrow, tightrope.... walk to mainland #engineering</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Breakfast "picnic" before beach day</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Like a waiter, you could say I bring a lot to the table.... Having frosh led before, I know how to make the most out of the week and the start of your McGill careers! :) </span>
          </div> 
          <div id = "item5">
            <img src={Ameer} style={{  }} alt="" /> 
            <span id ="name">Ameer Nizami</span>    
            <span id="homeyear">Saint-Lambert</span>
            <span id="homeyear">U4 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A mirror to flag for escape, a sponge and a starfish to make up my own spongebob episodes.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Watching all these frehsmen try to handle liquor (if they want to). A true learning experience.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I've been balling out here for over 3 years now so I have a deep understanding and experience of the Mcgill engineering ecosystem and can provide a thorough introduction to their new campus and how to best prepare for their next 4-5 years. </span>
          </div> 
          <div id = "item5">
            <img src={Delwyn} style={{  }} alt="" /> 
            <span id ="name">Delwyn Yit</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U4 Materials Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Pool mattress, Water Skis, BE(v)ER(age)S</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Day!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Being born and raised in Montreal me gives a slight advantage over the little tips & tricks around the city! Also because Beach day!</span>
          </div> 
          <div id = "item5">
            <img src={MichaelLi} style={{  }} alt="" />  
            <span id ="name">Michael Li Fraine</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U4 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Surf Board, Bottle of Rum, Wilson</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The laughs, the memories and all around craziness with awesome people </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Cause I know how to have a good time and always got their back.</span>
          </div> 
          <div id = "item5">
            <img src={EmmaFerrabee} style={{  }} alt="" />  
            <span id ="name">Emma Ferrabee</span>   
            <span id="homeyear">London</span>
            <span id="homeyear">U3 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">some way of making fries, craft supplies (!!!) and a copy of every desert island discs, just for like. sympathetic company. </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Wearing the same shirt for three days!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I plan intricate breakfast picnics </span>
          </div> 

          <div id = "group">
            <h4> Group 10 </h4>
          </div>

          <div id = "item5">
            <img src={Mat} style={{  }} alt="" />    
            <span id ="name">Mathieu Njoo</span> 
            <span id="homeyear">Ottawa, ON</span>
            <span id="homeyear">U3 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">"Vector Mechanics for Engineers, 10th Edition" for fire, spaghetti to build a bridge, dry socks.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Chill night</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Proud advocate of 2AM food runs</span>
          </div> 
          <div id = "item5">
            <img src={Francois} style={{  }} alt="" /> 
            <span id ="name">Francois Eliott Rousseau</span>    
            <span id="homeyear">Hong Kong</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">McGill Id card, Math 133 Syllabus an one Domino's Discount coupon </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Scavenger Hunt </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Apparently I'm funny while wearing a fanny pack</span>
          </div> 
          <div id = "item5">
            <img src={Cedric} style={{  }} alt="" /> 
            <span id ="name">Cedric Welt</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Solar Powered Speaker, soccer ball, a doggo</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Day!! and being able to have fun and show all the new froshies all the fun mcgill has to offer!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I will be responsible and never force anything onto anyone. I'll also listen to anything my froshie asks and help them every time. I'll also be the funnest leader to be around!!</span>
          </div> 
          <div id = "item5">
            <img src={Laurence} style={{  }} alt="" />  
            <span id ="name">Laurence Peinturier</span>   
            <span id="homeyear">Quimper, France</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Une baguette, une bouteille de vin et un bon Comté</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BeAcH DaY.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm 5 feet tall...They can rest their elbows on my head if they feel tired...</span>
          </div> 
          <div id = "item5">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Ali Shobeiri</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U1.5 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Salt, Lime, Tequila</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day every day, Beachday Everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a PhD in drunk Froshie studies </span>
          </div> 

          <div id = "group">
            <h4> Group 11</h4>
          </div>

          <div id = "item4">
            <img src={MarieClaire} style={{  }} alt="" />    
            <span id ="name">Marie-Claire Hamel</span> 
            <span id="homeyear">Boucherville (B-TOWN)</span>
            <span id="homeyear">U4 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">my bed, chocolate and off to kill mosquitos</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Group rallies because they are often more fun than the actual party and that's where you meet so many beautiful people (heart) also, BEACH DAY !!!!!!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'll teach you life bruh. For realz, i keep my group entertain, I'm always there for my froshies and i love dogs</span>
          </div> 
          <div id = "item4">
            <img src={Thierry} style={{  }} alt="" /> 
            <span id ="name">Thierry Pichette</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U4 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Duct tape, a giant 6ft water baloon for cussion and a pair of shades</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting new awesome people</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Cool vibes, no judgment and soo much hype!</span>
          </div> 
          <div id = "item4">
            <img src={Maxence} style={{  }} alt="" /> 
            <span id ="name">Maxence Frenette</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U4 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My hammock, a watermelon and some jello (for the watermelon).</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The Montreal Crawl !</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because we'll have the best group name !</span>
          </div> 
          <div id = "item4">
            <img src={TristanBouchard} style={{  }} alt="" />  
            <span id ="name">Tristan Bouchard</span>   
            <span id="homeyear">Longueuil</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Uncle Ben's Brocoli Cheddar Minute Rice, a surfboard and my Ukulele.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">TOGA</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm always pretty hyped and can always hype people!</span>
          </div> 

          <div id = "group">
            <h4> Group 12 </h4>
          </div>

          <div id = "item5">
            <img src={Cheng} style={{  }} alt="" />    
            <span id ="name">Cheng Lin</span> 
            <span id="homeyear">Toronto, ON</span>
            <span id="homeyear">U1 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Hiking boots, a good book, soccer ball</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Making new friends!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I know I'll try my best to create a fun and inclusive four days. Not only do I love engineering, I also love music, social issues, non-engineering extracurriculars--the list goes on. As a result, I'm always happy to strike up a conversation with new people! By being open and approachable, I hope my Froshies will feel comfortable and supported, both during and after Frosh.</span>
          </div> 
          <div id = "item5">
            <img src={AlexGruenwald} style={{  }} alt="" /> 
            <span id ="name">Alex Gruenwald</span>    
            <span id="homeyear">Brisbane, Australia</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Toilet, toilet paper, up to date newspaper</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting such a diverse number of people and the EVENTS</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am always smiling and exude a positive attitude. I love to have fun and be immature sometimes; something some people might relate to. Always make sure everyone is involved and no one is left out</span>
          </div> 
          <div id = "item5">
            <img src={Jonathan} style={{  }} alt="" /> 
            <span id ="name">Jonathan Ong</span>    
            <span id="homeyear">Lancaster, Pennsylvania</span>
            <span id="homeyear">U1 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">my Birkenstocks, Secret Aardvark Habanero Hot Sauce, and Charmin Ultra Strong Toilet Paper</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The responsibility of giving froshies food recommendations and the colored Frosh shirts</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I know where the best Asian food is in Montreal, and I have possibly helpful opinions on basically everything!</span>
          </div> 
          <div id = "item5">
            <img src={Preyansh} style={{  }} alt="" />  
            <span id ="name">Preyansh Kaushik</span>   
            <span id="homeyear">Kigali, Rwanda</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">netflix, a crate of 1664, and hummus</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">the chef on call stop</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">for an inclusive fun-filled time, cool pics for ig, and tons of conversation</span>
          </div> 
          <div id = "item5">
            <img src={K} style={{  }} alt="" />  
            <span id ="name">Kenji Marshall</span>   
            <span id="homeyear">Burlington</span>
            <span id="homeyear">U1 Bioengineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Solar powered boombox, collection of mood-setting mixtapes, Natalie Portman</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I really want a fanny pack, to not sleep through beach day, and to bond with some froshies!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'll do whatever it takes to have a good time, whether that's singing, dancing, relaxing, or talking about love, music, and school. I want to make frosh awesome for everybody.</span>
          </div> 

          <div id = "group">
            <h4> Group 13 </h4>
          </div>

          <div id = "item5">
            <img src={RyanZel} style={{  }} alt="" />    
            <span id ="name">Ryan Zelnicker</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My laptop, a hammock and an infinite supply of plumber's pockets</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">PUB CRAWL!y</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'll make sure that they have the best and most memorable 4 days of the whole school year</span>
          </div> 
          <div id = "item5">
            <img src={Tal} style={{  }} alt="" /> 
            <span id ="name">Tal Abravanel</span>    
            <span id="homeyear">Istanbul, Turkey</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A pillow, a sword and a metal detector</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">meeting new people and the fun events waiting for us</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">rather than being their leader I will try to become friends with them and will give them an opportunity of meeting other first years from other faculties as well through my friends from other faculties who are frosh leading</span>
          </div> 
          <div id = "item5">
            <img src={Michel} style={{  }} alt="" /> 
            <span id ="name">Michel Abdel Nour</span>    
            <span id="homeyear">Beirut</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">mirror, fireworks and a lot of drinkable water</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Dayyy</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am super friendly and easy to talk to</span>
          </div> 
          <div id = "item5">
            <img src={Joel} style={{  }} alt="" />  
            <span id ="name">Joel Kogan</span>   
            <span id="homeyear">Cote Saint-Luc</span>
            <span id="homeyear">U2 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Fishing net, matches, deck of cards</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I'm most excited about meeting new people and being an integral part to froshies' introductions to McGill.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'm fun and put others before myself</span>
          </div> 
          <div id = "item5">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Judy Park</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U1.5 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Salt, Lime, Tequila</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day every day, Beachday Everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a PhD in drunk Froshie studies </span>
          </div> 

          <div id = "group">
            <h4> Group 14 </h4>
          </div>


          <div id = "item4">
            <img src={eleri} style={{  }} alt="" />    
            <span id ="name">Eleri Moynagh</span> 
            <span id="homeyear">Toronto</span>
            <span id="homeyear">U4 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A hammock, puppies, and beer on tap</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">To have some FUN in the SUN</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Having frosh led (more than) a few times before, by the end of frosh I'm not just your leader but your friend too!! I will also be showing off an extensive bucket hat collection - and if you like to ski/snowboard, we'll get along just fine. </span>
          </div> 
          <div id = "item4">
            <img src={Ian} style={{  }} alt="" /> 
            <span id ="name">Ian Gauthier</span>    
            <span id="homeyear">Longmeadow MA</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Three bottles of sunscreen. I need em tbh</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I'm always ecstatic to meet the new froshies and make some friendships along the way.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm excited and eager to jump into frosh. You will be hard pressed to find someone as hyped as me for the week.</span>
          </div> 
          <div id = "item4">
            <img src={AlexScheffel} style={{  }} alt="" /> 
            <span id ="name">Alex Scheffel</span>    
            <span id="homeyear">The city that fun forgot (O-Town)</span>
            <span id="homeyear">U3 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Probably 3 of the elevators from Burnside</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting my group!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I can maybe probably hopefully teach them a thing or two about the EUS</span>
          </div> 
          <div id = "item4">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Sammy Ozere</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U1.5 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Salt, Lime, Tequila</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day every day, Beachday Everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a PhD in drunk Froshie studies </span>
          </div> 

          <div id = "group">
            <h4> Group 15 </h4>
          </div>

          <div id = "item5">
            <img src={Vassil} style={{  }} alt="" />    
            <span id ="name">Vassil Kroumov</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My family, a flamethrower, an axe </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I am most excited to have fun with the froshies and participate to all the activities that were so fun during Frosh 2017 (Beach Club, Toga party, Pub Crawl, etc.) while remembering these nights this year!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am a passionate and really outgoing person which will always make everybody feel accepted and comfortable in a group!</span>
          </div> 
          <div id = "item5">
            <img src={annejulie} style={{  }} alt="" /> 
            <span id ="name">Anne-Julie Côté</span>    
            <span id="homeyear">Quebec City</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A big bag of popcorn, a good ole pair of crocs and hella sunscreen</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting Froshies and the scavenger hunt</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'm nice, I always have water and hand sanitizer on me, plus I'm good at learning names :)</span>
          </div> 
          <div id = "item5">
            <img src={Emeric} style={{  }} alt="" /> 
            <span id ="name">Emeric Bernier</span>    
            <span id="homeyear">LECLERCVILLE, QC</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">DEODORANT, MY MOM (STILL GOTTA COOK AND DO LAUNDRY SMH) AND A JET SKI</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">MEETING PEEPS</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">ALWAYS ENERGETIC AND I KINDA LIKE PROBLEM SOLVING</span>
          </div> 
          <div id = "item5">
            <img src={Lara} style={{  }} alt="" />  
            <span id ="name">Lara Ghanem</span>   
            <span id="homeyear">Jounieh (Lebanon)</span>
            <span id="homeyear">U1 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Beer friends and more beer</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am always hyped</span>
          </div> 
          <div id = "item5">
            <img src={Lara} style={{  }} alt="" />  
            <span id ="name">Mario Lipari</span>   
            <span id="homeyear">Varennes, Québec</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Duck tape, duck tape and more duck tape (I can make myself a boat)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BEACH DAY EVERYDAY</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I am ready to have fun with them and to take care of them if they go too hard. </span>
          </div> 

          <div id = "group">
            <h4> Group 16 </h4>
          </div>

          <div id = "item5">
            <img src={Reda} style={{  }} alt="" />    
            <span id ="name">Mohamed Reda El Khili</span> 
            <span id="homeyear">Rabat, Morocco</span>
            <span id="homeyear">U3 ECSE/span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Mayonnaise, Drake's last album and a soccer ball</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Day !</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'm super funny !! and of course responsible. I am also a fourth year student which means I have a lot of advices to give them.</span>
          </span>
          </div> 


          <div id = "item5">
            <img src={Isabelle} style={{  }} alt="" /> 
            <span id ="name">Isabelle del Mundo</span>    
            <span id="homeyear">Trophy Club, TX. </span>
            <span id="homeyear">U4 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">sun screen, a wifi hotspot, and a smart speaker</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">To get all the new students excited about the engineering community! </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I can tell you how to not make the same mistakes I did in my first year :) </span>
          </div> 

          <div id = "item5">
            <img src={Nima} style={{  }} alt="" /> 
            <span id ="name">Nima Chattani</span>    
            <span id="homeyear">San Diego, CA</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My laptop, Vanilla Almond Butter, and season 5 of silicon valley </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting new froshies!! </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm super committed to making sure every froshie is having a good experience and feels included! </span>
          </div>

          <div id = "item5">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Charles Brana</span>   
            <span id="homeyear">Le Déron</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Sunglasses, a hat and a volleyball ;)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The fake test</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I am fun but serious when needes</span>
          </div> 

          <div id = "item5">
            <img src={Oliver} style={{  }} alt="" />  
            <span id ="name">Oliver Verzani</span>   
            <span id="homeyear">Boston</span>
            <span id="homeyear">Management 2019</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">a deck of cards, a blow up unicorn floatie, a straw for the coconuts</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Getting the chance to learn about all the places/cultures my froshies came from.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I will not only lead a froshie through orientation, I will continue to help guide them them through the beginning of their entire McGill experience.</span>
          </div> 

          <div id = "group">
            <h4> Group 17 </h4>
          </div>

          <div id = "item4">I will not only lead a froshie through orientation, I will continue to help guide them them through the beginning of their entire McGill experience.To enable screen reader support, press Ctrl+Alt+Z To learn about keyboard shortcuts, press Ctrl+slash

            <img src={Kelly} style={{  }} alt="" />    
            <span id ="name">Kelly Ma</span> 
            <span id="homeyear">Vancouver, BC</span>
            <span id="homeyear">U1 ECSE (previously U1 BIEN 😢)</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">1. Settlers of Catan WITH extension packs 2. Three floofs 3. Food for my three floofs</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Frosh FOOD 🍽</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm a great listener and I'm very open-minded!</span>
          </div> 
          <div id = "item4">
            <img src={Cara} style={{  }} alt="" /> 
            <span id ="name">Cara Zhang</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">electrified bug killing racket, tiger balm and alcohol (cuz better drunk stranded than sober stranded)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BEACH CLUB!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I'm a very hype but also considerate person as a whole who loves to have fun</span>
          </div> 
          <div id = "item4">
            <img src={Christos} style={{  }} alt="" /> 
            <span id ="name">Christos Cunning</span>    
            <span id="homeyear">Vancouver BC</span>
            <span id="homeyear">U1 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A years supply of bagels (st. viateur's of course), smoked salmon , and cream cheese.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">To introduce all my froshies to the many awesome things McGill and Montreal have to offer!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">So I can recommend them all the best bagel spots in Montreal!</span>
          </div> 
          <div id = "item4">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Paul Hooley</span>   
            <span id="homeyear">Milan</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Dog, Frisbee, Water Filter</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Im approachable, easy-going and nice</span>
          </div> 

          <div id = "group">
            <h4> Group 18 </h4>
          </div>

          <div id = "item4">
            <img src={AndiCamille} style={{  }} alt="" />    
            <span id ="name">Andi Bakti</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Survival for Dummies,  a copy of The Room and any current president as leverage for when I want to be saved</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Seeing how much my froshies will change from their first day to their last</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">If you enjoy horrendous attempts at comedy and flamboyant dance moves then I'll be the ideal leader for you!</span>
          </div> 
          <div id = "item4">
            <img src={RosalieGuay} style={{  }} alt="" /> 
            <span id ="name">Rosalie Guay</span>    
            <span id="homeyear">Saint-Georges</span>
            <span id="homeyear">U3 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">...</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">people</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because i am funnyyy</span>
          </div> 
          <div id = "item4">
            <img src={AlexanderTorabi} style={{  }} alt="" /> 
            <span id ="name">Alexander Torabi</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">AirPods, My American Express since they say "don't leave home without it.", Fishing pole</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting my forshies and giving them the best time of their life before they start McGill for the first time</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Living in Montreal my whole life, I have discovered this city and all the beautiful things it has to offer, and cannot wait to share it all with them.</span>
          </div> 
          <div id = "item4">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Karine Flamand</span>   
            <span id="homeyear">Leawood, Kansas, USA</span>
            <span id="homeyear">Super Senior Civil</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">60 SPF Sunscreen, a polar bear, and a volleyball </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">New friends!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I ask myself this everyday</span>
          </div> 

          <div id = "group">
            <h4> Group 19 </h4>
          </div>

          <div id = "item4">
            <img src={KevinCole} style={{  }} alt="" />    
            <span id ="name">Kevin Cole</span> 
            <span id="homeyear">Leawood, Kansas, USA</span>
            <span id="homeyear">Super Senior Civil</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">60 SPF Sunscreen, a polar bear, and a volleyball </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">New friends!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I ask myself this everyday</span>
          </div> 
          </div> 
          <div id = "item4">
            <img src={Nicole} style={{  }} alt="" /> 
            <span id ="name">Nicole Thoma</span>    
            <span id="homeyear">Boston, Massachusetts</span>
            <span id="homeyear">U1 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A wii, the wii game "Just Dance", and peanut butter</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Dancing to some jams with all my new froshie friends</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I am fun and welcoming and just experienced frosh and my first year of uni so I am full of advice and experience that I want to share!!</span>
          </div> 
          <div id = "item4">
            <img src={Amanda} style={{  }} alt="" /> 
            <span id ="name">Amanda Forsans</span>    
            <span id="homeyear">Long Lake, Minnesota</span>
            <span id="homeyear">U2 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A keg, 5 good friends and a disco ball</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Showing my love for my school to incoming students</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm a welcoming and easy person to talk to</span>
          </div> 
          <div id = "item4">
            <img src={Will} style={{  }} alt="" />  
            <span id ="name">Will Connors</span>   
            <span id="homeyear">Chester, Nova Scotia</span>
            <span id="homeyear">U3 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Surfboard, dancing shoes, and a lavender suit</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The opportunity to give a warm welcome to all of the beautiful new faces at McGill.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">My priority is that everyone has fun and meets their potential university best friends. I am happy to vibe at any level of energy to help everyone be comfortable in their new environment.</span>
          </div> 

          <div id = "group">
            <h4> Group 20 </h4>
          </div>

         <div id = "item4">
            <img src={Sydney} style={{  }} alt="" />    
            <span id ="name">Sydney Netto</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">case of 24, some basha sandwiches, a blanket</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">getting the froshies to love mcgill</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">BECAUSE IM READY TO LEAD THEM TO THE BEST WEEKEND EVER</span>
          </div> 
          <div id = "item4">
            <img src={JuliaR} style={{  }} alt="" /> 
            <span id ="name">Julia Rafferty</span>    
            <span id="homeyear">San Francisco</span>
            <span id="homeyear">U1 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">3 kilos of Swedish Fish (better nutrition than ocean fish), a solar powered freezer full of Frostbite and a crate of rainbow drink umbrellas. </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meet the incoming Engineers, explore Montreal</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Friendly, inclusive, knowledgeable, prepared, will shave head for the Scunt?</span>
          </div> 
          <div id = "item4">
            <img src={Alice} style={{  }} alt="" /> 
            <span id ="name">Alice Lemay</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Architecture</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A Nintendo DS, a nail file and a mirror to not be too lonely)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BEACH DAY EVERY DAY</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Im pretttyyy fun</span>
          </div> 
          <div id = "item4">
            <img src={NicolasBieber} style={{  }} alt="" />  
            <span id ="name">Nicolas Bieber</span>   
            <span id="homeyear">Oslo</span>
            <span id="homeyear">U1 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A lot of lego, balloons, and duct tape</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I want my Froshies to have fun, so I'll take care of them:)</span>
          </div> 

          <div id = "group">
            <h4> Group 21 </h4>
          </div>

          <div id = "item4">
            <img src={Traven} style={{  }} alt="" />    
            <span id ="name">Traven Blaney</span> 
            <span id="homeyear">White Rock, BC</span>
            <span id="homeyear">U3 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A pet monkey to bring me fruit all day, Batman, and 2 water guns (one for me, one for the monkey)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Pub Crawl to show the Froshies how fun Montreal is.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm easy going and vow to make sure all my Froshies stay hydrated. I was also captain of my 3rd grade soccer team so</span>
          </div> 
          <div id = "item4">
            <img src={RyanWong} style={{  }} alt="" /> 
            <span id ="name">Ryan Wong</span>    
            <span id="homeyear">Vancouver, BC</span>
            <span id="homeyear">U2 Materials Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">My camera, a lifetime supply of dynamite sushi rolls, and a Bluetooth speaker with Bohemian Rhapsody – by Queen playing.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting my froshies and having fun with them on pub crawl.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">This is my third year frosh leading; can provide the ultimate frosh survival guide. And I love meeting new people and I am easy going.</span>
          </div> 
          <div id = "item4">
            <img src={Denise} style={{  }} alt="" /> 
            <span id ="name">Denise Bridges</span>    
            <span id="homeyear">Oakville, ON</span>
            <span id="homeyear">U3 Materials Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A golden retriever, a lifetime supply of coffee, and a unicorn floatation device </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Pub crawl (10/10 recommend) and all the fun in the sun </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm not just any frosh mom, I'm a cool frosh mom! </span>
          </div> 
          <div id = "item4">
            <img src={Julia} style={{  }} alt="" />  
            <span id ="name">Julia Elson</span>   
            <span id="homeyear">Vancouver, BC</span>
            <span id="homeyear">U3 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">MY VITAMIX legit the most life-changing blender. Now I can make delicious smoothies with island fruits!!! Then I’ll need sunscreen because I even burn with it on sometimes :( finally I’ll need a companion so I won’t get bored, so probably Tupac. </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">BEACH DAY EVERY DAY!!! Lol jk probably getting to show the froshies how amazing Montreal is as a city to live in as a student!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I’m a friendly introvert! I know what it’s like to be a wallflower or shy during frosh, because I’ve been there! Whatever your personality, I’ll do my best to make sure everyone has a great time and feels safe and included. </span>
          </div> 

          <div id = "group">
            <h4> Group 22 </h4>
          </div>

          <div id = "item4">
            <img src={Amy} style={{  }} alt="" />    
            <span id ="name">Amy Hayes</span> 
            <span id="homeyear">Timmins ON</span>
            <span id="homeyear">U2 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Perry's Chemical Engineers' Handbook, Transport Processes and Unit Operations, and of course my handy steam table.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Scouting for froshies to join McGill Formula Electric #BestDesignTeam #LikeUsOnFacebook</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm not a regular mom, I'm a cool mom.</span>
          </div> 
          <div id = "item4">
            <img src={Khalis} style={{  }} alt="" /> 
            <span id ="name">Khalis Khaleel</span>    
            <span id="homeyear">Colombo, Sri Lanka</span>
            <span id="homeyear">U1 Materials Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">McGill ID, sunscreen and a 200 pcs Timbits™ box for nutrition.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting new people!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Friendly and Approachable 24/7</span>
          </div> 
          <div id = "item4">
            <img src={Danny} style={{  }} alt="" /> 
            <span id ="name">Danny Amon</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 Bioresource</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Spotify premium, a hammock and a volleyball </span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Insert corny line about meeting new friends</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Cuz I'm a very decent person</span>
          </div> 
          <div id = "item4">
            <img src={SarahJ} style={{  }} alt="" />  
            <span id ="name">Sarah Jurchuk</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Bioengineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Lifetime supply of chocolate, a pillow, and my favorite shampoo and conditioner</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Pub Crawl</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I always have snacks!!</span>
          </div> 

          <div id = "group">
            <h4> Group 23 </h4>
          </div>

          <div id = "item4">
            <img src={SamBaker} style={{  }} alt="" />    
            <span id ="name">Sam Baker</span> 
            <span id="homeyear">Calgary, AB</span>
            <span id="homeyear">U2 Bioengineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">All 9 seasons of The Office, my cowboy hat, and an accordion.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">It sounds like this year we will have Beach Day every day!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">My 10 second Nalgene water chug #hydrationissexy</span>
          </div> 
          <div id = "item4">
            <img src={Jenny} style={{  }} alt="" /> 
            <span id ="name">Jenny Li</span>    
            <span id="homeyear">Abbotsford, BC</span>
            <span id="homeyear">U2 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">snorkel gear, tanning oil and a jug of pina colada</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">pub crawl!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm REALLY responsible (especially during pub crawl)</span>
          </div> 
          <div id = "item4">
            <img src={Tristan} style={{  }} alt="" /> 
            <span id ="name">Sam Cattani</span>    
            <span id="homeyear">Winnipeg</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">3 dogs</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Pub crawl!!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'll make you drink water (pls stay hydrated)</span>
          </div> 
          <div id = "item4">
            <img src={Donya} style={{  }} alt="" />  
            <span id ="name">Donya Hojabr</span>   
            <span id="homeyear">Kingston, ON</span>
            <span id="homeyear">U2 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Vua tofu sandwich, a toonie (for 3 samosas, hoping there's a sale) and Jenny Li</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">I'm most excited to show all the Froshies how awesome the engineering community is at McGill</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I've mastered the art of icebreakers  </span>
          </div> 

          <div id = "group">
            <h4> Group 24 </h4>
          </div>

          <div id = "item5">
            <img src={Noam} style={{  }} alt="" />    
            <span id ="name">Noam Rabbani</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U4 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A mask, fins and a snorkel so that I can snorkel my last days away</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The atmosphere during orientation week because it's amazing</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I know about a place to eat for free on campus and I will only tell my froshies about it. No one else. Ever.</span>
          </div> 
          <div id = "item5">
            <img src={Shane} style={{  }} alt="" /> 
            <span id ="name">Shane Rankin</span>    
            <span id="homeyear">Ottawa, ON</span>
            <span id="homeyear">U3 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Catan, 5x5 Rubik's Cube, Spikeball</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Day! Bus ride especially haha gets wild</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm very approachable and always looking for the next fun thing to do!</span>
          </div> 
          <div id = "item5">
            <img src={Andre} style={{  }} alt="" /> 
            <span id ="name">Andre Lee</span>    
            <span id="homeyear">Vancouver</span>
            <span id="homeyear">U3 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">definitely my 3 other cO-lEaDErs</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Drinking H2O</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am easy to talk to </span>
          </div> 
          <div id = "item5">
            <img src={AnnaSymon} style={{  }} alt="" />  
            <span id ="name">Anna Symon</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">David, Lara and Anne-Julie</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">meeting my froshies</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Im the coolest</span>
          </div> 
          <div id = "item5">
            <img src={DavidDesmangles} style={{  }} alt="" />  
            <span id ="name">David Desmangles</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">SAFTB flag, Tarps for a slip n' slide, a Rasta hat.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Sharing an exciting week with new friends before the semester starts.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'm the hype man they didn't know they needed</span>
          </div> 

          <div id = "group">
            <h4> Group 25 </h4>
          </div>

          <div id = "item5">
            <img src={Aidan} style={{  }} alt="" />    
            <span id ="name">Aidan Sullivan</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">2 African swallows, some string, and a coconut</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting cool new people and showing them where the good times are</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Cause I want people to be happy, and my friends think I'm cool</span>
          </div> 
          <div id = "item5">
            <img src={Zoheir} style={{  }} alt="" /> 
            <span id ="name">Zoheir Seddiki</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">Materials U3 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Beyoncé, Kelly and Michelle singing "Survivor"</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach Day !!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am both a hype man and a mom friend</span>
          </div> 
          <div id = "item5">
            <img src={Marine} style={{  }} alt="" /> 
            <span id ="name">Marine Fitsch-Mouras</span>    
            <span id="homeyear">Strasbourg, France</span>
            <span id="homeyear">U3 Chemical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A bluetooth speaker, a deck of cards and a hammock</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting my froshies</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because we will be the nicest, hypest, funnest (we wil make it a word) group of all</span>
          </div> 
          <div id = "item5">
            <img src={Paul} style={{  }} alt="" />  
            <span id ="name">Paul Fournier</span>   
            <span id="homeyear">Paris</span>
            <span id="homeyear">ECSE U3</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Nutella, nutella and more nutella !</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Getting to show Montreal and McGill to freshmen.</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Because I was a boyscout and I know all about survival on deserted island.</span>
          </div> 
          <div id = "item5">
            <img src={Pedro} style={{  }} alt="" />  
            <span id ="name">Pedro Leite</span>   
            <span id="homeyear">Sao Paulo, Brazil</span>
            <span id="homeyear">U4 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Definitely some swim trunks, a football, and some beer :)</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting all the new faces</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">Did you know I can eat 1 pound of hummus in under 3 min?</span>
          </div> 

          <div id = "group">
            <h4> Group 26 </h4>
          </div>

          <div id = "item5">
            <img src={floflo} style={{  }} alt="" />    
            <span id ="name">Florence Diep</span> 
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U3 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">The tallest ladder, the longest extendable grabber and coffee beans because I'm a smol person who can't live without coffee</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Meeting Froshies and telling them about the cool stuff at McGill! Day events is also a ~fantastic~ time, and looking forward to making the best memories!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I'll always be available to lend an ear with open arms and to help you. There's always a way to make Frosh fun and I can definitely show you the way!</span>
          </div> 
          <div id = "item5">
            <img src={Vignesh} style={{  }} alt="" /> 
            <span id ="name">Vignesh Pushparaj</span>    
            <span id="homeyear">Colombo, Sri Lanka</span>
            <span id="homeyear">U3 Mechanical Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Tres doggos</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">beach day 🏖️</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have many dank memes.</span>
          </div> 
          <div id = "item5">
            <img src={Julian} style={{  }} alt="" /> 
            <span id ="name">Julian Pucella</span>    
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U2 Civil Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A book I won't read (will probably double as a pillow), SPF 100, and the knowledge that the mitochondria is the powerhouse of the cell.</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">The chance to meet countless people in my faculty/school who share the same interests as me. Also I am excited for Beach day, because I never had the chance to attend it during my own frosh. </span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I am also newly admitted student to the Faculty of Engineering, so it'll fun to experience the downtown community and culture with other new students. As well frosh was such a memorable time in my first year, so I hope to replicate the same for all of my froshies by creating a fun, inclusive environment. </span>
          </div> 
          <div id = "item5">
            <img src={Ousmane} style={{  }} alt="" />  
            <span id ="name">Ousmane Baricisse</span>   
            <span id="homeyear">Benin</span>
            <span id="homeyear">U1 ECSE</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">A Soccer ball, clits, and definitely water!!!</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">spend the week exploring the Campus and montreal while, most importantly, having fun!!!</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I will try to create a friendly environment where every students get involved in frosh activities while the lots of fun as well as good and memorable times.</span>
          </div>  
          <div id = "item5">
            <img src={Tristan} style={{  }} alt="" />  
            <span id ="name">Charbel Saade</span>   
            <span id="homeyear">Montreal</span>
            <span id="homeyear">U1.5 Engineering</span>
            <span id="Q1"> What 3 things would you bring to a desert island?</span>
            <span id="caption">Salt, Lime, Tequila</span>
            <span id="Q1">What are you most excited about for Frosh?</span>
            <span id="caption">Beach day every day, Beachday Everyday</span>
            <span id="Q1">Why would a Froshie want you as their leader?</span>
            <span id="caption">I have a PhD in drunk Froshie studies </span>
          </div>   



            
        
    
        </section>

      </div>
    </div>
          
)

export default LeaderPage







        

    
    
        
          


          

        
      

    
  


