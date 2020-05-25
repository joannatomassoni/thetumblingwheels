import React from 'react'
import buttonStyles from './button.module.scss'
import { FaSpotify } from 'react-icons/fa'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

const Button = ({ text }) => {
  if (text === '') {
    return (
      <button className={buttonStyles.button}>
        <a 
          href='https://www.facebook.com/thetumblingwheels'
          className={buttonStyles.socialItem}
          rel='noreferrer'
          target='_blank'>
							<FiFacebook size={28} />
        </a>
        <a 
          href='https://open.spotify.com/artist/3XAKpaHzMbwGOs0VyHjZlV?si=AK_akki0TN2n9b-aFOO-nQ'
          className={buttonStyles.socialItem}
          rel='noreferrer'
          target='_blank'>
							<FaSpotify size={28} />
        </a>
        <a 
          href='https://www.instagram.com/thetumblingwheels/'
          className={buttonStyles.socialItem}
          rel='noreferrer'
          target='_blank'>
							<FiInstagram size={28} />
        </a>
      </button>
    )
  } 
  if (text === 'Mailing list') {
    return (
      <button className={buttonStyles.button}>
        <a 
          href='http://eepurl.com/dcQU4v'
          rel='noreferrer'
          target='_blank'>
        {text}
        </a>
      </button>
    )
  }
  if (text === 'Purchase') {
    return (
      <button className={buttonStyles.button}>
        <a 
          href='https://thetumblingwheels.bandcamp.com/merch'
          rel='noreferrer'
          target='_blank'>
        {text}
        </a>
      </button>
    )
  }
}

export default Button


/* <ul className={navBarStyles.social}>
						<Link to='https://www.facebook.com/thetumblingwheels' className={navBarStyles.socialItem}>
							<FiFacebook size={25} />
						</Link>
						<Link to='https://open.spotify.com/artist/3XAKpaHzMbwGOs0VyHjZlV?si=AK_akki0TN2n9b-aFOO-nQ' className={navBarStyles.socialItem}>
							<FaSpotify size={25} />
						</Link>
						<Link to='https://www.instagram.com/thetumblingwheels/?hl=en' className={navBarStyles.socialItem}>
							<FiInstagram size={25} />
						</Link> */