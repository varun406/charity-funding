import { AccessTimeFilled, People } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";

const DonationCard = ({ CampaignData, contract }) => {
  const donateButton = async (currentAddress) => {
    await contract.deposit(currentAddress);
  };

  return (
    <>
      {CampaignData.map((data) => {
        return (
          <Container>
            <Wrapper>
              <ImageSection src="https://agcdn-2mrybbgckm7omi0k.netdna-ssl.com/wp-content/uploads/2017/06/alphagamma-3-reasons-why-helping-people-is-not-always-good-for-business-entrepreneurship-1021x580.jpg" />
              <InfoSection>
                <TitleSection>
                  <DonationTitle>{data?.title}</DonationTitle>
                  <AuthorSection>
                    <AuthorAvatar
                      src={`https://api.multiavatar.com/${data?.charityName}.svg`}
                    />
                    <AuthorName>{data?.charityName}</AuthorName>
                  </AuthorSection>
                </TitleSection>

                <EthereumSection>
                  <Labels>
                    <TargetLabel>Target</TargetLabel>
                    <RaisedLabel>Raised</RaisedLabel>
                  </Labels>
                  <Eth>
                    <Target>
                      {parseInt(data?.target)}
                      <span>
                        <EthLogo src="./assets/eth-logo.svg" />
                      </span>
                    </Target>
                    <LinearProgress
                      sx={{
                        width: "150px",
                        height: "7px",
                        borderRadius: "10px",
                      }}
                      variant="determinate"
                      value={
                        (parseInt(data?.amount) /
                          1000000000000000000 /
                          parseInt(data?.target)) *
                        100
                      }
                    />
                    <Raised>
                      {parseInt(data?.amount) / 1000000000000000000}

                      <span>
                        <EthLogo src="./assets/eth-logo.svg" />
                      </span>
                    </Raised>
                  </Eth>
                </EthereumSection>
                <TimeSection>
                  <DaysLeft>
                    <AccessTimeFilled />
                    06 Days left
                  </DaysLeft>
                  <PeopleDonated>
                    <People />3
                  </PeopleDonated>
                </TimeSection>
                <ButtonSection>
                  <EthInput type="number" placeholder="Enter Eth..." />
                  <DonateButton
                    onClick={() => donateButton(data?.walletAddress)}
                  >
                    Donate
                  </DonateButton>
                </ButtonSection>
              </InfoSection>
            </Wrapper>
          </Container>
        );
      })}
    </>
  );
};

export default DonationCard;

const Container = styled.div`
  width: 250px;
  height: 350px;
  display: grid;
  place-items: center;
  /* border: 5px solid #eaf3fa; */
`;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #eaf3fa;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ImageSection = styled.img`
  width: 100%;
  height: 100%;
  flex: 1;
  object-fit: cover;
  background-color: yellow;
`;

const InfoSection = styled.div`
  width: 230px;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DonationTitle = styled(TitleSection)`
  font-size: 16px;
  font-weight: bold;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const AuthorAvatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const AuthorName = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

const Labels = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TargetLabel = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
const RaisedLabel = styled(TargetLabel)``;

const EthereumSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Eth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const EthLogo = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Target = styled.h1`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Raised = styled(Target)``;

const TimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DaysLeft = styled(TimeSection)`
  font-size: 14px;
  font-weight: bold;
  gap: 5px;
`;
const PeopleDonated = styled(DaysLeft)`
  font-size: 14px;
  font-weight: bold;

  gap: 5px;
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DonateButton = styled.button`
  width: 300px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border-radius: 20px;
  background-color: #3b7fd2;
  outline: none;
  border: none;
`;

const EthInput = styled.input`
  width: 200px;
  height: 30px;
  border-right: none;
  padding: 5px;
  border-radius: 7px;
  font-weight: 500;
  outline: none;
`;
