import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DonationCard from "../donation-card/DonationCard";

const DonationSection = ({ setOpenAddCampaign, contract }) => {
  const [getCampaigns, setCampaigns] = useState();

  useEffect(() => {
    async function getCampaign() {
      setCampaigns(await contract.getMembers());
    }
    getCampaign();
  }, [contract]);

  return (
    <Container>
      <Wrapper>
        <HeaderSection>
          <Heading>All Campaigns</Heading>
          <AddCampaign onClick={() => setOpenAddCampaign(true)}>
            + Add Campaign
          </AddCampaign>
        </HeaderSection>

        {getCampaigns && (
          <CardSection>
            <DonationCard CampaignData={getCampaigns} contract={contract} />
          </CardSection>
        )}
      </Wrapper>
    </Container>
  );
};

export default DonationSection;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1``;
const AddCampaign = styled.button`
  width: 140px;
  height: 30px;
  background-color: #2979f2;
  color: white;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 0;
`;
