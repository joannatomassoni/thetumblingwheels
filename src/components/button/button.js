import React from 'react'
import { Link } from 'gatsby'
import buttonStyles from './button.module.scss'
import { FaSpotify } from 'react-icons/fa'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

const Button = ({ text }) => {
  if (text === '') {
    return (
      <button className={buttonStyles.button}>
        <Link 
          to='https://www.facebook.com/thetumblingwheels'
          className={buttonStyles.socialItem}>
							<FiFacebook size={28} />
        </Link>
        <Link 
          to='https://open.spotify.com/artist/3XAKpaHzMbwGOs0VyHjZlV?si=AK_akki0TN2n9b-aFOO-nQ'
          className={buttonStyles.socialItem}>
							<FaSpotify size={28} />
        </Link>
        <Link 
          to='https://www.instagram.com/thetumblingwheels/'
          className={buttonStyles.socialItem}>
							<FiInstagram size={28} />
        </Link>
      </button>
    )
  } else {
    return (
      <button className={buttonStyles.button}>{text}</button>
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