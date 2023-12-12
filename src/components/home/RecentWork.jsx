import React from 'react';
import "./Recentwork.css";

const RecentWork = () => {
    return (
        <div className='recent_Work-wrap'>
            <div className='sec__Ttl'>
                <div className='icon_Ttl'><img src='assets/images/icon-ttl.png'></img></div>
                <div className='text_Ttl'><h3>Recent Work</h3></div>
            </div>
            <div className='rec_Sec'>
                <div className='rec_Rw-wrap'>
                    <div className='rec_Row'>
                        <div className='rec_Col'>
                            <div className='rec_Content'>
                                <div className='rec_Img'>
                                    <img src='assets/images/vr.png' alt='varun raj'></img>
                                </div>
                                <div className='rec_Ttl'>
                                    <h4>Varun Raj</h4>
                                </div>
                            </div>
                        </div>
                        <div className='rec_Col'>
                            <div className='rec_Content'>
                                <div className='rec_Img'>
                                    <img src='assets/images/sw.png' alt='Swayamvar'></img>
                                </div>
                                <div className='rec_Ttl'>
                                    <h4>Swayamvar</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rec_Row'>
                        <div className='rec_Col'>
                            <div className='rec_Content'>
                                <div className='rec_Img'>
                                    <img src='assets/images/jyvs.png' alt='jyvs'></img>
                                </div>
                                <div className='rec_Ttl'>
                                    <h4>JY VS</h4>
                                </div>
                            </div>
                        </div>
                        <div className='rec_Col'>
                            <div className='rec_Content'>
                                <div className='rec_Img'>
                                    <img src='assets/images/fl.png' alt='fl'></img>
                                </div>
                                <div className='rec_Ttl'>
                                    <h4>Fuel Genie</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rec_Btn'>
                    <button><span>View all work</span><span className='arrow-up-right'><img src="assets/images/arrow-up-right.png" alt="arrow-up-right" /></span></button>
                </div>
            </div>
        </div>
    )
}

export default RecentWork