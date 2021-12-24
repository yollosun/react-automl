import React from 'react'
import '../styles/profile.css'
import UploadFile from './UploadFile'
function Profile() {

    return (
        <div className='profile'>
            <div className="wrapper">
                <div className='profile-img-info'>
                    <div className="profile-img">
                        <img src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg" alt="" />
                    </div>
                    <div className='profile-info'>
                        <h1>Yollollay</h1>
                        <h4>Zhamila Temirkhan</h4>
                    </div>


                </div>
                <div>
                    <h1>Загрузите файл для дальнейших действий</h1>
                    <UploadFile />
                </div>
            </div>
        </div>
    )
}

export default Profile
