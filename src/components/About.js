import React from 'react'

export const About = () => {
  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>OM OSS</h1>

      <div className='about-wrapper'>
        <p>Den här sidan, växt.nu, är mitt slutprojekt i Technigo's Frontend Developer Bootcamp och jag har kombinerat allt jag lärt mig på kursen ihop med mitt absoluta största intresse - växter. På 24 veckor har vi fokuserat på JavaScript (ES6), React, HTML5, CSS och server-side programming med Node.js.</p>
        <p>Vi har gjort ett projekt per vecka och det har varit allt från det mest grundläggande inom programmering till att strukturera projekt med dom senaste teknologierna. Vi har jobbat agilt med sprints, check-ins, demos etc. Mob-programming och pair-programming har varit en stor del av utbildningen och vi har varvat grupprojekt med egna projekt, som denna hemsida.</p>
        <p>Här började jag med att bygga upp den grundläggande funktionaliteten och strukturen i webshoppen med hjälp av Redux, sen gick jag vidare till att bygga en databas i Express som med hjälp av ett API visar produkterna i webshopen. För att användaren ska kunna köpa produkterna måste den logga in, och där har jag jobbat med Bcrypt för att kryptera användarens lösenord.</p>
        <p>Mitt största fokus har absolut varit på Frontend, då det är det jag tycker är allra roligast och där får jag utlopp för min kreativa och skapande sida. Färg, form, design och växter har alltid legat mig varm om hjärtat och här är resultatet!</p>
        <a href="mailto:epost.louise@gmail.com">
          <p>Louise Eriksson</p>
        </a>

        <img className='about-img' src={require('../images/stickling_vaxt.png')} alt="från stickling till växt" />

        <div className='about-contact'>
          <a href="https://www.linkedin.com/in/louise-eriksson/">
            <p>LinkedIn</p>
          </a>

          <a href="https://louiseeriksson.netlify.app/">
            <p>Portfolio</p>
          </a>

          <a href="https://www.technigo.io/">
            <p>technigo.io</p>
          </a>
        </div>
      </div>
    </div>
  )
}