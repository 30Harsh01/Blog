import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsGift, BsGithub, BsInstagram, BsTwitch, BsTwitterX} from 'react-icons/bs';

export default function Footercom() {
    return (
        <div>
            <Footer container className='border border-t-8 border-teal-500'>
                <div className='w-full max-2-7xl mx-auto'>
                    <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                        <div className='mt-5'>
                            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Harsh's</span>
                                Blog
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title='About' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href='www.link.com' target='_blank'>
                                        Link 1
                                    </Footer.Link>
                                </Footer.LinkGroup>
                                <Footer.LinkGroup col>
                                    <Footer.Link href='www.link.com' target='_blank'>
                                        Link 1
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title='Follow us' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href='www.gitup.com.com' target='_blank'>
                                        Github
                                    </Footer.Link>
                                </Footer.LinkGroup>
                                <Footer.LinkGroup col>
                                    <Footer.Link href='www.link.com' target='_blank'>
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                                
                            </div>
                        </div>
                    </div>
                    <Footer.Divider/>
                    <div className='w-full sm:flex sm:items-center sm:justify-between'>
                        <Footer.Copyright
                         href='#' 
                         by="Harsh's blog" 
                         year={new Date().getFullYear()}
                         />
                        <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                            <Footer.Icon href='#' icon={BsFacebook} />
                            <Footer.Icon href='#' icon={BsInstagram} />
                            <Footer.Icon href='#' icon={BsGithub} />
                            <Footer.Icon href='#' icon={BsTwitterX} />
                        </div>
                    </div>

                </div>
            </Footer>
        </div>
    )
}
