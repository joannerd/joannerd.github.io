import styles from './Music.module.css';

const youtubeIds = [
  'iNYOCcg3GNA', // Black House
  'v6C7oUaxNec', // Volans
  // '0kCnhBc8Fvw', // LBT
  'nSkBmDacal8', // Allevi
  // "x7xrRkymO74", // Pachelbel
  'x4ldxK6fcNQ', // Lunsqui
  // 'e9e_p3SS1tA', // Hughes
];

const musicEvents = [
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
        name: 'Southern California Marimba International Artist Competition',
        shortName: 'SCMIAC',
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
      <div className={styles.event} key={year}>
        <h3 className={styles.subtitle}>{year}</h3>
        {events.map(({ name, location, shortName }) => (
          <span key={name} className={styles.info}>
            <p className={styles.eventName}>{name}</p>
            <p className={styles.mobileEventName}>{shortName || name}</p>
            <p className={styles.location}>{location}</p>
          </span>
        ))}
      </div>
    ))}
  </ul>
);

const MusicRecordings = (): JSX.Element => (
  <ul className={styles.projects}>
    <iframe
      title="mend"
      className={styles.soundcloud}
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/678236268&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    />
    <iframe
      title="lalullaby"
      className={styles.soundcloud}
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/463480023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    />
    {youtubeIds.map((youtubeId) => (
      <iframe
        className={styles.project}
        title={youtubeId}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        key={youtubeId}
      />
    ))}
  </ul>
);

const Music = (): JSX.Element => (
  <article>
    <h2 className={styles.title}>Recordings</h2>
    <MusicRecordings />
    <h2 className={styles.title}>Events</h2>
    <MusicEvents />
  </article>
);

export default Music;
