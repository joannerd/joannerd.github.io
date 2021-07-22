/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */

import Title from '../components/Title';
import styles from '../styles/Music.module.css';
import * as gtag from '../lib/gtag';

const musicIds = [
  {
    id: '678236268',
    name: 'Mend by James Takashi (SoundCloud)',
    isSoundCloud: true,
  },
  {
    id: '575082645',
    name: 'Mirage pour Marimba by Yasuo Sueyoshi (SoundCloud)',
    isSoundCloud: true,
  },
  // {
  //   id: 'iNYOCcg3GNA',
  //   name: 'Black House',
  // },
  {
    id: 'XBq3IN3nKqg',
    name: 'Feed the Birds from Mary Poppins',
  },
  {
    id: 'x7xrRkymO74',
    name: "Transformation of Pachelbel's Canon by Nanae Mimura",
  },
  {
    id: '0kCnhBc8Fvw',
    name: 'If We Hold On Together from the Land Before Time',
  },
  {
    id: 'v6C7oUaxNec',
    name: 'She Who Sleeps With A Small Blanket by Kevin Volans',
  },
  // {
  //   id: 'nSkBmDacal8',
  //   name: 'Allevi - LA Lullaby',
  // },
  // {
  //   id: 'x4ldxK6fcNQ',
  //   name: 'Lunsqui - Shi',
  // },
  // {
  //   id: 'e9e_p3SS1tA',
  //   name: 'Hughes - Antechamber',
  // },
];

const musicEvents = [
  {
    year: '2021',
    events: [
      {
        name: 'Southern California Marimba: Online International Artist Competition',
        shortName: 'SCM: Online IAC',
        location: 'scmarimba.org',
      },
    ],
  },
  {
    year: '2020',
    events: [
      {
        name: 'Southern California Marimba: Resonating Voices',
        shortName: 'SCM: Resonating Voices',
        location: 'scmarimba.org',
      },
      {
        name: 'Less Than 10 Music: Golden Summer',
        shortName: 'Less Than 10 Music',
        location: 'lessthan10music.com',
      },
    ],
  },
  {
    year: '2019',
    events: [
      {
        name: 'SPLICE Institute',
        location: 'Kalamazoo, MI',
      },
      {
        name: 'Toronto Creative Music Lab',
        location: 'Toronto, ON',
      },
      {
        name: 'Southern California Marimba: International Artist Competition',
        shortName: 'SCM: IAC',
        location: 'Orange, CA',
      },
      {
        name: 'Black House Collective: SoCal Intermedia Workshop',
        shortName: 'Black House Collective',
        location: 'Irvine, CA',
      },
      {
        name: 'Kendall Square Orchestra: Cambridge Science Festival',
        shortName: 'Kendall Square Orchestra',
        location: 'Cambridge, MA',
      },
      {
        name: 'XYLOPHONIA Ragtime Marimba Band',
        shortName: 'XYLOPHONIA',
        location: 'Nantucket, MA',
      },
      {
        name: 'Mary Poppins Production',
        shortName: 'Mary Poppins',
        location: 'Hopedale, MA',
      },
      {
        name: 'MIT Water Night: Ideas, Not Theories',
        shortName: 'MIT Water Night',
        location: 'Cambridge, MA',
      },
      {
        name: 'MASARY Studios: WBUR Opening',
        shortName: 'MASARY Studios',
        location: 'Boston, MA',
      },
    ],
  },
  {
    year: '2018',
    events: [
      {
        name: 'Eureka Ensemble: Sheltering Voices',
        shortName: 'Eureka Ensemble',
        location: 'Boston, MA',
      },
      {
        name: 'CØDA Ensemble',
        location: 'Boston, MA',
      },
      {
        name: 'Rhythm X FLOW: Ideas, Not Theories',
        shortName: 'Rhythm X FLOW',
        location: 'Boston, MA',
      },
      {
        name: 'Metropolitan Wind Symphony',
        location: 'Lexington, MA',
      },
      {
        name: 'More than a Riot: Women’s Equality Day',
        shortName: 'More than a Riot',
        location: 'Boston, MA',
      },
      {
        name: 'nief-norf Summer Festival',
        location: 'Knoxville, TN',
      },
      {
        name: 'Percussion Ensemble: Bent Knee',
        shortName: 'Bent Knee',
        location: 'Boston, MA',
      },
    ],
  },
  {
    year: '2017',
    events: [
      {
        name: 'Amid the Noise with Kadence Arts',
        shortName: 'Kadence Arts: Amid the Noise',
        location: 'Boston, MA',
      },
      {
        name: 'PASIC: Amid the Noise with So Percussion',
        shortName: 'PASIC: Amid the Noise',
        location: 'Indianapolis, IN',
      },
      {
        name: 'Eureka Ensemble',
        location: 'Boston, MA',
      },
      {
        name: 'New England Philharmonic',
        location: 'Boston, MA',
      },
      {
        name: 'ILLUMINUS: Ideas, Not Theories',
        shortName: 'ILLUMINUS',
        location: 'Boston, MA',
      },
      {
        name: 'Inuksuit by John Luther Adams',
        shortName: 'Inuksuit',
        location: 'San Francisco, CA',
      },
      {
        name: 'Clinic at Paramount High School',
        shortName: 'SCM Clinic',
        location: 'Paramount, CA',
      },
      {
        name: 'JACCC Kotohajime',
        location: 'Los Angeles, CA',
      },
    ],
  },
  {
    year: '2016',
    events: [
      {
        name: 'Adventures of Luxo Jr by Mya Pennington',
        shortName: 'Adventures of Luxo Jr',
        location: 'Rochester, NY',
      },
      {
        name: 'Inuksuit by John Luther Adams',
        shortName: 'Inuksuit',
        location: 'Boston, MA',
      },
      {
        name: 'Southern California Marimba Concert Series',
        shortName: 'SCM Concert Series',
        location: 'Orange, CA',
      },
    ],
  },
  {
    year: '2015',
    events: [
      {
        name: 'Fringe NYC: Ideas, Not Theories',
        shortName: 'Fringe NYC',
        location: 'New York, NY',
      },
      {
        name: 'Boston Philharmonic Youth Orchestra',
        shortName: 'BPYO',
        location: 'Boston, MA',
      },
    ],
  },
];

const MusicEvents = (): JSX.Element => (
  <ul className={styles.events}>
    {musicEvents.map(({ year, events }) => (
      <li className={styles.event} key={year}>
        <h3 className={styles.subtitle}>{year}</h3>
        {events.map(({ name, location, shortName }) => (
          <span key={name} className={styles.info}>
            <p className={styles.eventName}>{name}</p>
            <p className={styles.mobileEventName}>{shortName || name}</p>
            <p className={styles.location}>{location}</p>
          </span>
        ))}
      </li>
    ))}
  </ul>
);

const MusicRecordings = (): JSX.Element => (
  <ul className={styles.projects}>
    {musicIds.map(({ id, name, isSoundCloud }) => (
      <iframe
        key={name}
        onClick={() =>
          gtag.event({
            action: 'play_music',
            category: 'engagement',
            label: `Play ${name}`,
            value: 1,
          })
        }
        className={isSoundCloud ? styles.soundcloud : styles.project}
        title={name}
        src={
          isSoundCloud
            ? `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
            : `https://www.youtube.com/embed/${id}`
        }
        role="listitem"
      />
    ))}
  </ul>
);

const Music = (): JSX.Element => (
  <article>
    <Title pageTitle="Music | Joanna Chen" />
    <h2 className={styles.title}>Recordings</h2>
    <MusicRecordings />
    <h2 className={styles.title}>Events</h2>
    <MusicEvents />
  </article>
);

export default Music;
