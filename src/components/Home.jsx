import { Avatar, Box, Card, CardActions, CardContent, Divider, Modal, Stack } from '@mui/material'
import '../aditionalStyles/webKits.css'
import React, { useRef, useState } from 'react'
import Nav from './Nav'
import Me from '../assets/me.jpg'
import { BsFacebook, BsFillSendFill, BsFillTelephoneFill, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SiCss3, SiGmail, SiHtml5, SiJavascript, SiMui, SiNetlify, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import weather from '../assets/weatherapp.jpg'
import movies from '../assets/movies.jpg'
import iphone from '../assets/iphone3d.jpg'
import burger from '../assets/burger.jpg'
import { MdContentCopy, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'





const Home = () => {
    const [displaySocial, setDisplaySocial] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [copyStatus, setCopyStatus] = useState('')

    const scrollRef = useRef(null);

    const handleClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCopyClick = () => {
        const textToCopy = 'bobi.emilov1@gmail.com';
      
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setCopyStatus('Text copied!');
          })
          .catch((error) => {
            setCopyStatus('Copy failed!');
            console.error('Copy failed:', error);
          });
      };



    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className='absolute max-w-[400px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-50 flex flex-col items-center justify-center text-center p-4 gap-4'>
                        <div onClick={handleClose} className='flex items-center justify-center p-1 bg-gray-300 rounded-[50%] cursor-pointer'>
                            <RxCross1 />
                        </div>
                        {
                            displaySocial === 'github' &&
                            <>
                            <p>Check all my GitHub repositories</p>
                            <p className='text-[14px] md:text-[18px] text-blue-600'><b><a href="https://github.com/BorisEmilov">https://github.com/BorisEmilov</a></b></p>
                            </>
                        }
                        {
                            displaySocial === 'gmail' &&
                            <>
                            <p>Contact with me by Gmail...</p>
                            <div className='flex items-center justify-center gap-3'>
                            <p className='text-[14px] md:text-[18px] text-gray-600'><b>bobi.emilov1@gmail.com</b></p>
                            <div onClick={handleCopyClick} className='flex items-center justify-center p-1 bg-slate-300 rounded-[50%] cursor-pointer'>
                            <MdContentCopy />
                            </div>
                            </div>
                            </>
                        }
                        {
                            displaySocial === 'phone' &&
                            <>
                            <p><b>Text me on Whatsapp</b></p>
                            <p className='text-[14px] md:text-[18px] text-blue-600'><b>+34 600556464</b></p>
                            </>
                        }
                    </div>
                </Modal>
            </div>


            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-start overflow-auto'>
                <div id='info' className='w-[100%] min-h-[100vh] flex flex-col items-center justify-end text-white bg-gradient-to-r from-[#468faf] to-[#014f86] p-2'>
                    <Nav />
                    <div className='w-[100%] h-[100%] flex flex-col md:flex-row items-center justify-center gap-4 mt-2'>
                        <div className='max-w-[400px] flex flex-col items-center justify-center text-center gap-3'>
                            <p className='text-[20px]'><b>Boris Emilov, ReactJS Developer and UI designs</b></p>
                            <p className='text-[14px] md:text-[16px]'>I work as a freelance creating small and medium projects of web applications with react, currently I am in the process of learning back-end, MySQL/Postgress and 3D models with ThreeJS.</p>
                        </div>
                        <img src={Me} id='my-img' alt="/" className='w-[150px] rounded-xl md:w-[170px]' />
                    </div>

                    <div className='w-[100%] flex items-center justify-center gap-8 mb-4 mt-2'>
                        <div onClick={handleOpen}>
                            <div id='my-img' onClick={() => setDisplaySocial('github')} className={`flex items-center justify-center p-2 rounded-[50%] cursor-pointer backdrop-blur-sm bg-white/30`}>
                                <BsGithub size={30} />
                            </div>
                        </div>
                        <div onClick={handleOpen}>
                            <div id='my-img' onClick={() => setDisplaySocial('gmail')} className={`flex items-center justify-center p-2 rounded-[50%] cursor-pointer backdrop-blur-sm bg-white/30`}>
                                <SiGmail size={30} />
                            </div>
                        </div>
                        <div onClick={handleOpen}>
                            <div id='my-img' onClick={() => setDisplaySocial('phone')} className={`flex items-center justify-center p-2 rounded-[50%] cursor-pointer backdrop-blur-sm bg-white/30`}>
                                <BsWhatsapp size={30} />
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] flex items-center justify-center p-1 text-white'>
                        <div onClick={handleClick} className='w-[60%] max-w-[400px] flex items-center justify-center gap-4 rounded-[15px] bg-[#118ab2] border-solid border-[1px] border-black cursor-pointer'>
                            <MdOutlineKeyboardDoubleArrowDown size={20} />
                            <p><b>Skills</b></p>
                            <MdOutlineKeyboardDoubleArrowDown size={20} />
                        </div>
                    </div>
                </div>
                <div id='skills' ref={scrollRef} className='w-[100%] min-h-[100vh] flex items-center justify-center'>

                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <SiHtml5 size={25} color='#669bbc' />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    HTML
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <SiCss3 size={25} color='#1d3557' />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    CSS
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color='primary'>
                                    <SiJavascript size={25} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    JavaScript
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <SiNodedotjs size={25} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    NodeJs
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <SiReact size={25} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    React
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <SiTailwindcss size={25} color='#669bbc' />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    CSS Tailwind
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <SiMui size={25} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    MUI
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div id='projects' className='w-[100%] flex flex-col items-center justify-start bg-gradient-to-r from-[#1d3557] to-[#457b9d] p-2 text-white'>
                    <p className='text-[20px] md:text-[24px] mt-[40px]'><b>Projects</b></p>
                    <div className='w-[100%] max-w-[250px]  md:max-w-[600px] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center p-2 gap-8'>
                        <div className='w-[100%] h-[250px] flex flex-col items-center justify-start p-2 bg-[#e5e5e5]' id='grid-elem'>
                            <div className='w-[100%] flex items-center justify-start p-2 gap-2'>
                                <div className='flex items-center justify-center p-2 rounded-[50%] bg-[#adb5bd]'>
                                    <SiNetlify size={25} color='black' />
                                </div>
                                <a href='https://react-vite-weatherapp.netlify.app/' className='text-blue-600'><b>OPEN APP</b></a>
                            </div>
                            <div className='w-[100%] h-[100%] flex items-center justify-center gap-2'>
                                <img src={weather} alt="/" className='h-[170px]' />
                                <div className='w-[100%] flex flex-col items-center justify-end gap-2'>
                                    <div className='w-[100%] flex items-center justify-center text-center text-black text-[12px] md:text-[14px]'>
                                        <p>Weather App with geolocation, made with theWeatherAPI vite-react and tailwind</p>
                                    </div>
                                    <div className='w-[100%] flex items-center justify-center gap-2'>
                                        <BsGithub color='black' size={20} />
                                        <a href="https://github.com/BorisEmilov/MyWeather" className='text-[12px] text-black'><b>GitHub Repo</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] h-[250px] flex flex-col items-center justify-start p-2 bg-[#e5e5e5]' id='grid-elem'>
                            <div className='w-[100%] flex items-center justify-start p-2 gap-2'>
                                <div className='flex items-center justify-center p-2 rounded-[50%] bg-[#adb5bd]'>
                                    <SiNetlify size={25} color='black' />
                                </div>
                                <a href='https://moviex-react.netlify.app/' className='text-blue-600'><b>OPEN APP</b></a>
                            </div>
                            <div className='w-[100%] h-[100%] flex items-center justify-center gap-2'>
                                <img src={movies} alt="/" className='h-[170px]' />
                                <div className='w-[100%] flex flex-col items-center justify-end gap-2'>
                                    <div className='w-[100%] flex items-center justify-center text-center text-black text-[12px] md:text-[14px]'>
                                        <p>Movie app, you can search for any movie or genre, streaming service, trailers an more...</p>
                                    </div>
                                    <div className='w-[100%] flex items-center justify-center gap-2'>
                                        <BsGithub color='black' size={20} />
                                        <a href="https://github.com/BorisEmilov/movieX-react" className='text-[12px] text-black'><b>GitHub Repo</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] h-[250px] flex flex-col items-center justify-start p-2 bg-[#e5e5e5]' id='grid-elem'>
                            <div className='w-[100%] flex items-center justify-start p-2 gap-2'>
                                <div className='flex items-center justify-center p-2 rounded-[50%] bg-[#adb5bd]'>
                                    <SiNetlify size={25} color='black' />
                                </div>
                                <a href='https://vite-iphone3d.netlify.app/' className='text-blue-600'><b>OPEN APP</b></a>
                            </div>
                            <div className='w-[100%] h-[100%] flex items-center justify-center gap-2'>
                                <img src={iphone} alt="/" className='h-[170px]' />
                                <div className='w-[100%] flex flex-col items-center justify-end gap-2'>
                                    <div className='w-[100%] flex items-center justify-center text-center text-black text-[12px] md:text-[14px]'>
                                        <p>Clone of apple web with a 3D iphone iteractive model</p>
                                    </div>
                                    <div className='w-[100%] flex items-center justify-center gap-2'>
                                        <BsGithub color='black' size={20} />
                                        <a href="https://github.com/BorisEmilov/Iphone3D" className='text-[12px] text-black'><b>GitHub Repo</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] h-[250px] flex flex-col items-center justify-start p-2 bg-[#e5e5e5]' id='grid-elem'>
                            <div className='w-[100%] flex items-center justify-start p-2 gap-2'>
                                <div className='flex items-center justify-center p-2 rounded-[50%] bg-[#adb5bd]'>
                                    <SiNetlify size={25} color='black' />
                                </div>
                                <a href='https://burgerrestauranapp.netlify.app/' className='text-blue-600'><b>OPEN APP</b></a>
                            </div>
                            <div className='w-[100%] h-[100%] flex items-center justify-center gap-2'>
                                <img src={burger} alt="/" className='h-[170px]' />
                                <div className='w-[100%] flex flex-col items-center justify-end gap-2'>
                                    <div className='w-[100%] flex items-center justify-center text-center text-black text-[12px] md:text-[14px]'>
                                        <p>Responsive weba App made with ReactJs for haburger restaurant</p>
                                    </div>
                                    <div className='w-[100%] flex items-center justify-center gap-2'>
                                        <BsGithub color='black' size={20} />
                                        <a href="https://github.com/BorisEmilov/BurgerRestaurantApp" className='text-[12px] text-black'><b>GitHub Repo</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] flex items-center justify-center gap-2 text-center'>
                            <BsGithub color='white' size={30} />
                            <a href="https://github.com/BorisEmilov" className='text-[14px] md:text-[16px] text-blue-300'><b>Check All my GitHub Repos here</b></a>
                        </div>
                    </div>
                </div>
                <div id='contact' className='w-[100vw] min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-[#003049] to-[#669bbc] p-2 text-white gap-8'>
                    <div className='flex flex-col items-center justify-center'>
                    <p className='text-[20px] md:text-[24px]'><b>Contact with me ...</b></p>
                    <SiGmail size={40} />
                    </div>
                    <form action="#" className='w-[90%] max-w-[500px] flex flex-col items-center justify-center gap-4'>
                        <input type="text" placeholder='Name' className='w-[80%] h-[30px] text-center rounded-[15px] text-black'  required/>
                        <input type="text" placeholder='Email' className='w-[80%] h-[30px] text-center rounded-[15px] text-black' required />
                        <textarea name="text" id="text" cols="30" rows="10" placeholder='enter your message...' className='w-[90%] text-black rounded-[15px]'></textarea>
                        <button className='w-[75px] flex items-center justify-center gap-2 bg-[#0466c8] p-1 rounded-[15px]'>Send <BsFillSendFill /></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home