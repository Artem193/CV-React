import React from 'react';
import './App.scss'
import { Title } from './components/Title'
import { Skill } from './components/Skill'

function App() {
  return (
    <div className='page'>
      <header className='page__header'>
        <strong>PINCHUK</strong>
        <br />
        ARTEM
      </header>
      <div className="page__column1">
        <Title
          title='CONTACTS'
          column={1}
        />
        <ul className="list">
          <a
            href='https://goo.gl/maps/bnV8xJEHKHBa3p429'
            target='blank'
            className='list__link'
          >
            <li
              className='list__contact list__contact--city'
            >
              Dnipro
            </li>
          </a>
          <a
            href='tel:+380967655328'
            target='blank'
            className='list__link'
          >
            <li
              className='list__contact list__contact--phone'
            >
              0967655328
            </li>
          </a>
          <a
            href='mailto:aviktorovich193@gmail.com'
            target='blank'
            className='list__link'
          >
            <li
              className='list__contact list__contact--email'
            >
              aviktorovich193@gmail.com
            </li>
          </a>
        </ul>
        <div>
          <Title
            title='LANGUAGES'
            column={1}
          />
          <Skill
            skillName='English'
            great={3}
          />
        </div>
        <div>
          <Title
            title='SKILLS'
            column={1}
          />
          <Skill
            skillName='HTML + CSS'
            great={4}
          />
          <Skill
            skillName='Javascript'
            great={4}
          />
          <Skill
            skillName='Git'
            great={4}
          />
          <Skill
            skillName='TypeScript'
            great={3}
          />
          <Skill
            skillName='React'
            great={4}
          />

        </div>
        <Title
          title='HOBBIES'
          column={1}
        />
        <ul className="list">
          <li>Sport</li>
          <li>Reading</li>
          <li>Fishing</li>
        </ul>
      </div>
      <div className="page__column2">
        <Title
          title='ABOUT ME'
          column={2}
        />
        <div className='page__text'>
          <p>Age: 29</p>
          <p>
            Aim: to get a position as a programmer and further development.
          </p>
        </div>
        <Title
          title='WORK EXPERIENCE'
          column={2}
        />
        <div className='page__text'>
          <p>
            05/2016 - PRESENT
            <br />
            <strong>ASSISTANT DIRECTOR</strong>
          </p>
          <p>
            The work is related to insurance in Israel. I am an intermediary between call
            centers in Ukraine that sell the services of an insurance agency and the
            insurance agency itself.
          </p>
          <p>
            My responsibilities:
            <ul className='page__list'>
              <li>
                Control of the correct work of the two parties - insurance agents and
                operators
              </li>
              <li>
                Calculation of current statistics and final results for the month
              </li>
              <li>
                Formation and maintenance of a database of phone numbers, as well as
                timely provision of the call center with them
              </li>
            </ul>
          </p>
        </div>
        <Title
          title='EDUCATION'
          column={2}
        />
        <div className='page__text'>
          2011 - 2017
          <br />
          <strong>APPLIED MATERIAL SCIENCE</strong>
          <br />
          OLES HONCHAR DNIPRO NATIONAL UNIVERSITY
        </div>
        <Title
          title='ADDITIONALLY'
          column={2}
        />
        <div className='page__text'>
          <p>
            <strong>SOFT SKILLS</strong>
            <ul className='page__list'>
              <li>Analytical mindset</li>
              <li>Punctuality</li>
              <li>Sociability, stress resistance (6 years of work experience in sales)</li>
              <li>Responsibility</li>
              <li>Algorithmic approach</li>
              <li>Ability to work in a team</li>
            </ul>
          </p>
          <p>
            <strong>MY WORKS:</strong>
            <ul className='page__list'>
              <li>
                <a
                  href='https://artem193.github.io/layout_dia/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Landing #1(HTML + CSS)
                </a>
              </li>
              <li>
                <a
                  href='https://artem193.github.io/layout_miami/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Landing #2(HTML + CSS)
                </a>
              </li>
              <li>
                <a
                  href='https://artem193.github.io/converter-currency/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Converter-currency(React)
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
