import React from 'react';
import { ProfileType } from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

type PropsType = {
    profile: ProfileType
  }
  

const ProfileInfo = (props: PropsType) => {
            if (!props.profile) {
                return <Preloader />
            }
    return (
        <div>
            <div className={styles.descriptionBlock}>
                {/* <img src='https://eksmo.ru/upload/iblock/523/rick_morty_l_min.jpg' alt='EEE'/> */}
                <img src={props.profile.photos.large} alt='EEE' />
                 Maks_KaNDeR
            </div>
        </div>
    )
}

export default ProfileInfo