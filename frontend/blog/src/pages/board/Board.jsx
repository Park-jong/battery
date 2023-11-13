import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BatteryBoard from "./BatteryBoard";
import ChatComponent from "../../components/chatbot/ChatComponent";
import RegisterReason from "../../components/analysis/RegistReason";
import BMSData from "../../components/analysis/BMSdata";
import AnalysisResult from "../../components/analysis/AnalysisResult";
import RegistResult from "../../components/analysis/RegistResult";
import { BiLineChart } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { IsLoginState } from "../../states/states";
import FirebaseComponent from "../../config/firebase-messaging-sw";
import SideBar from "../../components/sidebar/Sidebar";
import RegistIcon from "../../assets/images/icon-regist.png";

const Board = () => {
  const [progress, setProgress] = useState(null);
  const [isRegistModalOpen, setIsRegistModalOpen] = useState(false);

  FirebaseComponent();

  const openRegistModal = () => {
    setIsRegistModalOpen(!isRegistModalOpen);
  };

  const closeRegistModal = () => {
    setIsRegistModalOpen(false);
  };

  return (
    <React.Fragment>
      <S.Wrap>
        <SideBar progress={progress} setProgress={setProgress}></SideBar>
        <S.Summary>
          <RegisterReason></RegisterReason>
          <AnalysisResult></AnalysisResult>
        </S.Summary>
        <BMSData></BMSData>
        {/* <BiLineChart></BiLineChart> */}
        <BatteryBoard
          progressId={progress}
          setProgress={setProgress}
        ></BatteryBoard>
        <img src={RegistIcon} alt="regist" onClick={openRegistModal} />
        <RegistResult
          progress={progress}
          setProgress={setProgress}
          isOpen={isRegistModalOpen}
          onClose={closeRegistModal}
        ></RegistResult>
      </S.Wrap>
    </React.Fragment>
  );
};

const S = {
  Wrap: styled.div`
    > img {
      position: fixed;
      right: 20px;
      bottom: 20px;
      width: 70px;
      height: 70px;
      cursor: pointer;

      &:hover {
        filter: saturate(50%);
      }
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Graph: styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
  `,
  Summary: styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
  `,
};

export default Board;
