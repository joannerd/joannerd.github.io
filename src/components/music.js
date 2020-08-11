import React from 'react';

const youtubeIds = [
  "iNYOCcg3GNA", // Black House
  "v6C7oUaxNec", // Volans
  // "nSkBmDacal8", // Allevi
  // "0kCnhBc8Fvw", // LBT
  // "x7xrRkymO74", // Pachelbel
  // "x4ldxK6fcNQ", // Lunsqui
  // "e9e_p3SS1tA", // Hughes
];

const musicEvents = [
  {
    year: "2019",
    events: [
      {
        name: "SPLICE Institute",
        location: "Kalamazoo, MI",
      },
      {
        name: "Toronto Creative Music Lab",
        location: "Toronto, ON",
      },
      {
        name: "Southern California Marimba IAC",
        location: "Orange, CA",
      },
      {
        name: "Black House Collective: SoCal Intermedia Workshop",
        location: "Irvine, CA",
      },
      {
        name: "K2O: Cambridge Science Festival",
        location: "Cambridge, MA",
      },
      {
        name: "XYLOPHONIA Ragtime Marimba Band",
        location: "Nantucket, MA",
      },
      {
        name: "Mary Poppins Production",
        location: "Hopedale, MA",
      },
      {
        name: "MIT Water Night: Ideas, Not Theories",
        location: "Cambridge, MA",
      },
      {
        name: "MASARY Studios: WBUR Opening",
        location: "Boston, MA",
      },
    ],
  },
  {
    year: "2018",
    events: [
      {
        name: "Eureka Ensemble: Sheltering Voices",
        location: "Boston, MA",
      },
      {
        name: "CØDA Ensemble",
        location: "Boston, MA",
      },
      {
        name: "Rhythm X FLOW: Ideas, Not Theories",
        location: "Boston, MA",
      },
      {
        name: "Metropolitan Wind Symphony",
        location: "Lexington, MA",
      },
      {
        name: "More than a Riot: Women’s Equality",
        location: "Boston, MA",
      },
      {
        name: "nief-norf Summer Festival",
        location: "Knoxville, TN",
      },
      {
        name: "Percussion Ensemble: Bent Knee",
        location: "Boston, MA",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        name: "Amid the Noise, Kadence Arts",
        location: "Boston, MA",
      },
      {
        name: "PASIC: Amid the Noise, So Percussion",
        location: "Indianapolis, IN",
      },
      {
        name: "Eureka Ensemble",
        location: "Boston, MA",
      },
      {
        name: "New England Philharmonic",
        location: "Boston, MA",
      },
      {
        name: "ILLUMINUS: Ideas, Not Theories",
        location: "Boston, MA",
      },
      {
        name: "Inuksuit by John Luther Adams",
        location: "San Francisco, CA",
      },
      {
        name: "JACCC Kotohajime",
        location: "Los Angeles, CA",
      },
    ],
  },
  {
    year: "2016",
    events: [
      {
        name: "Adventures of Luxo Jr by Mya Pennington",
        location: "Rochester, NY",
      },
      {
        name: "Inuksuit by John Luther Adams",
        location: "Boston, MA",
      },
      {
        name: "Southern California Marimba Concert Series",
        location: "Orange, CA",
      },
    ],
  },
  {
    year: "2015",
    events: [
      {
        name: "Fringe NYC: Ideas, Not Theories",
        location: "New York, NY",
      },
      {
        name: "Boston Philharmonic Youth Orchestra",
        location: "Boston, MA",
      },
    ],
  },
];


const MusicEvents = () => (
  <ul className="events">
    <h2>Events</h2>
    {musicEvents.map(({ year, events }) => (
      <div className="event" key={year}>
        <h3>{year}</h3>

        {events.map(({ name, location }) => (
          <span key={name}>
            <p>{name}</p>
            <p className="location">{location}</p>
          </span>
        ))}
      </div>
    ))}
  </ul>
);

const MusicRecordings = () => (
  <ul className="youtube projects">
    <h2>Recordings</h2>
    <iframe
      className="bandcamp"
      title="tcml"
      src="https://bandcamp.com/EmbeddedPlayer/album=3488803080/size=small/bgcol=ffffff/linkcol=0687f5/track=3057141196/transparent=true/" seamless />
    <iframe
      title="lalullaby"
      className="soundcloud"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/463480023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
    {youtubeIds.map(youtubeId => (
      <iframe
        className="youtube project"
        title={youtubeId}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        key={youtubeId}
      />
    ))}
  </ul>
);

const Music = () => (
  <article id="music">
    <MusicRecordings />
    <MusicEvents />
  </article>
);

export default Music;
