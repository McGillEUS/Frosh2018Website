import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderFaq from '../components/HeaderFaq'
import pic04 from '../assets/images/pic04.jpg'

class Faq extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderFaq />
        <div id="main">
          <section id="content" className="main">

               <h1><span>G</span>eneral</h1>
            <h2> <b>What is Frosh? </b></h2>
            <p>Frosh is a four-day event for new undergraduate students at McGill. During Frosh new students get the chance to meet other new students, connect with upper year student-leaders, and get introduced to the McGill Engineering community, all while exploring the McGill campus and the city of Montreal.</p>
            <h2> <b>What happens at Frosh?</b></h2>
            <p>Frosh is made up of a variety of social events, completely organized by students. Some events will take place on McGill campus, while some will take place at other venues in Montreal. Some events will take place during the day, some will take place at night, some will be outside, and some will be indoors. You’ll be attending all the events with your group of fellow engineers, and sometimes with students from other faculties. For a full outline of what happens at each of our events, see the map on the front page.</p>
            <h2> <b>When is Frosh?</b></h2>
            <p>Frosh takes place from August 30 - September 2, 2018. Frosh is one of the events of Orientation Week, which takes place from August 25 - September 2. You can pick up your Frosh gear at the Engineering tent on Lower Field (see the map on the front page) starting August 22. September 3 is Labour Day, a holiday, which will give you the chance to get ready for your first day of class on September 4.</p>
            <h2> <b>How do I register?</b></h2>
            <p>Registration for all Froshes takes place through the same online system, which you can access through the “Register” button on this page. Registration is open up until the first day of Frosh (August 30), and starting August 22 you will also be able to register in-person at our tent on the West side of the Lower Field</p>
            <h2> <b>Why should I do Frosh?</b></h2>
            <p>Frosh is your first and best opportunity to get acquainted with McGill Engineering kick-start your McGill career. You’ll meet older engineering student mentors and new engineering students like yourself. The friendships you make during Frosh will last through the rest of your McGill career and beyond.</p>
            <h2> <b>How much does Frosh cost?</b></h2>
            <p>The registration fee for Engineering Frosh is $145. The cost is payable online at the time of registration with a credit card, or in-person in cash when you pick up your Frosh gear at the registration tent. 
               <br></br>
               <br></br>
               If you can’t afford to pay the registration fee, we still want you to participate in Frosh! We have an <a href="bursary.pdf">Engineering Frosh Bursary Program</a> where you can apply to have all or part of your registration fee paid for you. </p>
            <h2> <b>Are Frosh events mandatory?</b></h2>
            <p>Not at all. We encourage you to participate in all Frosh events, but if you can’t make it or need to take a break that’s absolutely okay. If possible, please tell your Frosh leaders that you won’t be attending so they don’t wait for you or start looking or you.</p>
            <h2> <b>Can I pay for individual events?</b></h2>
            <p>No. To attend any Frosh event you need a Frosh bracelet, which you can only get by registering for the entirety of Frosh.</p>
            <h2> <b>Do I have to register?</b></h2>
            <p>Yes. To attend any Frosh events, you must register (online or in-person) and pick up your Frosh bracelet.</p>
            <h2> <b>I made a mistake on my registration, how can I correct it?</b></h2>
            <p>Send us an email to <a href="mailto:oweek.communications@mcgilleus.ca">oweek.communications@mcgilleus.ca</a> any time, or come see us at the registration tent after August 22.</p>
            <h2> <b>Where do I pick up my Frosh gear?</b></h2>
            <p>At the registration tent located on Lower Field West! See the map on the first page!</p>
            <h2> <b>Do I need ID during Frosh?</b></h2>
            <p>Yes. Underage students have black bracelets to indicate their age, but at some venues you will also need to present a photo ID to enter.</p>
            <h2> <b>What should I bring?</b></h2>
            <p>This answer varies by event, so check out the Events page for event-specific details. Here are some items you should carry with you:</p>
               <ul>
                   <li>Water</li>
                   <li>Snack (granola bars fit great in a fanny pack)</li>
                   <li>Cell phone + charger or battery</li>
                   <li>Photo ID</li>
                   <li>A few dollars in cash (not too much though!)</li>
                   <li>Frosh bracelet (once this is put on, you must keep it on until the end of Frosh)</li>
                   <li>White Froshie t-shirt (provided when you pick up your gear)</li>
               </ul>
               <p>Pro tip: all of your leaders, staff, and coordinators will be wearing fanny packs to carry their belongings, so if you have one, bring it! Otherwise, the Frosh bag provided at registration is good for carrying your things too.</p>
               
               <br></br><br></br>
               <h1><span>C</span>ommunity</h1>

            <h2> <b>What is the EUS?</b></h2>
            <p>The Engineering Undergraduate Society (EUS) is a student-led organization that represents engineering and architecture undergraduate students at McGill University. The EUS supports its students through organized funding for improvement of student life and academics, representation through council, and coordinating an immense amount of opportunities to get involved. Find out more at <a href="https://wiki.mcgilleus.ca/" target="_blank">wiki.mcgilleus.ca</a>, by reading the EUS Handbook that you’ll receive early in the year, or by dropping by the EUS Office in McConnell Room 7!</p>
            <h2> <b>Who are Frosh Coordinators?</b></h2>
            <p>We are a group of 12 upper-year engineering students who spend their summer organizing the entirety of Frosh. We publicize Frosh to incoming students, find sponsorship, book venues, come up with fun events, and hire Frosh Leaders and O-Staff. During Frosh, you can find us wearing colourful tank tops with “COORD” on the back!</p>
            <h2> <b>Who are Leaders and O-Staff?</b></h2>
            <p>Frosh Leaders are upper-year students who have been hired to guide you throughout Frosh. Your Leaders will also be your mentors throughout your first year at McGill, so be sure to get their contact information during Frosh and hit them up with any questions during or after Frosh!
               <br></br>
               <br></br>
               O-Staff are upper-year students who have been hired to help the Coordinators run all of the events at Frosh. You might find O-Staff distributing food, moving supplies around, or working with a venue to keep things orderly.
               <br></br>
               <br></br>
               This year, the Engineering Leaders will be wearing red Frosh t-shirts and the Engineering O-Staff will be wearing yellow Frosh t-shirts. They have all received extensive training, so feel free to approach them at any time, and they will be happy to answer your questions!</p>
            <h2> <b>Who are Froshies?</b></h2>
            <p>You! A “Froshie” is anyone who is a participant in Frosh. All Froshies wear white Frosh t-shirts.</p>
            <h2> <b>Who can participate in Frosh?</b></h2>
              
               <p>Engineering Frosh is open to any student entering McGill for their first year of an undergraduate degree in Engineering or Architecture. Frosh welcomes students of all ages, but you only get one chance - you can’t participate in Frosh in any year after your first one (however, you can apply to be a Leader, O-Staff, or Coordinator!).
               <br></br>
               <br></br>
               If you are a transfer or exchange student coming to McGill for your first year in Engineering or Architecture, you are welcome to participate in Frosh.</p>
            <h2> <b>I’m not in Engineering, can I sign up for Engineering Frosh?</b></h2>
            <p>Probably not. Students are strongly suggested to participate in the Frosh of their faculty, or in a non-Faculty Frosh, so they can make connections with people they will be working alongside throughout their McGill career. If you have unusual circumstances and think that Engineering Frosh would be the best fit for you (e.g. you transferred Faculties after registering for Frosh), send an email to <a href="mailto:oweek.communications@mcgilleus.ca">oweek.communications@mcgilleus.ca</a> or find an Engineering Frosh Coordinator at the registration tent (starting August 22).</p>
            <h2> <b>I’m from Montreal - why should I do Frosh?</b></h2>
            <p>You may already know the city well, but Frosh will acquaint you with McGill and the surrounding area. Frosh will connect you with classmates and mentors who will help you make the most of your McGill career.</p>
            <h2> <b>I’m not from Montreal - why should I do Frosh?</b></h2>
            <p>Frosh events take place both on campus and in downtown Montreal, so you’ll soon be acquainted with your new home. Additionally, you’ll get to reap the benefits listed in the question above!</p>
            <h2> <b>I’m not of legal drinking age - can I do Frosh?</b></h2>
            <p>Absolutely. All of our events are accessible to people of all ages, and there will be hundreds of students participating in Frosh that are under 18 years old.</p>
            <h2> <b>Is there alcohol present at Frosh events?</b></h2>
            <p>At some events, yes. Every day, there are events where there will be no alcohol, events where students of legal drinking age can choose to purchase alcohol, and events where students of legal drinking age can choose to bring alcohol. At no event will the purpose be to drink alcohol - Frosh is an event that sometimes involves alcohol, not an event for alcohol.</p>
            <h2> <b>What if I don’t drink, don't want to drink, or can’t drink?</b></h2>
            <p>That’s absolutely ok! Frosh events are just as fun for those who do not drink and those who drink.</p>
            <h2> <b>Is there a sober group?</b></h2>
            <p>No. However, in each Frosh group, there will be at least one designated sober Leader at all times. Leaders are allowed to consume alcohol during events, so long as they drink and act responsibly.</p>
                
               <h1><span>H</span>arm <span>R</span>eduction</h1>

            <h2> <b>Will food be provided at Frosh events?</b></h2>
            <p>Food will be provided at some, but not all events. To help you plan your eating schedule, we will indicate the events at which food will be provided on the Events page and in your Froshie handbook. Most of our events occur in downtown Montreal, so there are plenty of places to purchase food nearby.</p>
            <h2> <b>I have dietary restrictions, will there be food available to me?</b></h2>
            <p>At all events where we provide food, we will have options available for everybody to eat. If you have a dietary restriction, be sure to indicate it in the ‘comments’ section of the registration form so that we have food ready for you.</p>
               <h2><b>If I choose to drink, how can I do so more safely?</b></h2>
            <p>Firstly, always make sure to eat a good meal before consuming alcohol. Then, to stay hydrated throughout the night, be sure to drink water in between every alcoholic drink. Always be aware of the alcohol content in your drink - just because it tastes like juice doesn’t mean there’s no alcohol! Finally, always be aware that only time can sober you up. Drinking water or eating food when you are intoxicated will NOT sober you up faster.</p>
            <h2> <b>What is consent?</b></h2>
            <p>Consent is the continuous agreement between all parties involved about what is and what will be happening in a given situation. In the entirety of Frosh, all parties must consent to their circumstances. This especially applies to dancing, alcohol consumption, and sexual acts.
               <br></br>
               <br></br>
               Consent can never be assumed, and cannot be given if a person is incapacitated by alcohol or drugs. Consent cannot be given when one party has a position of power over another party (e.g. a Froshie and a Frosh Leader).
               <br></br>
               <br></br>
               The topic of consent will be explored more in the “How to Frosh” video that you will watch upon registration for Frosh. If you have any questions regarding consent during Frosh, talk to one of your Leaders or a Frosh Coordinator.</p>
               
               <br></br><br></br>
               <h1><span>A</span>ccessibility</h1>

            <h2> <b>I have mobility restrictions, will I be able to participate in Frosh?</b></h2>
            <p>Absolutely. We’ve done our best to maximize the number of accessible events in our schedule - see the froshie package page for accessibility details about each venue. For the venues that are inaccessible by wheelchair, we may be able to work out a solution - contact the Frosh Coordinators at <a href="mailto:oweek.communications@mcgilleus.ca">oweek.communications@mcgilleus.ca</a> for more details.</p>
            <h2> <b>During Frosh, where can I seek additional support for accessibility challenges?</b></h2>
            <p>When you register online, there will be an area for you to outline your accessibility challenge. This will help us prepare to assist you during our events. When you come to pick up your gear at the registration tent, we’ll be happy to discuss what solutions we have available. After meeting your Leaders, discuss your accessibility challenge with them, and they will plan ahead to ensure you have access to every event possible.</p>
            <h2> <b>I have a concern that I would like addressed before registering, how can I contact a Frosh Coordinator?</b></h2>
            <p>Any concerns can be sent to <a href="mailto:oweek.communications@mcgilleus.ca">oweek.communications@mcgilleus.ca</a>, and the appropriate Coordinator will reply to your question.</p>
            
            <h2> <b> I have mental health challenges. How could Frosh impact me?</b></h2>
            <p>If you are taking medication, be sure to check that it is safe to mix your medication with alcohol before drinking. Frosh is a social event, but at many events there will be Chill Zones for you to take a break from the action. If you ever need someone to talk to during Frosh, don’t be shy to talk to Frosh Leaders or Coordinators!</p>



          </section>
        </div>

        

      </div>

     

    )
  }
}

export default Faq

export const pageQuery = graphql`
  query FaqQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
