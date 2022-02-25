import { client } from '../lib/sanityClient'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { useWeb3 } from "@3rdweb/hooks"
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `bg-[#28402c] flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#771fce] text-white p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer`,
  details: `text-lg text-center text-white font-semibold mt-4`,
  // details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}
// background-color: #771fce;
// color: white;

export default function Home() {
  const { connectWallet, address, error } = useWeb3();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])
  
  error ? console.log(error) : null;
  return (
    <div className={style.wrapper}>
    <Toaster position="top-center" reverseOrder={false} />
    {address ? (
      <>
        <Header />
        <Hero />
      </>
    ) : (
      <div className={style.walletConnectWrapper}>
        <button
          className={style.button}
          onClick={() => connectWallet('injected')}
        >
          Connect Wallet
        </button>
        <div className={style.details}>
          You need Chrome or firefox or Brave browser to be
          <br /> able to run this app.
        </div>
      </div>
    )}
  </div>
  )
}
