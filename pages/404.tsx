import { InfoPane, TitleView, TextView } from "../components/Views";
import { TitleContainer } from "../components/Layouts";

const notFound = () => {
  return (
    <InfoPane>
      <TitleContainer>
        <TitleView>404</TitleView>
      </TitleContainer>
      <TextView>This page could not be found.</TextView>
    </InfoPane>
  );
};

export default notFound;
