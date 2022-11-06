import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [avatar, setAvatar] = useState("");
  const [useraddress, setAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  async function getbalance() {
    try {
      //NOTE: CHECKING METAMASK
      const { ethereum } = window;
      ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setAddress(res[0]);
      });

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
              name: "firstName",
              type: "string",
            },
            {
              internalType: "string",
              name: "lastName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "releaseTime",
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
          name: "addKid",
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
          name: "LogKidFundingReceived",
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
                  name: "firstName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "lastName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "releaseTime",
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
              internalType: "struct CryptoKids.Kid[]",
              name: "",
              type: "tuple[]",
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
          name: "kids",
          outputs: [
            {
              internalType: "address payable",
              name: "walletAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "firstName",
              type: "string",
            },
            {
              internalType: "string",
              name: "lastName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "releaseTime",
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
      ];

      const address = "0xf1a910807DAd0d10890Ed17645f231C572c0De4d";

      const contract = new ethers.Contract(address, abi, signer);

      const accounts = await provider.send("eth_requestAccounts", []);
      const balance = await provider.getBalance(accounts[0]);

      setWalletBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getbalance();
    setAvatar(`https://api.multiavatar.com/${useraddress}.svg`);
  }, [useraddress]);

  return (
    <Container>
      <LogoSection>
        <Logo src="./assets/logo.jpg" alt="logo" />
      </LogoSection>
      <AccountSection>
        {useraddress ? (
          <UserData>
            <WalletData>
              <Address>{`${walletBalance.substring(
                0,
                3
              )}ETH -  ${useraddress.substring(0, 6)}...${useraddress.substring(
                13,
                19
              )}`}</Address>
            </WalletData>

            <Avatar src={avatar} alt="avatar" />
          </UserData>
        ) : (
          <Login onClick={getbalance}>Login</Login>
        )}
      </AccountSection>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSection = styled.div``;
const WalletData = styled.div`
  padding: 10px;
  background-color: gray;
  border-radius: 20px;
`;
const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Login = styled.button`
  width: 50px;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const AccountSection = styled.div``;

const Address = styled.p`
  color: white;
  font-weight: 500;
`;

const Avatar = styled(Logo)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
