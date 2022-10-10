import React from 'react';

import * as Mjml from '../dist';

export const Receipt: React.FC = () => {
  return (
    <Mjml.Mjml>
      <Mjml.MjBody backgroundColor="#ccd3e0">
        <Mjml.MjSection backgroundColor="#fff" paddingBottom="20px" paddingTop="20px">
          <Mjml.MjColumn width="100%">
            <Mjml.MjImage
              src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qi.png"
              alt=""
              width="100px"
              padding="10px 0"
            />
            <Mjml.MjImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qz.png" alt="" width="200px" />
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#356cc7" paddingBottom="0px" paddingTop="0px">
          <Mjml.MjColumn width="100%">
            <Mjml.MjText align="center" fontSize="13px" color="#abcdea" padding="28px 25px 0">
              HELLO
            </Mjml.MjText>
            <Mjml.MjText fontSize="16px" color="white" align="center" paddingBottom="18px">
              [[FirstName]]
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#356cc7" paddingBottom="5px" paddingTop="0px">
          <Mjml.MjColumn width="100%">
            <Mjml.MjDivider borderColor="#ffffff" borderWidth="2px" padding="0 20px" />
            <Mjml.MjText align="center" color="#ffffff" fontSize="20px" padding="28px 25px 10px" fontWeight="bold">
              Thank you very much for your purchase.
            </Mjml.MjText>
            <Mjml.MjText align="center" color="#ffffff" fontSize="15px" padding="0 25px 28px">
              Please find the receipt below.
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#568feb" paddingBottom="15px">
          <InfoColumn title="Order Number" content="[[OrderNumber]]" />
          <InfoColumn title="Order Date" content="[[OrderDate]]" />
          <InfoColumn title="Total Price" content="[[TotalPrice]]" />
        </Mjml.MjSection>

        <Mjml.MjSection backgroundColor="#356CC7" paddingBottom="20px" paddingTop="20px">
          <Mjml.MjColumn>
            <Button>Download Receipt</Button>
          </Mjml.MjColumn>
          <Mjml.MjColumn>
            <Button>Track My Order</Button>
          </Mjml.MjColumn>
        </Mjml.MjSection>

        <Footer />
      </Mjml.MjBody>
    </Mjml.Mjml>
  );
};

const Footer = () => {
  return (
    <Mjml.MjSection backgroundColor="#356cc7" paddingBottom="5px" paddingTop="0px">
      <Mjml.MjColumn width="100%">
        <Mjml.MjDivider
          borderColor="#ffffff"
          borderWidth="2px"
          borderStyle="solid"
          paddingLeft="20px"
          paddingRight="20px"
          paddingBottom="0px"
          paddingTop="0px"
        />
        <Mjml.MjText
          align="center"
          color="#FFF"
          fontSize="15px"
          fontFamily="Helvetica"
          paddingLeft="25px"
          paddingRight="25px"
          paddingBottom="20px"
          paddingTop="20px"
        >
          Best,
          <br />
          <span style={{ fontSize: '15px' }}>The [[CompanyName]] Team</span>
        </Mjml.MjText>
      </Mjml.MjColumn>
    </Mjml.MjSection>
  );
};

const InfoColumn: React.FC<{ title: React.ReactNode; content: React.ReactNode }> = ({ title, content }) => {
  return (
    <Mjml.MjColumn>
      <Mjml.MjText
        align="center"
        color="#FFF"
        fontSize="15px"
        fontFamily="Ubuntu, Helvetica, Arial, sansSerif"
        paddingLeft="25px"
        paddingRight="25px"
        paddingBottom="0px"
      >
        <strong>{title}</strong>
      </Mjml.MjText>
      <Mjml.MjText
        align="center"
        color="#FFF"
        fontSize="13px"
        fontFamily="Helvetica"
        paddingLeft="25px"
        paddingRight="25px"
        paddingBottom="20px"
        paddingTop="10px"
      >
        {content}
      </Mjml.MjText>
    </Mjml.MjColumn>
  );
};

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Mjml.MjButton
      backgroundColor="#ffae00"
      color="#FFF"
      fontSize="14px"
      align="center"
      fontWeight="bold"
      border="none"
      padding="15px 30px"
      borderRadius="10px"
      href="https://mjml.io"
      fontFamily="Helvetica"
      paddingLeft="25px"
      paddingRight="25px"
      paddingBottom="12px"
    >
      {children}
    </Mjml.MjButton>
  );
};
