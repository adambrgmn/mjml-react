import React from 'react';

import * as Mjml from '../dist';

export const Austin: React.FC = () => {
  return (
    <Mjml.Mjml>
      <Mjml.MjHead>
        <Mjml.MjTitle>Discount Light</Mjml.MjTitle>
        <Mjml.MjPreview>Pre-header Text</Mjml.MjPreview>
        <Mjml.MjAttributes>
          <Mjml.MjAll fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" />
          <Mjml.MjText
            fontWeight="400"
            fontSize="16px"
            color="#000000"
            lineHeight="24px"
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          />
        </Mjml.MjAttributes>
        <Mjml.MjStyle
          inline
          css={Mjml.css`
            .body-section {
              -webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
              -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
              box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
            }
          `}
        />
        <Mjml.MjStyle
          inline
          css={Mjml.css`
            .text-link {
              color: #5e6ebf;
            }
          `}
        />
        <Mjml.MjStyle
          inline
          css={Mjml.css`
            .footer-link {
              color: #888888;
            }
          `}
        />
      </Mjml.MjHead>

      <Mjml.MjBody backgroundColor="#E7E7E7" width="600px">
        <Mjml.MjSection fullWidth="full-width" backgroundColor="#040B4F" paddingBottom="0">
          <Mjml.MjColumn>
            <Mjml.MjImage
              src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544153577/Email/Images/AnnouncementOffset/crofts-white.png"
              alt=""
              align="center"
              width="150px"
            />
            <Mjml.MjText
              color="#ffffff"
              fontWeight="bold"
              align="center"
              textTransform="uppercase"
              fontSize="16px"
              letterSpacing="1px"
              paddingTop="30px"
            >
              Austin, TX
              <br />
              <span style={{ color: '#979797', fontWeight: 'normal' }}>-</span>
            </Mjml.MjText>
            <Mjml.MjText
              color="#17CBC4"
              align="center"
              fontSize="13px"
              paddingTop="0"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1px"
              lineHeight="20px"
            >
              Austin Convention Center
              <br />
              123 Main Street, 78701
            </Mjml.MjText>
            <Mjml.MjImage
              src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-top.png"
              width="600px"
              alt=""
              padding="0"
              href="https://google.com"
            />
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#1f2e78">
          <Mjml.MjColumn>
            <Mjml.MjImage
              src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-bottom.png"
              width="600px"
              alt=""
              padding="0"
              href="https://google.com"
            />
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjWrapper paddingTop="0" paddingBottom="0" className="body-section">
          <Mjml.MjSection backgroundColor="#ffffff" padding="0 15px">
            <Mjml.MjColumn>
              <Mjml.MjText color="#212b35" fontWeight="bold" fontSize="20px">
                Croft's in Austin is opening December 20th
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px">
                Hi Jane,
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia a assumenda nulla in quisquam optio
                quibusdam fugiat perspiciatis nobis, ad tempora culpa porro labore. Repudiandae accusamus obcaecati
                voluptatibus accusantium perspiciatis.
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px">
                Tempora culpa porro labore. Repudiandae accusamus obcaecati voluptatibus accusantium perspiciatis:
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px">
                <ul>
                  <li style={{ paddingBottom: 20 }}>
                    <strong>Lorem ipsum dolor:</strong> Sit amet consectetur adipisicing elit.
                  </li>
                  <li style={{ paddingBottom: 20 }}>
                    <strong>Quia a assumenda nulla:</strong> Repudiandae accusamus obcaecati voluptatibus accusantium
                    perspiciatis.
                  </li>
                  <li>
                    <strong>Tempora culpa porro labore:</strong> In quisquam optio quibusdam fugiat perspiciatis nobis.
                  </li>
                </ul>
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px" paddingBottom="30px">
                Lorem ipsum dolor{' '}
                <a className="text-link" href="https://google.com">
                  sit amet consectetur
                </a>{' '}
                adipisicing elit. Earum eaque sunt nulla in, id eveniet quae unde ad ipsam ut, harum autem porro
                reiciendis minus libero illo. Vero, fugiat reprehenderit.
              </Mjml.MjText>
              <Button href="https://google.com">RSVP Today</Button>
              <Button href="https://google.com">Book an Appointment</Button>
              <Mjml.MjText color="#637381" fontSize="16px" paddingTop="30px">
                Lorem ipsum dolor{' '}
                <a className="text-link" href="https://google.com">
                  sit amet consectetur
                </a>{' '}
                adipisicing elit. Earum eaque sunt nulla in, id eveniet quae unde ad ipsam ut, harum autem porro
                reiciendis minus libero illo. Vero, fugiat reprehenderit.
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px" paddingBottom="0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Mjml.MjText>
            </Mjml.MjColumn>
          </Mjml.MjSection>

          <Mjml.MjSection backgroundColor="#ffffff" paddingLeft="15px" paddingRight="15px" paddingTop="0">
            <Mjml.MjColumn>
              <Mjml.MjImage
                align="center"
                src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544153577/Email/Images/AnnouncementOffset/Image_1.png"
                alt=""
              />
            </Mjml.MjColumn>
            <Mjml.MjColumn>
              <Mjml.MjImage
                align="center"
                src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544153578/Email/Images/AnnouncementOffset/Image_2.png"
                alt=""
              />
            </Mjml.MjColumn>
          </Mjml.MjSection>

          <Mjml.MjSection backgroundColor="#ffffff" paddingLeft="15px" paddingRight="15px" paddingTop="0">
            <Mjml.MjColumn>
              <Mjml.MjDivider borderColor="#DFE3E8" borderWidth="1px" />
            </Mjml.MjColumn>
          </Mjml.MjSection>

          <Mjml.MjSection backgroundColor="#ffffff" padding="0 15px 0 15px">
            <Mjml.MjColumn>
              <Mjml.MjText color="#212b35" fontWeight="bold" fontSize="20px" paddingBottom="0">
                Come see us!
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="16px">
                We're looking forward to meeting you.
              </Mjml.MjText>
            </Mjml.MjColumn>
          </Mjml.MjSection>

          <Mjml.MjSection backgroundColor="#ffffff" paddingLeft="15px" paddingRight="15px">
            <Mjml.MjColumn>
              <Mjml.MjText
                color="#212b35"
                fontSize="12px"
                textTransform="uppercase"
                fontWeight="bold"
                paddingBottom="0"
              >
                Address
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="14px" paddingTop="0">
                Austin Convention Center
                <br />
                123 Main Street, 78701
              </Mjml.MjText>
            </Mjml.MjColumn>
            <Mjml.MjColumn>
              <Mjml.MjText
                color="#212b35"
                fontSize="12px"
                textTransform="uppercase"
                fontWeight="bold"
                paddingBottom="0"
              >
                Hours of Operation
              </Mjml.MjText>
              <Mjml.MjText color="#637381" fontSize="14px" paddingTop="0">
                Monday, December 20th: 8:00AM - 5:00PM
                <br />
                Tuesday, December 21st: 8:00AM - 5:00PM
              </Mjml.MjText>
            </Mjml.MjColumn>
          </Mjml.MjSection>

          <Mjml.MjSection backgroundColor="#ffffff" paddingLeft="15px" paddingRight="15px">
            <Mjml.MjColumn>
              <Mjml.MjImage
                src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544153579/Email/Images/AnnouncementOffset/map.jpg"
                alt=""
              />
            </Mjml.MjColumn>
          </Mjml.MjSection>
        </Mjml.MjWrapper>

        <Mjml.MjWrapper fullWidth="full-width">
          <Mjml.MjSection>
            <Mjml.MjColumn padding="0">
              <Mjml.MjSocial fontSize="15px" iconSize="30px" mode="horizontal" padding="0" align="center">
                <Mjml.MjSocialElement name="facebook" href="https://Mjml.Mjml.io/" backgroundColor="#A1A0A0" />
                <Mjml.MjSocialElement name="google" href="https://mjml.io/" backgroundColor="#A1A0A0" />
                <Mjml.MjSocialElement name="twitter" href="https://mjml.io/" backgroundColor="#A1A0A0" />
                <Mjml.MjSocialElement name="linkedin" href="https://mjml.io/" backgroundColor="#A1A0A0" />
              </Mjml.MjSocial>
              <Mjml.MjText color="#445566" fontSize="11px" fontWeight="bold" align="center">
                View this email in your browser
              </Mjml.MjText>
              <Mjml.MjText color="#445566" fontSize="11px" align="center" lineHeight="16px">
                You are receiving this email advertisement because you registered with Croft's Accountants. (123 Main
                Street, Austin, TX 78701) and agreed to receive emails from us regarding new features, events and
                special offers.
              </Mjml.MjText>
              <Mjml.MjText color="#445566" fontSize="11px" align="center" lineHeight="16px">
                &copy; Croft's Accountants Inc., All Rights Reserved.
              </Mjml.MjText>
            </Mjml.MjColumn>
          </Mjml.MjSection>

          <Mjml.MjSection paddingTop="0">
            <Mjml.MjGroup>
              <Mjml.MjColumn paddingRight="0">
                <Mjml.MjText color="#445566" fontSize="11px" align="center" lineHeight="16px" fontWeight="bold">
                  <a className="footer-link" href="https://www.google.com">
                    Privacy
                  </a>
                  &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
                  <a className="footer-link" href="https://www.google.com">
                    Unsubscribe
                  </a>
                </Mjml.MjText>
              </Mjml.MjColumn>
            </Mjml.MjGroup>
          </Mjml.MjSection>
        </Mjml.MjWrapper>
      </Mjml.MjBody>
    </Mjml.Mjml>
  );
};

const Button: React.FC<{ href?: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Mjml.MjButton
      backgroundColor="#5e6ebf"
      align="center"
      color="#ffffff"
      fontSize="17px"
      fontWeight="bold"
      href={href}
      width="300px"
    >
      {children}
    </Mjml.MjButton>
  );
};
