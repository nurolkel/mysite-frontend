import React from "react";
import styled from "@emotion/styled";
import { CgWebsite } from 'react-icons/cg';
import { AiFillSchedule } from "react-icons/ai";
import { MdVideoCall, MdDesignServices } from 'react-icons/md';
import { FaPaintBrush } from 'react-icons/fa'
import { breakpoints } from "../utils/breakpoints";


const WorkStyleContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--light-grey);
    gap: 2rem;
    .work-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            color: var(--light-green);
            font-size: 3rem;
            text-decoration: underline var(--dark-green);
        }
    
        p {
            color: var(--dark-green);
            font-size: 2rem;
            width: 90%;
        }
    }
  
    .work-content {
        div {
        text-align: center;
        margin: 1rem;
        padding: 1rem 0;
        width: 300px;
        p {
            font-size: 1.9rem;
            color: var(--dark-green);
        }
    }
    }
   

    @media ${breakpoints.md} {
       .work-header {
            h2 {
                font-size: 3.5rem;
            }

            p {
                font-size: 2.4rem;
                text-align: center;
                width: 500px;
                margin: 0 auto;
            }
       }
       
       .work-content {
            div {
                width: 500px;

                p { 
                    font-size: 2.4rem;
                }
            }
       }
       
    }

    

   
`;

const ScheduleIcon = styled(AiFillSchedule)`
    color: var(--light-green);
    font-size: 4.5rem;
    transition: transform 300ms;
    
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.md} {
        font-size: 5rem;
    }
`;

const VideoIcon = styled(MdVideoCall)`
    color: var(--light-green);
    font-size: 4.5rem;
    transition: transform 300ms;
    
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.md} {
        font-size: 5rem;
    }
`;

const DesignIcon = styled(MdDesignServices)`
    color: var(--light-green);
    font-size: 4.5rem;
    transition: transform 300ms;
    
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.md} {
        font-size: 5rem;
    }
`;

const PaintIcon = styled(FaPaintBrush)`
    color: var(--light-green);
    font-size: 4.5rem;
    transition: transform 300ms;
    
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.md} {
        font-size: 5rem;
    }
`;

const WebsiteIcon = styled(CgWebsite)`
    color: var(--light-green);
    font-size: 4.5rem;
    transition: transform 300ms;
    
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.md} {
        font-size: 6rem;
    }
`;



const WorkSteps = () => {
    return ( 
        <WorkStyleContainer>
            <div className="work-header">
                <h2>How We Work With You</h2>
                <p>Working with us is effortless because our process is organized and efficient</p>
            </div>
            <div className="work-content">
                <div>
                    <p>First we schedule a call</p>
                    <ScheduleIcon />
                </div>
                <div>
                    <p>Second, we speak about your business goals and current website challanges</p>
                    <VideoIcon />
                </div>
                <div>
                    <p>Third, we show you our mock up design</p>
                    <DesignIcon />
                </div>
                <div>
                    <p>Then, we show you the first design complete and wait for your input on the finishing touches</p>
                    <PaintIcon />
                </div>
                <div>
                    <p>Finally, your website will have been completed and released so the whole world can see it!</p>
                    <WebsiteIcon />
                </div>
            </div>
        </WorkStyleContainer>
    )
}

export default WorkSteps;