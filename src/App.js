import React, { useState, useEffect } from 'react'
import './App.css';
import liff from '@line/liff';
import 'semantic-ui-css/semantic.min.css'
import RegisterPage from './pages/Register'
import CouponPage from './pages/Coupon'
import { Button } from 'semantic-ui-react'

// {
//   displayName: "I am golf",
//   pictureUrl: "https://profile.line-scdn.net/0h_1EPtmydAB54KSo72Yd_SURsDnMPBwZWAB0bL1wuCStTSUEfEUtHL1t-XC5XSUZPFx1PcVkvWi1d",
//   statusMessage: "Developer 🌍",
//   userId: "Ud29b891ddd2e80cc644e0316f70640e8"
// }

function App() {
  const [profile, setProfile] = useState({})

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
    setProfile(profile)
  }


  useEffect(() => {
    initailLift()
  }, [])

  return Object.keys(profile).length > 0 ?
      <RegisterPage profile={ profile } />
      :
      <Button onClick={ login }>กรุณเข้าสู่ระบบ</Button>
}

export default App;
