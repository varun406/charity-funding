import { ethers } from "ethers";
import React, { useState } from "react";
import styled from "styled-components";

const Intro = () => {
  const [userAddress, setUserAddress] = useState("");

  function handleClick() {
    const { ethereum } = window;
    ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      console.log(userAddress);
      setUserAddress(res[0]);
    });
  }

  // async function getbalance() {
  //   try {
  //     const accounts = await provider.send("eth_requestAccounts", []);
  //     const balance = await provider.getBalance(accounts[0]);
  //     setWalletBalance(ethers.utils.formatEther(balance));

  //     contract.getMembers().then((res) => console.log(res));

  //     contract
  //       .balanceOf()
  //       .then((res) => setbal(parseInt(res) / 1000000000000000000)); //NOTE: BALANCE
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }

  // function add() {
  //   //NOTE: ADD CHARITY
  //   contract.addKid(
  //     "0x5bDb7f0E9e681aC21C91186Bc2B5272f36feCCB5",
  //     "varun",
  //     "patel",
  //     "1665593344",
  //     "0",
  //     "true"
  //   );
  // }

  // function withdraw() {
  //   //NOTE: WITHDRAW
  //   contract.withdraw(userAddress);
  // }

  // function deposit() {
  //   contract.deposit("0x8Ff43F23915F4329741C25DB5C71AF53138cc997", {
  //     //NOTE: DEPOSIT
  //     value: ethers.utils.parseEther("2.5"),
  //   });
  // }

  return (
    <Container>
      <Wrapper>
        <BgImage src="./assets/helping.jpg" />
        <HeadingGroup>
          <Title>Helping Millions</Title>
          <Content>Fighting isolation & proverty</Content>
        </HeadingGroup>
      </Wrapper>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: green;
`;

const HeadingGroup = styled.div`
  width: 50%;
  z-index: 9;
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
  font-family: "Inter", sans-serif;
`;

const Content = styled.h3`
  width: 60%;
  font-size: 2.6rem;
  font-weight: 500;
  font-family: "Pacifico", cursive;
`;
const BgImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 999;
  object-fit: cover;
`;
