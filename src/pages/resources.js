import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderResources from '../components/HeaderResources'

import AccessAlly from '../assets/images/accessally.jpg';

class Resources extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderResources />
        <div id="main">
          <section id="content" className="main">

               <h1>Frosh Resources</h1>
            <h2> <b>Drivesafe - (514) 398-8040</b></h2>
            <p>This student-run service of the Students’ Society of McGill University (SSMU) drives students safely anywhere on the island of Montreal for free. Don’t hesitate to give them a call during Frosh if you are looking for a safe way to get home! Leaders and staff can also call them for you at night events. For more information, check out their <a href="https://drivesafe.ssmu.ca/">website</a></p>
            <h2> <b>Walksafe - (514) 398-2498</b></h2>
            <p>This student-run SSMU service has the goal of bringing you home safely. During and after Frosh, we encourage you to never walk home alone. If none of your friends or Leaders are around, give them a call and one of their volunteers will walk you home for free. Leaders and staff on duty can also call them for you at night events. For more information, check out their <a href="http://walksafe.ca/">website</a></p>
            <h2><b>M-SERT - (514) 398-5216</b></h2>
            <p>The McGill Student Emergency Response Team (M-SERT) is a volunteer service supported SSMU whose members provide emergency first aid services to McGill University and the Montreal community. Their membership includes over 50 amazing volunteers who hold a certification at the Canadian Red Cross Emergency First Responder level. If you need medical attention during a frosh event, M-SERT will be there to help. For more information, check out their <a href="https://www.msert.net/">website</a></p>
            <h2><b>RedFrogs and Chill Zones</b></h2>
            <p>Red Frog volunteers are super nice people that will always have a granola bar or water on hand! They hang out at a designated chill zone (your leaders know where it is) and are always down to chat if you want a break from the night events. For more information, check out their <a href="http://ca.redfrogs.com/">website</a></p>
            <h2><b>Nightline - (514) 398-6246</b></h2>
            <p>McGill Students’ Nightline is a student-run listening service which provides the community with a variety of support.This includes anything from information to crisis management and referrals. You can even call them to ask what’s the best poutine place in Montreal! Their service is confidential, anonymous and non-judgmental. They are an English service that accepts calls from everyone. For more information, check out their <a href="https://nightline.ssmu.ca/">website</a></p>
            <h2><b>EUS Health</b></h2>
            <p>Throughout your time at McGill, the Engineering Undergraduate Society provides you with resources made by fellow students. Most importantly, you can file an incident though them at any point for any reason! You can also reach out to both the EUS Equity and Mental Health Committees with questions. For more information and access to the Incident Response Form, check out their <a href="https://mcgilleus.ca/health">website</a></p>
            <h2><b>Access Allies</b></h2>
            <p>Access Allies are Frosh Leaders and Staff that have gone through additional accessibility training. They will be easy to identify through their “Access Ally” pin and are your go to for any accessibility concerns.</p>
            <div id="item4" className="rightAlign"><img src={AccessAlly} style={{  }} alt="" /></div>
<p>If you have any questions or concerns about accessibility during Frosh, please reach out to the Engineering Inclusivity Coordinator for more details at <a href="mailto:oweek.inclusivity@mcgilleus.ca">oweek.inclusivity@mcgilleus.ca</a></p>
            <h2><b>Crash Pad</b></h2>
            <p>Crash Pad is a service run by SSMU for first year commuters throughout Frosh that allows froshies to sleep downtown after late night frosh events. More information about registration will be released as Frosh approaches so keep an eye out if you’re looking to stay downtown during Frosh.</p>
            <h1>McGill Resources</h1>
            <h2><b>McGill Security - (514) 398-3000</b></h2>
            <p>The Security Services Team strives to create and maintain a safe environment at both McGill campuses (Downtown and Macdonald Campus) for students, staff, faculty and visitors. They provide support if you are in immediate danger on campus or need assistance reporting to the police. For more information, check out their <a href="https://www.mcgill.ca/campussafety/security-services">website</a></p>
            <h2><b>The Office of the Dean of Students - (514) 398-4990</b></h2>
            <p>The Dean, Associate Dean of Students and the staff in the Office of the Dean of Students, assist students during their years at McGill. They are happy to answer any questions or provide advice and referrals to the appropriate individuals or offices on campus. The Dean of Students, as part of a senior collaborative team is committed to promoting your success in academic and personal areas. In addition this office oversees student rights and responsibilities, academic integrity, academic advising, the student disciplinary process and student recognition. For more information, check out their <a href="http://www.mcgill.ca/deanofstudents/">website</a></p>
            <h2><b>McGill Campus Life & Engagement (CL&E)</b></h2>
            <p>Campus Life & Engagement (CL&E) supports students at the different stages in their life at McGill. By collaborating with various University departments and student groups, CL&E is there to help you connecting to the resources and opportunities that will help you make the most of your time at McGill. You can depend on CL&E as a source for helping you navigate the University, connect to meaningful opportunities, and develop your interests and skills. For more information, check out their <a href="https://www.mcgill.ca/cle/welcome-cle-website">website</a></p>
            <h2><b>McGill Student Health Services</b></h2>
            <p>Student Health Service provides McGill students with quality, comprehensive health care in a convenient campus location. Their services are specifically geared towards the unique health needs of students, and are delivered by caregivers sensitive to – and experienced with – their particular health concerns. For more information, check out their <a href="http://www.mcgill.ca/studenthealth/healthservices">website</a></p>
            <h2><b>McGill Counselling Services</b></h2>
            <p>Whether providing assistance during a crisis, teaching relaxation techniques, or discussing a failed exam or broken heart, the McGill Counselling Service is here to help. This service works to provide students with effective therapy, knowledgeable support, and the opportunity to develop the skills they need to be successful in both school and life. For more information, check out their <a href="https://www.mcgill.ca/counselling/">website</a></p>
            <h2><b>Peer support Centre (PSC)</b></h2>
            <p>Feeling stressed? Lonely? Down? Or just want to chat? The Peer Support Centre is ready to hear you out. The PSC is a student-run service of the Students’ Society of McGill University (SSMU). This service is free to all McGill students and offers one-on-one, confidential and non-judgmental peer support and resource referral. For more information, check out their <a href="http://ssmu.mcgill.ca/psc/">website</a></p>
            <h2><b>Social Equity and Diversity Education (SEDE)</b></h2>
            <p>The Social Equity and Diversity Education (SEDE) Office provides information, education and training to all areas of the University in order to cultivate a respectful and supportive campus. By connecting with local organizations, SEDE also provides McGill's students and staff with community-based learning experiences that foster leadership and promote a deeper understanding of diversity. For more information, check out their <a href="http://www.mcgill.ca/equity_diversity/">website</a></p>
            <h2><b>Office for Students with Disabilities (OSD)</b></h2>
            <p>Do you have a disability, mental health condition, chronic illness or other impairment that may impact your McGill experience? Visit the Office for Students with Disabilities to find out about the services and resources available to students through the OSD. For more information, check out their <a href="https://www.mcgill.ca/osd/office-students-disabilities">website.</a></p>
                <p>If you have any questions or concerns about accessibility during Frosh, please reach out to the Engineering Inclusivity Coordinator for more details at <a href="mailto:oweek.inclusivity@mcgilleus.ca">oweek.inclusivity@mcgilleus.ca</a></p>
            <h2><b>Office for Sexual Violence Response, Support and Education</b></h2>
            <p>This McGill service provides confidential, non-judgmental and non-directional support and education to students, faculty and staff of all genders who have been impacted by sexual violence. Their services include crisis support for incidents of sexual & gender-based violence, reporting information, referrals and accompaniment to internal and external resources and they can be accessed in both French and English. For more information, check out their <a href="https://www.mcgill.ca/saap/our-services">website</a></p>
            <h2><b>Sexual Assault Centre of the McGill Students’ Society (SACOMSS)</b></h2>
            <p>The Sexual Assault Centre of the McGill Students’ Society (SACOMSS) is a volunteer-run organization committed to assist survivors of sexual assault and their allies through direct support, advocacy, and outreach. For more information, check out their <a href="http://www.sacomss.org/wp/">website</a></p>
            


          </section>
        </div>

        

      </div>

     

    )
  }
}

export default Resources

export const pageQuery = graphql`
  query ResourcesQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
