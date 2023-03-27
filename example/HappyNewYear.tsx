import React from 'react';

import * as Mjml from '../dist';

export const HappyNewYear: React.FC = () => {
  return (
    <Mjml.Mjml>
      <Mjml.MjBody backgroundColor="#F4F4F4">
        <Mjml.MjSection backgroundColor="#C1272D" padding="20px 0" textAlign="center">
          <Mjml.MjColumn>
            <Mjml.MjImage
              align="center"
              padding="10px 25px"
              src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3k4.png"
              width="128px"
            />
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#ffffff" padding="20px 0" textAlign="center">
          <Mjml.MjColumn>
            <Mjml.MjImage
              align="center"
              padding="10px 25px"
              src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3s5.gif"
              width="600px"
            />
            <Mjml.MjImage
              align="center"
              alt="Happy New Year!"
              containerBackgroundColor="#ffffff"
              padding="10px 25px"
              src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlvp.png"
              width="399px"
            />
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#ffffff" padding="20px 0px" textAlign="center">
          <Mjml.MjColumn>
            <Mjml.MjText align="center" color="#55575d" fontSize="14px" lineHeight="28px" padding="0px 25px">
              New dreams, new hopes, new experiences and new joys, we wish you all the best for this New Year to come in
              2018!
            </Mjml.MjText>
            <Mjml.MjImage
              align="center"
              alt="Best wishes from all the Clothes Team!"
              padding="10px 25px"
              src="http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlv8.png"
              width="142px"
            />
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#C1272D" padding="20px 0" textAlign="center">
          <Mjml.MjColumn>
            <Mjml.MjText align="center" color="#ffffff" fontSize="13px" lineHeight="22px" padding="10px 25px">
              Simply created&nbsp;on&nbsp;
              <a style={{ color: '#ffffff' }} href="http://www.mailjet.com">
                <b>Mailjet Passport</b>
              </a>
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundSize="auto" padding="20px 0px" textAlign="center">
          <Mjml.MjColumn>
            <Mjml.MjText align="center" color="#55575d" fontSize="11px" lineHeight="22px" padding="0px 20px">
              [[DELIVERY_INFO]]
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>
      </Mjml.MjBody>
    </Mjml.Mjml>
  );
};
