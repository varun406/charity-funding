import { ethers } from "ethers";
import React, { useState } from "react";
import styled from "styled-components";
import AddCampaign from "../components/add-campaign/AddCampaign";
import DonationSection from "../components/donation-section/DonationSection";
import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [openAddCampaign, setOpenAddCampaign] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const abi = [
    {
      inputs: [
        {
          internalType: "address payable",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "charityName",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "desc",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "releaseTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "target",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "canWithdraw",
          type: "bool",
        },
      ],
      name: "addCampaign",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "availableToWithdraw",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "addr",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "contractBalance",
          type: "uint256",
        },
      ],
      name: "LogCampaignFundingReceived",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "campaigns",
      outputs: [
        {
          internalType: "address payable",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "charityName",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "desc",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "releaseTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "target",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "canWithdraw",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMembers",
      outputs: [
        {
          components: [
            {
              internalType: "address payable",
              name: "walletAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "charityName",
              type: "string",
            },
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "desc",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "releaseTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "target",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "canWithdraw",
              type: "bool",
            },
          ],
          internalType: "struct CryptoKids.Campaign[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const address = "0xb794B0fF057C674743572934D8e2fA14cda3d385";

  const contract = new ethers.Contract(address, abi, signer);

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Intro />
        <DonationSection
          setOpenAddCampaign={setOpenAddCampaign}
          contract={contract}
        />
        {openAddCampaign && (
          <AddCampaign
            setOpenAddCampaign={setOpenAddCampaign}
            contract={contract}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100vw;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  width: min(1080px, calc(100% - 3rem));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
