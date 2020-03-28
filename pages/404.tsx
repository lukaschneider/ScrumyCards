import { InfoPane, TitleView, TextView } from "../components/Views";
import { TitleContainer } from "../components/Layouts";

export default () => {
  return (
    <InfoPane>
      <TitleContainer>
        <TitleView>404</TitleView>
      </TitleContainer>
      <TextView>This page could not be found.</TextView>
    </InfoPane>
  );
};
