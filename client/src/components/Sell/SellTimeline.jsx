import { Timeline } from 'antd';
import React from 'react';

const SellTimeline = () => {
    return (
        <>
            <h1>Publish your property</h1>

            <Timeline 
                className='timeline'
                mode="alternate"
                items={[
                    {
                        children: <span>If you have a desire to place your property on our site,
                            you will need to send a letter to our email address about your desire
                        </span>,
                        color: 'green',
                    },
                    {
                        children: <span>After we review your offer, you will be sent a letter
                            in which you will need to specify more detailed information about your property
                        </span>,
                    },
                    {
                        children: <span>After you have successfully provided us with information, we will process your real estate</span>,
                    },
                    {
                        children: <span>After the registration is completed, we will give you the
                            opportunity to see what the property will look like on the website
                        </span>,
                    },
                    {
                        children: <span>Publication on the website</span>,
                    },

                    
                ]}
            />
        </>
    );
}

export default SellTimeline;
