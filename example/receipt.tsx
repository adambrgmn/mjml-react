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
              align="center"
              border="none"
              width="100px"
              paddingLeft="0px"
              paddingRight="0px"
              paddingBottom="10px"
              paddingTop="10px"
            />
            <Mjml.MjImage
              src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qz.png"
              alt=""
              align="center"
              border="none"
              width="200px"
              paddingLeft="0px"
              paddingRight="0px"
              paddingBottom="0px"
              paddingTop="0px"
            />
          </Mjml.MjColumn>
        </Mjml.MjSection>
        <Mjml.MjSection backgroundColor="#356cc7" paddingBottom="0px" paddingTop="0px">
          <Mjml.MjColumn width="100%">
            <Mjml.MjText
              align="center"
              fontSize="13px"
              color="#ABCDEA"
              fontFamily="Ubuntu, Helvetica, Arial, sansSerif"
              paddingLeft="25px"
              paddingRight="25px"
              paddingBottom="18px"
              paddingTop="28px"
            >
              HELLO
              <p style={{ fontSize: '16px', color: 'white' }}>[[FirstName]]</p>
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>
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
              fontSize="13px"
              fontFamily="Helvetica"
              paddingLeft="25px"
              paddingRight="25px"
              paddingBottom="28px"
              paddingTop="28px"
            >
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Thank you very much for your purchase.</span>
              <br />
              <span style={{ fontSize: '15px' }}>Please find the receipt below.</span>
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>
        <Mjml.MjSection backgroundColor="#568feb" paddingBottom="15px">
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
              <strong>Order Number</strong>
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
              [[OrderNumber]]
            </Mjml.MjText>
          </Mjml.MjColumn>
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
              <strong>Order Date</strong>
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
              [[OrderDate]]
            </Mjml.MjText>
          </Mjml.MjColumn>
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
              <strong>Total Price</strong>
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
              [[TotalPrice]]
            </Mjml.MjText>
          </Mjml.MjColumn>
        </Mjml.MjSection>
        <Mjml.MjSection backgroundColor="#356CC7" paddingBottom="20px" paddingTop="20px">
          <Mjml.MjColumn width="50%">
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
              paddingBottom="10px"
            >
              Download Receipt
            </Mjml.MjButton>
          </Mjml.MjColumn>
          <Mjml.MjColumn width="50%">
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
              Track My Order
            </Mjml.MjButton>
          </Mjml.MjColumn>
        </Mjml.MjSection>
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
      </Mjml.MjBody>
    </Mjml.Mjml>
  );
};
