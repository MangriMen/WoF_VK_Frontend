import { mockWinList } from "mocks/mockWinList";
import { useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";

const Title = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const BlockStyled = styled.div`
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 1) 0%,
    rgba(18, 125, 226, 1) 100%
  );
  box-shadow: 0px 10px 10px 2px rgba(34, 60, 80, 0.2) inset;
`;

const ButtonStyled = styled.button`
  height: 3.5rem;
  max-width: 8.5rem;
  border: 4px solid orange;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: orange;
  background: radial-gradient(
    circle,
    rgba(129, 199, 237, 1) 0%,
    rgba(65, 62, 224, 1) 100%
  );
  box-shadow: 0px 10px 10px 2px rgba(34, 60, 80, 0.2) inset;
`;

const ButtonTextStyled = styled.span`
  font-size: inherit;
  text-transform: uppercase;
`;

const WinnerCard: FC<{
  name: string;
  winScore: number | string;
  time: number;
}> = ({ name, winScore, time }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "3.25rem",
        padding: "0.5rem",
        borderRadius: "0.25rem",
        boxSizing: "border-box",
        background:
          "linear-gradient(180deg, rgba(129,199,237,1) 0%, rgba(48,92,173,1) 100%)",
        color: "white",
      }}
    >
      <img
        style={{ height: "100%", aspectRatio: "1/1", borderRadius: "50%" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU"
      />
      <span>{name}</span>
      <span>{winScore}</span>
      <span>{new Date(Date.now() - time).getSeconds()} c.</span>
    </div>
  );
};

const MainPage: FC = () => {
  const [winnersList, setWinnersList] = useState<any[]>([]);

  useEffect(() => {
    setWinnersList(
      mockWinList.map((item) => (
        <WinnerCard key={item.time + item.winScore} {...item} />
      ))
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        background:
          "radial-gradient(circle, rgba(129,199,237,1) 0%, rgba(65,62,224,1) 100%)",
      }}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "space-between",
          padding: "1rem",
          height: "100%",
          gridTemplateRows: "3rem 3.5rem 3.5rem 3.5rem auto",
          rowGap: "1rem",
          columnGap: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Title
          style={{
            gridRow: "1",
            gridColumn: "1/3",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          WHEEL OF FORTUNE
        </Title>
        <BlockStyled
          style={{
            gridRow: "2/6",
            gridColumn: "1",
            aspectRatio: "1/1",
            height: "12rem",
            borderRadius: "1rem",
          }}
        ></BlockStyled>
        <ButtonStyled
          style={{
            gridRow: "2",
            gridColumn: "2",
          }}
        >
          <ButtonTextStyled>Jackpot 1000</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled
          style={{
            gridRow: "3",
            gridColumn: "2",
          }}
        >
          <ButtonTextStyled>Balance 100</ButtonTextStyled>
        </ButtonStyled>
        <ButtonStyled
          style={{
            gridRow: "4",
            gridColumn: "2",
            background: "darkred",
            boxShadow: "none",
          }}
        >
          <ButtonTextStyled>SPIN WHEEL</ButtonTextStyled>
        </ButtonStyled>
        <BlockStyled
          style={{
            gridRow: "5",
            gridColumn: "1/3",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem 1rem",
            overflow: "hidden",
          }}
        >
          <Title style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            WINNERS
          </Title>
          <div style={{ display: "grid", rowGap: "0.5rem" }}>{winnersList}</div>
        </BlockStyled>
      </div>
    </div>
  );
};

export default MainPage;
