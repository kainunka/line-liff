import React, { useState, useEffect } from 'react'
import './App.css';
import liff from '@line/liff';
import 'semantic-ui-css/semantic.min.css'
import RegisterPage from './pages/Register'
import CouponPage from './pages/Coupon'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import apiUrl from './constants/api'
// {
//   displayName: "I am golf",
//   pictureUrl: "https://profile.line-scdn.net/0h_1EPtmydAB54KSo72Yd_SURsDnMPBwZWAB0bL1wuCStTSUEfEUtHL1t-XC5XSUZPFx1PcVkvWi1d",
//   statusMessage: "Developer 🌍",
//   userId: "Ud29b891ddd2e80cc644e0316f70640e8"
// }

function App() {
  const [profile, setProfile] = useState({
    displayName: "I am golf",
    pictureUrl: "https://profile.line-scdn.net/0h_1EPtmydAB54KSo72Yd_SURsDnMPBwZWAB0bL1wuCStTSUEfEUtHL1t-XC5XSUZPFx1PcVkvWi1d",
    statusMessage: "Developer 🌍",
    userId: "Ud29b891ddd2e80cc644e0316f70640e8"
  })
  const [ isRegister, setRegister] = useState(false)

  const initailLift = async () => {
    await liff.init({ liffId: "1655237483-2mmzbkzN" }, () => {}, err => console.error(err.code, err.message));
    if (liff.isLoggedIn()) {
      getUserProfile()
    } else {
      login()
    }
  }

  const login = async () => {
    await liff.login()
    getUserProfile()
  }

  const getUserProfile = async () => {
    const profile = await liff.getProfile()
    await setProfile(profile)
    const response = await axios.get(`${apiUrl}${ profile.userId }`)

    if (response.data.status) {
      setRegister(true)
    }
  }


  useEffect(() => {
    // initailLift()
    axios.get(`${apiUrl}${ profile.userId }`).then((response) => {
      console.log(response)
        if (response.data.status) {
          setRegister(true)
        }
    })
  }, [])

  return Object.keys(profile).length > 0 ?
      !isRegister ? <RegisterPage profile={ profile } /> : <CouponPage profile={ profile } />
      :
      <Button onClick={ login }>กรุณเข้าสู่ระบบ</Button>
}

export default App;
