import React, { useState } from "react";
import styled from "styled-components";
// import { CancelIcon } from "@mui/icons-material";

const AddCampaign = ({ setOpenAddCampaign, contract }) => {
  const [campaign, setCampaign] = useState({
    address: "",
    charityName: "",
    title: "",
    desc: "",
    endTime: "",
    targetETH: "",
    raised: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCampaign((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    await contract.addCampaign(
      campaign.address,
      campaign.charityName,
      campaign.title,
      campaign.desc,
      campaign.endTime,
      campaign.targetETH,
      "0",
      true
    );
    setOpenAddCampaign(false);
  };

  return (
    <Container>
      <Wrapper>
        <SleepEntryForm>
          <CancelButton onClick={() => setOpenAddCampaign(false)}>
            X
          </CancelButton>
          <InputWrapper>
            <InputLabel>Address</InputLabel>
            <SleepDurationInput
              onChange={handleChange}
              name="address"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Charity Name</InputLabel>
            <SleepDurationInput
              onChange={handleChange}
              name="charityName"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Title</InputLabel>
            <SleepDurationInput
              onChange={handleChange}
              name="title"
              type="text"
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Description</InputLabel>
            <SleepDurationInput
              onChange={handleChange}
              name="desc"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>End Time</InputLabel>
            <SleepDurationInput
              onChange={handleChange}
              name="endTime"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Total ETH</InputLabel>
            <SleepDurationInput
              onChange={handleChange}
              name="targetETH"
              type="number"
            />
          </InputWrapper>
        </SleepEntryForm>
        <ButtonSection>
          <SubmitButton onClick={handleClick}>Submit</SubmitButton>
        </ButtonSection>
      </Wrapper>
    </Container>
  );
};

export default AddCampaign;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  transition: all 0.25s linear;
  z-index: 999;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #232830;
  border-radius: 15px;
  gap: 10px;
`;

export const SleepEntryForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//labels
export const InputLabel = styled.label`
  width: 135px;
  font-weight: bold;
  font-size: 16px;
`;

//inputs

export const SleepTimePicker = styled.input`
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: 2px solid rgba(80, 80, 80, 0.5);
  padding: 5px;
  font-weight: 500;
  font-size: 16px;
  background-color: #1b1f28;
  color: white;
`;
export const WakeUpTimePicker = styled(SleepTimePicker)``;
export const SleepDurationInput = styled(SleepTimePicker)``;

//buttons

export const SubmitButton = styled.button`
  color: #e8eaeb;
  background-color: #2979f2;
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  border-radius: 25px;
`;
export const CancelButton = styled.button`
  position: absolute;
  top: 0px;
  right: 13px;
  font-weight: bold;
  font-size: 30px;
  background-color: transparent;
  color: gray;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    scale: 1.2;
  }
`;
