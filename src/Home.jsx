import banner from "./assets/banners.png";
import { Divider, Button, Link } from "@chakra-ui/react";
import {
  GiDeliveryDrone,
  GiVideoConference,
  GiVirtualMarker,
  GiSoundWaves,
  GiMusicSpell,
  GiTeamIdea,
  GiStripedSun,
} from "react-icons/gi";
import {
  IoShareSocialOutline,
  IoVideocamOutline,
  IoMicCircle,
} from "react-icons/io5";

export const Home = () => {
  return (
    <div>
      <div>
        <div className="container">
          <img src={banner} />
          <h1 className="container-h1">
            A FULL-SERVICE VIDEO PRODUCTION COMPANY SERVING BUSINESSES ACROSS
            ORANGE COUNTY
          </h1>
          <span className="container-span">
            Helping small businesses use the power of video to share the best of
            what they do with the world.
          </span>
          <div className="home-button">
            <Button
              width="50%"
              height="50%"
              backgroundColor="rgb(243, 189, 77)"
            >
              LEARN MORE
            </Button>
          </div>
        </div>

        <div className="container-body">
          <div className="container-head">
            <h1>VIDEO STORYTELLING FOR YOUR BRAND</h1>
            <hr />
            <div>
              <span>
                A local leader in business video production, Ideal Video
                Strategies uses storytelling, skill, and industry savvy to
                ensure that your video marketing investment gets results.
              </span>
            </div>
          </div>
          <iframe
            className="video-container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="container-head">
            <span>
              Our professional, proactive, and thorough approach makes the
              process easy and worry-free. We serve as a single point of contact
              for everything related to your video. From the initial planning
              meeting to the delivery of your final files, we’re your creative
              partner every step of the way. You can feel confident that your
              video will meet the requirements for sponsored advertising on
              social channels, highlight your product or service professionally,
              or include stunning drone imagery captured while meeting all FAA
              regulations.
            </span>
          </div>
          <div className="container-button">
            <div>
              <h2>
                Let's get your video idea out of your head and into the world!
              </h2>
            </div>
            <Button
              width="100%"
              height="100%"
              backgroundColor="rgb(243, 189, 77)"
            >
              CONTACT US
            </Button>
          </div>
        </div>
        <div className="container">
          <div className="container-head">
            <h1>OUR VALUES</h1>
            <hr />
            <div className="container-body">
              <div className="item-container">
                <h2>COLLABORATION</h2>
                <span>
                  We treat each client relationship as a partnership, knowing
                  that the best outcomes happen when your ideas and our
                  experience come together. We respect your time, your input,
                  and your vision at every stage of the process.
                </span>
              </div>
              <div className="item-container">
                <h2>STORYTELLING</h2>
                <span>
                  Story is why we do what we do. We are skilled at drawing the
                  best stories out of our clients, weaving them together to
                  create multilayered, authentic narratives. Achieving emotional
                  connection and clarity are key to a successful video.
                </span>
              </div>
              <div className="item-container">
                <h2>TRANSPARENCY</h2>
                <span>
                  From our first call to the moment we deliver your final video,
                  you’ll always know what to expect. We are committed to always
                  answering questions promptly and clearly. Proactive
                  communication is a key component of our approach.
                </span>
              </div>
              <div className="item-container">
                <h2>DEPENDABILITY</h2>
                <span>
                  Professionalism matters. We do everything we can to make your
                  experience easy and worry-free. On shoot days, we show up on
                  time, fully prepared, and ready for action. Throughout the
                  editing stage, we deliver drafts on time and with all of your
                  feedback carefully incorporated.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-head">
            <h1>OUR SERVICES</h1>
            <hr />

            <div className="container-body">
              <ul className="item-block">
                <span>
                  Imagine the messages you could share with the help of our
                  professional video production expertise. Our specialties
                  include:
                </span>
                <div className="item">
                  <GiVideoConference
                    color="rgb(243, 189, 77)"
                    fontSize="1.5em"
                  />
                  <span className="item-span">Marketing Video</span>
                </div>
                <div className="item">
                  <IoShareSocialOutline
                    color="rgb(243, 189, 77)"
                    fontSize="1.5em"
                  />
                  <span className="item-span">Video for Social Channels</span>
                </div>
                <div className="item">
                  <IoVideocamOutline
                    color="rgb(243, 189, 77)"
                    fontSize="1.5em"
                  />
                  <span className="item-span">Video Editing</span>
                </div>
                <div className="item">
                  <GiVirtualMarker color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Virtual Events</span>
                </div>
                <div className="item">
                  <GiVideoConference
                    color="rgb(243, 189, 77)"
                    fontSize="1.5em"
                  />
                  <span className="item-span">Motion Graphics</span>
                </div>
                <div className="item">
                  <GiStripedSun color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Logo Animation</span>
                </div>
                <div className="item">
                  <GiSoundWaves color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Voice Over Talent</span>
                </div>
                <div className="item">
                  <GiMusicSpell color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Music Selection</span>
                </div>
                <div className="item">
                  <GiDeliveryDrone color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Aerial Video</span>
                </div>
                <div className="item">
                  <GiTeamIdea color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Interview Facilitation</span>
                </div>
                <div className="item">
                  <IoMicCircle color="rgb(243, 189, 77)" fontSize="1.5em" />
                  <span className="item-span">Podcast Editing</span>
                </div>
              </ul>

              <div className="button-wrapper">
                <div className="container-button">
                  <Button
                    width="100%"
                    height="50%"
                    backgroundColor="rgb(243, 189, 77)"
                  >
                    VIDEO MARKETING
                  </Button>
                </div>
                <div className="container-button">
                  <Button
                    width="100%"
                    height="50%"
                    backgroundColor="rgb(243, 189, 77)"
                  >
                    AERIAL VIDEO & PHOTO
                  </Button>
                </div>
                <div className="container-button">
                  <Button
                    width="100%"
                    height="50%"
                    backgroundColor="rgb(243, 189, 77)"
                  >
                    VIDEO EDITING
                  </Button>
                </div>

                <div className="container-button">
                  <Button
                    width="100%"
                    height="50%"
                    backgroundColor="rgb(243, 189, 77)"
                  >
                    LET'S DISCUSS YOUR VIDEO STRATEGY!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-head">
            <h1>FEATURED VIDEO PROJECTS</h1>
            <hr />
            <div className="iframe-wrapper">
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <span>Sigma Creative Studios | </span>
          <span>Email Us | </span>
          <span>(714) 251-0160</span>
        </div>
        <div className="footer-item">
          <ul>
            <li>About</li>
            <li>Process</li>
            <li>Video Marketing</li>
            <li>Aerial Video & Photo</li>
            <li>Video Editing</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
