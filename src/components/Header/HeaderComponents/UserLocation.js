import styled from "styled-components";
import useStore from "../../../pages/globalstore";

const LocationWrapper = styled.div`
  display: flex;
  flex: 2 1 auto;
`;

export default function UserLocation({ currentUser }) {
  return (
    <LocationWrapper>
      {currentUser.street}, {currentUser.hausnummer} ✏️
    </LocationWrapper>
  );
}
